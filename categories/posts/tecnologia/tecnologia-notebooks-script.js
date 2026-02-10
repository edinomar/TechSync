// Dados simulados de notebooks e PCs
const notebookPcData = [

    {
        id: 1,
        title: "Como escolher o notebook ideal em 2026: Guia completo para todas as necessidades",
        excerpt: "Escolher um notebook em 2026 pode ser desafiador com tantas opções no mercado. Este guia detalhado ajuda você a encontrar o laptop perfeito para suas necessidades, seja para trabalho, estudo ou jogos.",
        category: "guias",
        img: "/images/como-escolher-notebook-2026.jpg",
        date: "2026-01-21",
        readTime: "15 min",
        link: "/categories/posts/guias/como-escolher-notebook-2026.html"
    },
    {
        id: 2,
        title: "Como montar um PC Gamer com R$ 3.000 em 2025",
        excerpt: "Guia completo com lista de componentes, dicas de montagem e onde economizar sem perder performance.",
        category: "guias",
        icon: "🔧",
        img: "/images/pc-gamer-3000-mini.png",
        date: "2025-09-15",
        readTime: "18 min",
        link: "/categories/posts/guias/pc-gamer-3000.html"
    },
    {
        id: 20,
        title: "9 Melhores Jogos Leves para PC Fraco em 2026",
        excerpt: "Tem um PC fraco e acha que não dá pra jogar nada legal? Você está completamente enganado! Existe uma infinidade de jogos incríveis pra você.",
        category: "guias",
        icon: "💻",
        img: "/images/jogos-leves-pc.jpg",
        date: "2026-01-15",
        readTime: "12 min",
        link: "/categories/posts/guias/jogos-leves-pc.html"
    },
    {
        id: 21,
        title: "MacBook Pro M4: Apple revoluciona novamente o mercado de notebooks",
        excerpt: "Novo processador M4 promete 40% mais performance e 6 horas a mais de bateria comparado ao M3. Análise completa das novidades.",
        category: "reviews",
        img: "/images/macbook-pro-m4.png",
        date: "2025-09-18",
        readTime: "7 min",
        link: "/categories/posts/reviews/macbook-pro-m4.html"
    },

    {
        id: 22,
        title: "Dell XPS 15 2025: O notebook premium que compete com MacBook",
        excerpt: "Nova geração do XPS 15 traz tela OLED 4K, Intel Core Ultra e design ainda mais refinado. Vale a pena o investimento?",
        category: "reviews",
        icon: "💻",
        img: "/images/dell-xps-15-mini.png",
        date: "2025-09-17",
        readTime: "12 min",
        link: "/categories/posts/reviews/dell-xps-15.html"
    },
    {
        id: 23,
        title: "Gaming Desktop vs Console: Qual escolher em 2025?",
        excerpt: "Comparamos custos, performance e biblioteca de jogos entre PCs gamers e consoles de nova geração.",
        category: "comparativos",
        icon: "🎮",
        img: "/images/desktop-vs-console.png",
        date: "2025-09-16",
        readTime: "16 min",
        link: "/categories/posts/comparativos/desktop-vs-console.html"
    },
    {
        id: 25,
        title: "Lenovo ThinkPad X1 Carbon Gen 12: Produtividade em estado puro",
        excerpt: "O notebook corporativo mais famoso do mundo ganha nova geração. Testamos durabilidade, performance e autonomia.",
        category: "reviews",
        icon: "💼",
        img: "/images/lenovo-thinkpad-x1-carbon-gen12.png",
        date: "2025-09-14",
        readTime: "11 min",
        link: "/categories/posts/reviews/lenovo-thinkpad-x1-carbon-gen12.html"
    },
    {
        id: 27,
        title: "Framework Laptop: O notebook modular que você pode reparar",
        excerpt: "Conheça o laptop sustentável que permite trocar praticamente todos os componentes. Futuro dos notebooks?",
        category: "lancamentos",
        icon: "🔄",
        img: "/images/Framework-Laptop.png",
        date: "2025-09-12",
        readTime: "10 min",
        link: "/categories/posts/reviews/framework-laptop.html"
    },
    {
        id: 28,
        title: "Como limpar e otimizar seu PC para máxima performance [Guia 2026]",
        excerpt: "Tutorial passo a passo para deixar seu computador mais rápido com limpeza física e otimizações de software.",
        category: "tutoriais",
        icon: "🧹",
        img: "/images/limpar-otimizar-PC.png",
        date: "2025-09-11",
        readTime: "13 min",
        link: "/categories/posts/guias/limpar-otimizar-PC.html"
    },
    {
        id: 29,
        title: "ASUS ROG Strix G18: O notebook gamer que supera desktops",
        excerpt: "Com RTX 4090 mobile e tela de 240Hz, este notebook gamer promete performance de desktop. Mas esquenta muito?",
        category: "reviews",
        icon: "⚡",
        img: "/images/ASUS-ROG-Strix-G18-mini.png",
        date: "2025-09-10",
        readTime: "15 min",
        link: "/categories/posts/reviews/ASUS-ROG-Strix-G18.html"
    },
    {
        id: 30,
        title: "Processadores Intel vs AMD: Qual escolher em 2025?",
        excerpt: "Comparativo detalhado entre as últimas gerações de processadores para diferentes perfis de uso e orçamentos.",
        category: "comparativos",
        icon: "⚙️",
        img: "/images/intel-vs-amd.png",
        date: "2025-09-09",
        readTime: "17 min",
        link: "/categories/posts/comparativos/processadores-Intel-vs-AMD.html"
    },
    {
        id: 31,
        title: "Chromebooks em 2025: Alternativa real aos notebooks tradicionais?",
        excerpt: "Analisamos se os laptops com Chrome OS evoluíram o suficiente para substituir Windows e macOS no dia a dia.",
        category: "comparativos",
        icon: "🌐",
        img: "/images/chromebooks-2025.png",
        date: "2025-09-07",
        readTime: "11 min",
        link: "/categories/posts/comparativos/chromebooks-2025.html"
    },
    {
        id: 32,
        title: "Como escolher a placa de vídeo ideal para seu orçamento [Guia 2026]",
        excerpt: "Guia completo das GPUs disponíveis no mercado brasileiro, desde entrada até high-end, com análise custo-benefício.",
        category: "guias",
        icon: "🎯",
        img: "/images/como-escolher-placa-de-video.png",
        date: "2025-09-06",
        readTime: "20 min",
        link: "/categories/posts/guias/como-escolher-placa-de-video.html"
    },
    {
        id: 33,
        title: "SSD vs HDD em 2025: Ainda faz sentido usar disco rígido?",
        excerpt: "Comparamos velocidade, durabilidade, preço e capacidade entre SSDs e HDDs. Qual escolher para cada situação?",
        category: "tutoriais",
        icon: "💾",
        img: "/images/SSD-vs-HD-mini.png",
        date: "2025-09-04",
        readTime: "8 min",
        link: "/categories/posts/comparativos/SSD-vs-HDD.html"
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
    let filtered = currentFilter === 'all' ? [...notebookPcData] : notebookPcData.filter(item => item.category === currentFilter);

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
    const content = notebookPcData.find(n => n.id === contentId);
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
