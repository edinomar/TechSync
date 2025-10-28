// Dados simulados de notícias
const newsData = [
    {
        id: 1,
        title: "OpenAI lança GPT-5 com capacidades revolucionárias",
        excerpt: "A nova versão do ChatGPT promete revolucionar ainda mais a interação com IA, oferecendo capacidades multimodais avançadas.",
        category: "lancamentos",
        icon: "🤖",
        img: "/images/ChatGPT-OpenAI.png",
        date: "2025-09-18",
        readTime: "5 min",
        link: "/categories/posts/noticias/openAI-lanca-GPT-5.html"
    },
    {
        id: 2,
        title: "5G no Brasil: Velocidades chegam a 1Gbps em testes",
        excerpt: "Operadoras expandem cobertura 5G e usuários relatam velocidades impressionantes em grandes centros urbanos.",
        category: "tendencias",
        icon: "📶",
        img: "/images/5g-no-brasil-mini.png",
        date: "2025-09-13",
        readTime: "6 min",
        link: "/categories/posts/noticias/5g_brasil_velocidade.html"
    },
    {
        id: 3,
        title: "Tendência: Computação Quântica se aproxima do mainstream",
        excerpt: "Grandes empresas investem pesado em tecnologia quântica, prometendo resolver problemas complexos em segundos.",
        category: "tendencias",
        icon: "⚛️",
        img: "/images/computacao-quantica.png",
        date: "2025-09-16",
        readTime: "8 min",
        link: "/categories/posts/noticias/computacao-quantica.html"
    },
    {
        id: 4,
        title: "Blockchain e Criptomoedas: Tendências e Desenvolvimentos em 2025",
        excerpt: "Descubra as principais tendências do mercado de criptomoedas e os avanços da tecnologia blockchain que estão moldando o futuro das finanças digitais.",
        category: "tendencias",
        icon: "💰",
        img:"/images/blockchain-e-criptomoedas.jpg",
        date: "2025-10-07",
        readTime: "10 min",
        link:"/categories/posts/noticias/blockchain-e-criptomoedas.html"
    },
    {
        id: 5,
        title: "Microsoft adquire startup de IA por US$ 2 bilhões",
        excerpt: "A aquisição faz parte da estratégia da Microsoft de fortalecer sua posição no mercado de inteligência artificial.",
        category: "aquisicoes",
        icon: "💼",
        img:"/images/microsoft-adquire-startup.png",
        date: "2025-09-14",
        readTime: "6 min",
        link:"/categories/posts/noticias/microsoft-adquire-startup.html"
    },
    {
        id: 6,
        title: "Atração de Data Centers no Brasil: Incentivos Governamentais e Impactos",
        excerpt: "Análise sobre o pacote de incentivos em debate para atrair operadores globais, as vantagens competitivas do país, desafios práticos e efeitos econômicos esperados.",
        category: "startups",
        icon: "🚀",
        img:"/images/atracao_de_data_centers_no_brasil.png",
        date: "2025-10-07",
        readTime: "9 min",
        link:"/categories/posts/noticias/atracao_de_data_centers_no_brasil.html"
    },
    {
        id: 7,
        title: "Tesla revela novos detalhes sobre condução autônoma",
        excerpt: "Elon Musk apresenta avanços significativos na tecnologia FSD (Full Self-Driving) durante evento especial.",
        category: "tendencias",
        icon: "🚗",
        img: "/images/tesla-conducao-autonoma.png",
        date: "2025-09-12",
        readTime: "12 min",
        link:"/categories/posts/noticias/tesla-conducao-autonoma.html"
    },
    {
        id: 8,
        title: "CES 2025: Realidade Virtual atinge novo patamar",
        excerpt: "Feira de tecnologia de Las Vegas showcases dispositivos VR/AR com resolução 8K e haptic feedback avançado.",
        category: "eventos",
        icon: "🥽",
        img:"/images/realidade-virtual.png",
        date: "2025-09-11",
        readTime: "11 min",
        link:"/categories/posts/noticias/realidade-virtual.html"
    },
    {
        id: 9,
        title: "99 fora do ar: por que aconteceu, qual o impacto e como agir",
        excerpt: "Motoristas registraram instabilidade no aplicativo 99 — veja o que se sabe, as possíveis causas técnicas, impactos e orientações práticas para passageiros e motoristas",
        category: "eventos",
        icon: "🥽",
        img:"/images/99-fora-do-ar-mini.jpg",
        date: "2025-10-16",
        readTime: "7 min",
        link:"/categories/posts/noticias/99-fora-do-ar-instabilidade.html"
    },
        {
        id: 10,
        title: "3I/ATLAS: O Visitante Interestelar que Desafia Nosso Entendimento",
        excerpt: "Em julho de 2025, astrônomos detectaram um objeto vindo de fora do Sistema Solar com características únicas e intrigantes, desafiando nossas noções sobre corpos celestes interestelares.",
        category: "eventos",
        icon: "🥽",
        img:"/images/3i-atlas.jpg",
        date: "2025-10-28",
        readTime: "9 min",
        link:"/categories/posts/noticias/3i-atlas.html"
    },
    {
        id: 11,
        title: "PlayStation Plus Extra Outubro de 2025",
        excerpt: "Tudo sobre as novidades, preços e lançamentos que estão movimentando o catálogo da PS Plus Extra em Outubro 2025.",
        category: "lancamentos",
        icon: "🤖",
        img:"/images/playstation-plus-extra.jpg",
        date: "2025-10-29",
        readTime: "9 min",
        link:"/categories/posts/noticias/playstation-plus-extra.html"
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
            // Simular popularidade baseada no readTime (mais longo = mais popular)
            filtered.sort((a, b) => parseInt(b.readTime) - parseInt(a.readTime));
            break;
        case 'alphabetical':
            filtered.sort((a, b) => a.title.localeCompare(b.title));
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
        'lancamentos': 'Lançamentos',
        'tendencias': 'Tendências',
        'eventos': 'Eventos',
        'aquisicoes': 'Aquisições',
        'startups': 'Startups'
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