
// Header dinâmico
async function loadHeader() {
    try {
        // Detecta a raiz do site, independente da pasta
        const basePath = window.location.pathname.includes("/TechSync/")
            ? "/TechSync/"
            : "/";

        const response = await fetch(`${basePath}archive/header.html`);
        const html = await response.text();
        document.getElementById("header-container").innerHTML = html;

        // Inicializa tudo DEPOIS de injetar o HTML
        initializeMenus();
        initializeSearch();
    } catch (e) {
        console.error("Erro ao carregar header:", e);
    }
}


// Footer
async function loadFooter() {
    try {
        // Detecta a raiz do site, independente da pasta
        const basePath = window.location.pathname.includes("/TechSync/")
            ? "/TechSync/"
            : "/";

        const response = await fetch(`${basePath}archive/footer.html`);
        const html = await response.text();
        document.getElementById("footer-container").innerHTML = html;

        // Inicializa tudo DEPOIS de injetar o HTML
        initializeMenus();
        initializeSearch();
    } catch (e) {
       console.error("Erro ao carregar footer:", e);
    }
}


// Inicializa quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
    loadHeader();
    loadFooter();
});

// ========================================
// MENU MOBILE E NAVEGAÇÃO
// ========================================

function initializeMenus() {
    const mobileToggle = document.getElementById("mobile-toggle");
    const mobileMenu = document.getElementById("mobileMenu");

    console.log("Inicializando menus...");

    if (mobileToggle && mobileMenu) {
        // Remove listeners antigos para evitar duplicação
        mobileToggle.replaceWith(mobileToggle.cloneNode(true));
        const newMobileToggle = document.getElementById("mobile-toggle");

        newMobileToggle.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMobileMenu();
        });

        console.log("Menu mobile inicializado com sucesso");
    } else {
        console.error("Elementos do menu mobile não encontrados");
    }

    // Fechar menu ao clicar fora
    document.addEventListener('click', function (e) {
        if (mobileMenu && !mobileMenu.contains(e.target) && !e.target.closest('.mobile-toggle')) {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Fechar menu ao clicar em links
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-links a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Atalhos de teclado
    document.addEventListener('keydown', function (e) {
        // Ctrl/Cmd + K para focar na busca
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.focus();
            }
        }

        // ESC para fechar menu mobile
        if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenu) {
        const isActive = mobileMenu.classList.contains('active');
        mobileMenu.classList.toggle('active');
        const newState = mobileMenu.classList.contains('active');

        // Atualizar ícone do botão
        const mobileToggle = document.getElementById('mobile-toggle');
        const icon = mobileToggle?.querySelector('i');
        if (icon) {
            icon.className = newState ? 'fas fa-times' : 'fas fa-bars';
        }

        // Prevenir scroll do body quando menu estiver aberto
        document.body.style.overflow = newState ? 'hidden' : '';
    } else {
        console.error("Elemento mobileMenu não encontrado!");
    }
}

// ========================================
// BUSCA MOBILE EXPANSÍVEL
// ========================================

function initializeMobileSearch() {
    const searchContainer = document.querySelector('.search-container');
    const searchBox = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');
    
    if (!searchContainer || !searchBox || !searchBtn) {
        console.error('Elementos de busca mobile não encontrados');
        return;
    }
    
    // Função para expandir busca no mobile
    function expandSearch() {
        if (window.innerWidth <= 768) {
            searchContainer.classList.add('search-expanded');
            searchBox.focus();
        }
    }
    
    // Função para recolher busca
    function collapseSearch() {
        if (window.innerWidth <= 768 && searchBox.value === '') {
            searchContainer.classList.remove('search-expanded');
            searchBox.blur();
        }
    }
    
    // Clique no ÍCONE de busca para expandir
    searchBtn.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!searchContainer.classList.contains('search-expanded')) {
                e.preventDefault();
                e.stopPropagation();
                expandSearch();
            } else {
                // Se já está expandido, executa a busca
                if (searchBox.value.trim() !== '') {
                    openSearchResults();
                }
            }
        }
    });
    
    // Clique no campo de busca (mobile)
    searchBox.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && !searchContainer.classList.contains('search-expanded')) {
            e.preventDefault();
            expandSearch();
        }
    });
    
    // Clique fora para fechar (mobile)
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            searchContainer.classList.contains('search-expanded') &&
            !searchContainer.contains(e.target)) {
            collapseSearch();
        }
    });
    
    // Ao perder foco e estar vazio
    searchBox.addEventListener('blur', () => {
        setTimeout(() => {
            collapseSearch();
        }, 200);
    });
    
    // ESC para fechar
    searchBox.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            collapseSearch();
        }
    });
    
    // Remover expansão ao redimensionar para desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            searchContainer.classList.remove('search-expanded');
        }
    });

    console.log('Busca mobile expansível inicializada');
}

// ========================================
// ÍNDICE DE BUSCA
// ========================================

const searchIndex = [
    {
        id: 1,
        title: "Notebooks e PCs",
        url: "/categories/posts/tecnologia/tecnologia-notebooks-index.html",
        description: "Guia completo sobre notebooks e computadores pessoais",
        content: "notebooks pcs computadores hardware processadores intel amd memoria ram ssd configurações desempenho",
        tags: ["hardware", "notebooks", "tecnologia"]
    },
    {
        id: 2,
        title: "Smartphones",
        url: "/categories/posts/tecnologia/tecnologia-smartphones-index.html",
        description: "Tudo sobre smartphones e dispositivos móveis",
        content: "smartphones celulares android ios apple samsung xiaomi cameras bateria processadores mobile",
        tags: ["mobile", "smartphones", "tecnologia"]
    },
    {
        id: 3,
        title: "Periféricos",
        url: "/categories/posts/tecnologia/tecnologia-perifericos-index.html",
        description: "Reviews e guias de periféricos para seu setup",
        content: "periféricos mouse teclado headset monitor webcam microfone setup gaming escritorio",
        tags: ["periféricos", "hardware", "setup"]
    },
    {
        id: 4,
        title: "Hardware",
        url: "/categories/posts/tecnologia/tecnologia-hardware-index.html",
        description: "Componentes e hardware de computadores",
        content: "hardware componentes placa mae processador gpu placa video memoria cooler fonte gabinete",
        tags: ["hardware", "componentes", "tecnologia"]
    },
    {
        id: 5,
        title: "Segurança e Privacidade",
        url: "/categories/posts/software/seguranca-e-privacidade.html",
        description: "Dicas e ferramentas para proteger seus dados",
        content: "segurança privacidade criptografia vpn antivirus firewall senha autenticacao dados proteção",
        tags: ["segurança", "privacidade", "software"]
    },
    {
        id: 6,
        title: "Sistemas Operacionais",
        url: "/categories/posts/software/sistemas-operacionais.html",
        description: "Guias sobre Windows, Linux e macOS",
        content: "sistemas operacionais windows linux macos ubuntu debian fedora instalação configuração",
        tags: ["software", "sistemas", "operacionais"]
    },
    {
        id: 7,
        title: "Banco de Dados",
        url: "/categories/posts/software/banco-de-dados.html",
        description: "Tudo sobre bancos de dados e SQL",
        content: "banco dados database sql mysql postgresql mongodb nosql queries otimização performance",
        tags: ["database", "sql", "desenvolvimento"]
    },
    {
        id: 8,
        title: "Ferramentas Dev",
        url: "/categories/tools/tools-index.html",
        description: "Ferramentas essenciais para desenvolvedores",
        content: "ferramentas desenvolvimento vscode git github gitlab docker kubernetes ide editor codigo",
        tags: ["ferramentas", "desenvolvimento", "dev"]
    },
    {
        id: 9,
        title: "Boas Práticas",
        url: "/categories/posts/desenvolvimento/boas-praticas.html",
        description: "Boas práticas de desenvolvimento de software",
        content: "boas praticas clean code solid design patterns arquitetura codigo limpo qualidade testes",
        tags: ["desenvolvimento", "boas-praticas", "codigo"]
    },
    {
        id: 10,
        title: "DevOps & Deploy",
        url: "/categories/posts/desenvolvimento/ferramentas-de-Desenvolvimento/devOps-deploy.html",
        description: "Deploy, CI/CD e práticas DevOps",
        content: "devops deploy ci cd continuous integration deployment docker kubernetes jenkins github actions",
        tags: ["devops", "deploy", "ci-cd"]
    },
    {
        id: 11,
        title: "Notícias Tech",
        url: "/categories/noticias.html",
        description: "Últimas notícias do mundo da tecnologia",
        content: "noticias tecnologia novidades lancamentos produtos empresas tech inovacao tendencias",
        tags: ["noticias", "tech", "novidades"]
    },
    {
        id: 12,
        title: "Reviews",
        url: "/categories/reviews.html",
        description: "Reviews completos de produtos tech",
        content: "reviews analises avaliações produtos gadgets tecnologia opiniao testes benchmark",
        tags: ["reviews", "analises", "produtos"]
    }
];

// ========================================
// FUNÇÕES DE BUSCA
// ========================================

function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

function calculateRelevance(item, queryWords, fullQuery) {
    let score = 0;

    const title = normalizeText(item.title);
    const description = normalizeText(item.description);
    const content = normalizeText(item.content);
    const tags = item.tags.map(tag => normalizeText(tag)).join(' ');

    // Correspondência exata aumenta muito o score
    if (title.includes(fullQuery)) score += 100;
    if (description.includes(fullQuery)) score += 50;
    if (content.includes(fullQuery)) score += 30;
    if (tags.includes(fullQuery)) score += 40;

    // Correspondência por palavras individuais
    queryWords.forEach(word => {
        if (title.includes(word)) score += 10;
        if (tags.includes(word)) score += 8;
        if (description.includes(word)) score += 5;
        if (content.includes(word)) score += 3;
    });

    return score;
}

function search(query) {
    if (!query || query.trim() === '') {
        return [];
    }

    const normalizedQuery = normalizeText(query);
    const queryWords = normalizedQuery.split(' ').filter(word => word.length > 0);
    const results = [];

    searchIndex.forEach(item => {
        const score = calculateRelevance(item, queryWords, normalizedQuery);
        if (score > 0) {
            results.push({
                ...item,
                score: score
            });
        }
    });

    results.sort((a, b) => b.score - a.score);
    return results;
}

function highlightText(text, query) {
    if (!query) return text;

    const queryWords = query.split(' ').filter(word => word.length > 0);
    let highlightedText = text;

    queryWords.forEach(word => {
        const regex = new RegExp(`(${escapeRegex(word)})`, 'gi');
        highlightedText = highlightedText.replace(regex, '<span class="highlight">$1</span>');
    });

    return highlightedText;
}

function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ========================================
// INTERFACE DE RESULTADOS
// ========================================

function openSearchResults() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) {
        console.error('searchInput não encontrado');
        return;
    }

    const query = searchInput.value.trim();
    if (query === '') {
        return;
    }

    const results = search(query);
    displayResults(results, query);
    
    const overlay = document.getElementById('searchResultsOverlay');
    if (overlay) {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeSearchResults() {
    const overlay = document.getElementById('searchResultsOverlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function displayResults(results, query) {
    const resultsInfo = document.getElementById('resultsInfo');
    const resultsList = document.getElementById('resultsList');

    if (!resultsInfo || !resultsList) {
        console.error('Elementos de resultados não encontrados');
        return;
    }

    resultsList.innerHTML = '';

    if (results.length === 0) {
        resultsInfo.textContent = 'Nenhum resultado encontrado';
        resultsList.innerHTML = '<div class="no-results">😕 Não encontramos nada com esse termo. Tente outra busca!</div>';
        return;
    }

    resultsInfo.textContent = `${results.length} resultado(s) encontrado(s) para "${query}"`;

    results.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.className = 'result-item';

        resultElement.innerHTML = `
            <div class="result-title">${highlightText(result.title, query)}</div>
            <div class="result-url">${result.url}</div>
            <div class="result-description">${highlightText(result.description, query)}</div>
            <div class="result-tags">
                ${result.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        `;

        resultElement.addEventListener('click', () => {
            window.location.href = result.url;
        });

        resultsList.appendChild(resultElement);
    });
}

// ========================================
// INICIALIZAÇÃO DA BUSCA
// ========================================

function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResultsOverlay = document.getElementById('searchResultsOverlay');

    if (!searchInput) {
        console.error('searchInput não encontrado');
        return;
    }

    if (!searchResultsOverlay) {
        console.error('searchResultsOverlay não encontrado');
        return;
    }
    
    // Inicializa busca mobile expansível
    initializeMobileSearch();

    let searchTimeout;

    // Busca em tempo real conforme o usuário digita
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim();

        if (query === '') {
            closeSearchResults();
            return;
        }

        // Aguarda 300ms após o usuário parar de digitar
        searchTimeout = setTimeout(() => {
            const results = search(query);
            displayResults(results, query);
            searchResultsOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }, 300);
    });

    // Mantém a funcionalidade de Enter também
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            clearTimeout(searchTimeout);
            openSearchResults();
        }
    });

    // Fecha ao clicar fora
    searchResultsOverlay.addEventListener('click', (e) => {
        if (e.target.id === 'searchResultsOverlay') {
            closeSearchResults();
        }
    });

    // Fecha com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchResultsOverlay.classList.contains('active')) {
            closeSearchResults();
        }
    });
}

// ========================================
// FUNÇÕES DE DEBUG
// ========================================

function debugMenu() {
    console.log("=== DEBUG MENU ===");
    console.log("Mobile toggle:", document.getElementById("mobile-toggle"));
    console.log("Mobile menu:", document.getElementById("mobileMenu"));
    console.log("Nav menu:", document.getElementById("nav-menu"));
    console.log("Search input:", document.getElementById("searchInput"));
    console.log("Header container:", document.getElementById("header-container"));
    console.log("Search container:", document.querySelector(".search-container"));
}

// ========================================
// FUNÇÕES GLOBAIS
// ========================================

// Torna as funções globais para serem chamadas pelo HTML e debug
window.toggleMobileMenu = toggleMobileMenu;
window.debugMenu = debugMenu;
window.openSearchResults = openSearchResults;
window.closeSearchResults = closeSearchResults;


// Botão de voltar ao topo
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animação suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Destaque de código ao passar o mouse
document.querySelectorAll('.code-example').forEach(codeBlock => {
    codeBlock.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.01)';
        this.style.transition = 'transform 0.3s';
    });

    codeBlock.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});
