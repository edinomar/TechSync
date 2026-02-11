// Dados simulados de notícias
const newsData = [
    {
        id: 12,
        title: "Android 16 ou celular novo? 7 sinais para decidir sem erro em 2026",
        excerpt: "Guia direto com sinais objetivos para saber quando atualizar e quando trocar de smartphone sem cair em hype.",
        category: "guias",
        icon: "📲",
        img: "/images/android-16-atualizacao-ou-troca-2026.jpg",
        date: "2026-02-11",
        readTime: "12 min",
        link: "/categories/posts/guias/android-16-atualizacao-ou-troca-2026.html"
    },
    {
        id: 1,
        title: "Como escolher o smartphone ideal para você em 2026",
        excerpt: "Guia completo para escolher o celular perfeito considerando uso, orçamento e necessidades específicas.",
        category: "guias",
        icon: "🎯",
        img: "/images/como-escolher-seu-celular.png" ,
        date: "2026-01-09",
        readTime: "13 min",
        link: "/categories/posts/guias/guia_escolher_smartphone_2025.html"
    },
        {
        id: 9,
        title: "Nothing Phone 3: Design transparente e performance surpreendente",
        excerpt: "A Nothing revela seu terceiro smartphone com visual único e especificações que competem com gigantes do mercado.",
        category: "analises",
        icon: "✨",
        img: "/images/nothing_phone_3.png" ,
        date: "2025-09-10",
        readTime: "8 min",
        link: "/categories/posts/reviews/nothing_phone_3.html" 
    },
        {
        id: 11,
        title: "Pixel 9 Pro: Google aposta forte na fotografia computacional",
        excerpt: "Novo smartphone do Google traz recursos avançados de IA para fotografia e experiência Android pura otimizada.",
        category: "analises",
        icon: "📱",
        img: "/images/google-pixel-9-pro-mini.png" ,
        date: "2025-09-08",
        readTime: "10 min",
        link: "/categories/posts/reviews/pixel-9-pro.html"
    },
       {
        id: 3,
        title: "iPhone 16 vs Galaxy S25: Comparativo completo",
        excerpt: "Comparamos os principais flagships de 2025 em design, performance, câmeras, bateria e preço no Brasil.",
        category: "comparativos",
        icon: "⚡",
        img: "/images/iphone-vs-galaxyS25-mini.png" ,
        date: "2025-09-16",
        readTime: "15 min",
        link: "/categories/posts/comparativos/iPhone16-vs-GalaxyS25.html"
    },
        {
        id: 4,
        title: "Como otimizar a bateria do seu smartphone Android",
        excerpt: "Dicas práticas para aumentar a duração da bateria e melhorar a performance do seu celular Android.",
        category: "dicas",
        icon: "🔋",
        img: "/images/bateria-android-otimizacao-mini.png",
        date: "2025-09-15",
        readTime: "7 min",
        link: "/categories/posts/guias/como_otimizar_bateria_android.html" 
    },
        {
        id: 8,
        title: "Como limpar e otimizar seu PC para máxima performance",
        excerpt: "Tutorial passo a passo para deixar seu computador mais rápido com limpeza física e otimizações de software.",
        category: "dicas",
        icon: "🧹",
        img:"/images/limpar-otimizar-PC.png",
        date: "2025-09-11",
        readTime: "13 min",
        link: "/categories/posts/guias/limpar-otimizar-PC.html"
    },

];

let currentPage = 1;
let currentFilter = 'all';
let currentSort = 'recent';
const itemsPerPage = 6;

// Inicialização
document.addEventListener('DOMContentLoaded', function () {
    // Primeiro, verifica se há hash na URL e define o filtro
    checkHashAndSetFilter();
    // Depois renderiza as notícias com o filtro aplicado
    renderNews();
    // Por último, configura os event listeners
    setupEventListeners();
});

function checkHashAndSetFilter() {
    // Pega a hash da URL (ex: #lancamentos)
    const hash = window.location.hash.substring(1);
    
    if (hash) {
        const targetBtn = document.querySelector(`.filter-btn[data-category="${hash}"]`);
        if (targetBtn) {
            // Remove classe active de todos os botões
            document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
            // Marca o botão correto como ativo
            targetBtn.classList.add("active");
            // Define o filtro atual
            currentFilter = hash;
            // Reseta para a primeira página
            currentPage = 1;
        }
    }
}

function setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.category;
            currentPage = 1;
            
            // Atualiza a URL com o hash correspondente
            if (currentFilter !== 'all') {
                window.history.pushState(null, null, `#${currentFilter}`);
            } else {
                window.history.pushState(null, null, window.location.pathname);
            }
            
            renderNews();
        });
    });

    // Sort select
    document.getElementById('sortSelect').addEventListener('change', function () {
        currentSort = this.value;
        renderNews();
    });

    // Listener para mudanças na hash da URL (botão voltar/avançar do navegador)
    window.addEventListener('hashchange', function() {
        checkHashAndSetFilter();
        renderNews();
    });
}

function getFilteredNews() {
    let filtered = currentFilter === 'all' ? [...newsData] : newsData.filter(news => news.category === currentFilter);

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

function renderNews() {
    const filteredNews = getFilteredNews();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedNews = filteredNews.slice(startIndex, endIndex);

    const newsGrid = document.getElementById('newsGrid');

    if (paginatedNews.length === 0) {
        newsGrid.style.display = 'none';
        document.getElementById('emptyState').style.display = 'block';
        document.getElementById('pagination').style.display = 'none';
        return;
    }

    newsGrid.style.display = 'grid';
    document.getElementById('emptyState').style.display = 'none';
    document.getElementById('pagination').style.display = 'flex';

    newsGrid.innerHTML = paginatedNews.map((news, index) => `
        <article class="news-card fade-in" onclick="openContent(${news.id})" style="animation-delay: ${index * 0.1}s">
            <div class="news-image">
                <span class="news-category-tag">${getCategoryLabel(news.category)}</span>
                ${news.img ? `<img src="${news.img}" alt="${news.title}" class="news-icon">` : `<span class="news-icon">${news.icon || '💻'}</span>`}
            </div>
            <div class="news-content">
                <h2 class="news-title">${news.title}</h2>
                <p class="news-excerpt">${news.excerpt}</p>
                <div class="news-meta">
                    <span class="news-date">
                        📅 ${formatDate(news.date)}
                    </span>
                    <span class="read-time">${news.readTime}</span>
                </div>
            </div>
        </article>
    `).join('');

    updatePagination(filteredNews.length);
}

function getCategoryLabel(category) {
    const labels = {
        'guias': 'Comparativos de Produto',
        'analises': 'Análise Detalhada',
        'guias': 'Guias de Compa',
        'dicas': 'Dicas e Truques'
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
    const filteredNews = getFilteredNews();
    const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

    const newPage = currentPage + direction;
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        renderNews();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function goToPage(page) {
    currentPage = page;
    renderNews();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openContent(newsId) {
    const content = newsData.find(n => n.id === newsId);
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
