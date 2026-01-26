// Dados simulados de smartphones
const smartphoneData = [
    {
        id: 1,
        title: "Celular com a melhor bateria em 2026: quais realmente duram o dia todo?",
        excerpt: "Guia completo com análise real de autonomia, comparação de modelos e critérios técnicos para escolher um smartphone que realmente dura",
        category: "reviews",
        img: "/images/celular-com-a-melhor-bateria-em-2026-mini.jpg" ,
        date: "2026-01-26",
        readTime: "14 min",
        link: "/categories/posts/guias/celular-com-a-melhor-bateria-em-2026.html" 
    },
       {
        id: 2,
        title: "iPhone 16 Pro Max: Review completo do flagship da Apple",
        excerpt: "Analisamos o novo iPhone 16 Pro Max em todos os detalhes: câmeras, performance, bateria e recursos de IA integrados.",
        category: "reviews",
        img: "/images/iphone16promax.png" ,
        date: "2025-09-18",
        readTime: "12 min",
        link: "/categories/posts/reviews/iphone-16-pro-max.html" 
    },
        {
        id: 3,
        title: "Celular Lento, Travando e Superaquecendo? Descubra as Soluções Definitivas",
        excerpt: "Neste guia completo, você vai descobrir as causas desses problemas e aprender 15 soluções práticas e eficazes para recuperar o desempenho do seu celular.",
        category: "tutoriais",
        img: "/images/artigo-celular-html.jpg" ,
        date: "2026-01-15",
        readTime: "12 min",
        link: "/categories/posts/guias/artigo-celular-html.html" 
    },
            {
        id: 4,
        title: "Melhor Celular Custo-Benefício em 2026: Qual Vale Mais a Pena?",
        excerpt: "Descubra os smartphones com melhor relação custo-benefício em 2026. Analisamos desempenho, câmeras, bateria e preço para ajudar você a escolher o celular ideal sem gastar muito.",
        category: "guias",
        img: "/images/melhor_celular_custo_beneficio_em_2026.jpg" ,
        date: "2026-01-17",
        readTime: "9 min",
        link: "/categories/posts/guias/melhor_celular_custo_beneficio_em_2026.html" 
    },
    {
        id: 5,
        title: "Melhor celular custo-benefício até R$ 2.000 em 2026",
        excerpt: "Descubra qual é o melhor celular custo-benefício até R$ 2.000 em 2026. Comparação completa, prós e contras e recomendações certeiras para comprar bem.",
        category: "guias",
        img: "/images/melhor-celular-custo-beneficio-ate-2000.jpg" ,
        date: "2026-01-18",
        readTime: "10 min",
        link: "/categories/posts/comparativos/melhor-celular-custo-beneficio-ate-2000.html" 
    },
    {
        id: 6,
        title: "8 GB de RAM ainda é suficiente em 2026? Android, apps e jogos",
        excerpt: " Guia completo para entender se 8 GB de RAM atendem suas necessidades em 2026, com comparações reais e testes práticos",
        category: "guias",
        img: "/images/artigo_8gb_ram_2026_mini.jpg" ,
        date: "2026-01-18",
        readTime: "12 min",
        link: "/categories/posts/guias/artigo_8gb_ram_2026.html" 
    },
        {
        id: 7,
        title: "6G nos celulares: quando chega, como funciona e o que muda para os usuários",
        excerpt: "Descubra tudo sobre o 6G nos celulares: previsão de chegada, funcionamento, benefícios reais e se vale a pena esperar por essa tecnologia revolucionária.",
        category: "guias",
        img: "/images/artigo-6g-celulares.jpg" ,
        date: "2026-01-27",
        readTime: "12 min",
        link: "/categories/posts/guias/artigo-6g-celulares.html" 
    },
    {
        id: 14,
        title: "Samsung Galaxy S25 Ultra chega ao Brasil por R$ 11.999",
        excerpt: "O novo flagship da Samsung traz S Pen aprimorada, câmeras de 200MP e processador Snapdragon 8 Gen 4.",
        category: "lancamentos",
        icon: "📱",
        img: "/images/Samsung-Galaxy-S25-mini.png" ,
        date: "2025-09-17",
        readTime: "8 min",
        link: "/categories/posts/reviews/samsung_s_25_ultra.html" 
    },
    {
        id: 15,
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
        id: 16,
        title: "Como otimizar a bateria do seu smartphone Android",
        excerpt: "Dicas práticas para aumentar a duração da bateria e melhorar a performance do seu celular Android.",
        category: "tutoriais",
        icon: "🔋",
        img: "/images/bateria-android-otimizacao-mini.png",
        date: "2025-09-15",
        readTime: "7 min",
        link: "/categories/posts/guias/como_otimizar_bateria_android.html" 
    },
    {
        id: 17,
        title: "Xiaomi 14 Ultra: Fotografia profissional no celular",
        excerpt: "O novo smartphone da Xiaomi promete rivalizar com DSLRs profissionais em qualidade de imagem.",
        category: "reviews",
        icon: "📸",
        img: "/images/xiaomi-14-ultra-mini.jpg",
        date: "2025-09-14",
        readTime: "10 min",
        link: "/categories/posts/reviews/xiaomi-14-ultra.html"

    },
    {
        id: 18,
        title: "Motorola Edge 50 Pro: Custo-benefício imbatível",
        excerpt: "A Motorola surpreende com smartphone intermediário premium que oferece recursos de flagship por metade do preço.",
        category: "reviews",
        icon: "💰",
        img: "/images/motorola-edge-50-pro-mini.png",
        date: "2025-09-12",
        readTime: "9 min",
        link: "/categories/posts/reviews/motorola_edge_50_pro.html" 
    },
    {
        id: 19,
        title: "IA nos smartphones: Como a tecnologia está mudando o mobile",
        excerpt: "Recursos de inteligência artificial estão transformando como usamos nossos celulares no dia a dia.",
        category: "tendencias",
        icon: "🤖",
        img: "/images/ia-smartphones-mobile.png",
        date: "2025-09-11",
        readTime: "11 min",
        link: "/categories/posts/noticias/ia_smartphones_mobile.html" 
    },
    {
        id: 20,
        title: "Nothing Phone 3: Design transparente e performance surpreendente",
        excerpt: "A Nothing revela seu terceiro smartphone com visual único e especificações que competem com gigantes do mercado.",
        category: "lancamentos",
        icon: "✨",
        img: "/images/nothing_phone_3.png" ,
        date: "2025-09-10",
        readTime: "8 min",
        link: "/categories/posts/reviews/nothing_phone_3.html" 
    },
    {
        id: 21,
        title: "Como escolher o smartphone ideal para você em 2025",
        excerpt: "Guia completo para escolher o celular perfeito considerando uso, orçamento e necessidades específicas.",
        category: "tutoriais",
        icon: "🎯",
        img: "/images/como-escolher-seu-celular.png" ,
        date: "2025-09-09",
        readTime: "13 min",
        link: "/categories/posts/guias/guia_escolher_smartphone_2025.html"
    },
    {
        id: 22,
        title: "Pixel 9 Pro: Google aposta forte na fotografia computacional",
        excerpt: "Novo smartphone do Google traz recursos avançados de IA para fotografia e experiência Android pura otimizada.",
        category: "reviews",
        icon: "📱",
        img: "/images/google-pixel-9-pro-mini.png" ,
        date: "2025-09-08",
        readTime: "10 min",
        link: "/categories/posts/reviews/pixel-9-pro.html"
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
    let filtered = currentFilter === 'all' ? [...smartphoneData] : smartphoneData.filter(item => item.category === currentFilter);

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
                        ${item.img ? `<img src="${item.img}" alt="${item.title}" class="news-icon ">` : `<span class="news-icon">${item.icon || ''}</span>`}
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
        'tendencias': 'Tendências'
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
    const content = smartphoneData.find(n => n.id === contentId);
    if (content && content.link) {
        window.location.href = content.link;
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
