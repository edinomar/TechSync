
const componentesData = [
    {
        id: 1,
        title: "Guia completo: como escolher SSD NVMe em 2026",
        excerpt: "Entenda PCIe 4.0 e 5.0, capacidade ideal, DRAM, aquecimento e um checklist rápido para acertar na compra.",
        category: "guias",
        icon: "💾",
        img: "/images/guia-ssd-nvme-2026.jpg",
        date: "2026-02-10",
        readTime: "12 min",
        link: "/categories/posts/guias/guia-ssd-nvme-2026.html"
    },
    {
        id: 2,
        title: "DDR5 vs DDR4: Diferença real em jogos e multitarefas",
        excerpt: "Testamos benchmarks em games e aplicações profissionais para medir o salto de performance da nova geração.",
        category: "comparativos",
        icon: "💾",
        img: "/images/ddr4-vs-ddr5-mini.png",
        date: "2025-09-22",
        readTime: "9 min",
        link: "/categories/posts/comparativos/ddr_5_vs_ddr_4_comparativo.html"
    },
    {
        id: 3,
        title: "Placas-mãe Z890 vs B860: Qual chipset escolher?",
        excerpt: "Analisamos diferenças entre chipsets topo de linha e intermediários para montar um PC equilibrado.",
        category: "comparativos",
        icon: "🔧",
        img: "/images/z890-vs-b860.png",
        date: "2025-09-19",
        readTime: "13 min",
        link: "/categories/posts/comparativos/Placas-mae-Z890-vs-B860.html"
    }
];


let currentPage = 1;
let currentFilter = 'all';
let currentSort = 'recent';
const itemsPerPage = 6;

// Inicialização
document.addEventListener('DOMContentLoaded', function () {
    renderContent();
    setupEventListeners();
});

function setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.category;
            currentPage = 1;
            renderContent();
        });
    });

    // Sort select
    document.getElementById('sortSelect').addEventListener('change', function () {
        currentSort = this.value;
        renderContent();
    });
}

function getFilteredContent() {
    let filtered = currentFilter === 'all' ? [...componentesData] : componentesData.filter(item => item.category === currentFilter);
    // Aplicar ordenação
    switch (currentSort) {
        case 'recent':
            filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'popular':
            filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
            break;
        case 'alphabetical':
            filtered.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'oldest':
            filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;    
    }
    return filtered;
}

function renderContent() {
    const filteredContent = getFilteredContent();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedContent = filteredContent.slice(startIndex, endIndex);

    const contentGrid = document.getElementById('newsGrid');

    if (paginatedContent.length === 0) {
        contentGrid.style.display = 'none';
        document.getElementById('emptyState').style.display = 'block';
        document.getElementById('pagination').style.display = 'none';
        return;
    }

    contentGrid.style.display = 'grid';
    document.getElementById('emptyState').style.display = 'none';
    document.getElementById('pagination').style.display = 'flex';

    contentGrid.innerHTML = paginatedContent.map((item, index) => `
                <article class="news-card fade-in" onclick="openContent(${item.id})" style="animation-delay: ${index * 0.1}s">
                    <div class="news-image">
                        <span class="news-category-tag">${getCategoryLabel(item.category)}</span>
                        ${item.img ? `<img src="${item.img}" alt="${item.title}" class="news-icon">` : `<span class="news-icon">${item.icon || '💻'}</span>`}
                    </div>
                    <div class="news-content">
                        <h2 class="news-title">${item.title}</h2>
                        <p class="news-excerpt">${item.excerpt}</p>
                        <div class="news-meta">
                            <span class="news-date">
                                📅 ${formatDate(item.date)}
                            </span>
                            <span class="read-time">${item.readTime}</span>
                        </div>
                    </div>
                </article>
            `).join('');

    updatePagination(filteredContent.length);
}

function getCategoryLabel(category) {
    const labels = {
        'lancamentos': 'Lançamentos',
        'reviews': 'Reviews',
        'comparativos': 'Comparativos',
        'tutoriais': 'Tutoriais',
        'guias': 'Guias de Compra'
    };
    return labels[category] || category;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

function updatePagination(totalItems) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pagination = document.getElementById('pagination');

    if (totalPages <= 1) {
        pagination.style.display = 'none';
        return;
    }

    let paginationHTML = `
                <button class="pagination-btn" id="prevBtn" onclick="changePage(-1)" ${currentPage === 1 ? 'disabled' : ''}>
                    « Anterior
                </button>
            `;

    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            paginationHTML += `
                        <button class="pagination-btn ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">
                            ${i}
                        </button>
                    `;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            paginationHTML += '<button class="pagination-btn" disabled>...</button>';
        }
    }

    paginationHTML += `
                <button class="pagination-btn" id="nextBtn" onclick="changePage(1)" ${currentPage === totalPages ? 'disabled' : ''}>
                    Próxima »
                </button>
            `;

    pagination.innerHTML = paginationHTML;
}

function changePage(direction) {
    const filteredContent = getFilteredContent();
    const totalPages = Math.ceil(filteredContent.length / itemsPerPage);

    const newPage = currentPage + direction;
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        renderContent();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function goToPage(page) {
    currentPage = page;
    renderContent();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openContent(contentId) {
    const content = componentesData.find(n => n.id === contentId);
    if (content && content.link) {
        window.location.href = content.link;
    } else {
        // Simular navegação para artigo
        alert(`Abrindo artigo: ${content.title}`);
    }
}


// Custom Dropdown Logic
const dropdownToggle = document.getElementById('dropdownToggle');
const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownOptions = document.querySelectorAll('.dropdown-option');
const selectedText = document.querySelector('.selected-text');

// Toggle dropdown
dropdownToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdownMenu.classList.contains('show');
    isOpen ? closeDropdown() : openDropdown();
});

// Select option
dropdownOptions.forEach(option => {
    option.addEventListener('click', function (e) {
        e.stopPropagation();

        // Remove selected from all
        dropdownOptions.forEach(opt => opt.classList.remove('selected'));

        // Add selected to clicked
        this.classList.add('selected');

        // Update selected text
        selectedText.textContent = this.textContent.replace('✓', '').trim();

        // Atualiza a variável de ordenação
        currentSort = this.dataset.value;

        // Renderiza conteúdo filtrado
        currentPage = 1;
        renderContent();

        // Fecha o dropdown
        closeDropdown();
    });
});

// Close on click outside
document.addEventListener('click', closeDropdown);

// Prevent close when clicking inside menu
dropdownMenu.addEventListener('click', (e) => e.stopPropagation());

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDropdown();
});

function openDropdown() {
    dropdownMenu.classList.add('show');
    dropdownToggle.classList.add('active');
}

function closeDropdown() {
    dropdownMenu.classList.remove('show');
    dropdownToggle.classList.remove('active');
}
