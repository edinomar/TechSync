// Função para abrir modal
function openModal(categoria) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    const conteudos = {
        tecnologia: {
            titulo: '💻 Tecnologia',
            conteudo: `
                        <h3>Notebooks e PCs</h3>
                        <p>Reviews completos, comparativos de desempenho e guias de configuração para encontrar o computador perfeito.</p>
                        
                        <h3>Smartphones</h3>
                        <p>Análises dos últimos lançamentos, comparações de câmeras e testes de bateria dos principais celulares.</p>
                        
                        <h3>Periféricos e Acessórios</h3>
                        <p>Tudo sobre mouses, teclados, headsets, monitores e outros acessórios que fazem a diferença.</p>
                        
                        <h3>Hardware e Componentes</h3>
                        <p>Processadores, placas de vídeo, memórias e outros componentes essenciais para sua build.</p>
                    `
        },
        software: {
            titulo: '⚡ Software',
            conteudo: `
                        <h3>Sistemas Operacionais</h3>
                        <p>Tutoriais, dicas de otimização e comparações entre Windows, macOS e Linux.</p>
                        
                        <h3>Aplicativos</h3>
                        <p>Reviews de apps essenciais, produtividade, entretenimento e utilitários indispensáveis.</p>
                        
                        <h3>Ferramentas de Desenvolvimento</h3>
                        <p>IDEs, editores de código, ferramentas de versionamento e ambiente de desenvolvimento.</p>
                        
                        <h3>Segurança e Privacidade</h3>
                        <p>Antivírus, VPNs, criptografia e dicas para manter seus dados seguros.</p>
                    `
        },
        desenvolvimento: {
            titulo: '🚀 Desenvolvimento',
            conteudo: `
                        <h3>Tutoriais</h3>
                        <p>Passo a passo detalhados para aprender linguagens de programação e tecnologias.</p>
                        
                        <h3>Frameworks e Bibliotecas</h3>
                        <p>React, Vue, Angular, Node.js e outras tecnologias modernas de desenvolvimento.</p>
                        
                        <h3>Boas Práticas</h3>
                        <p>Clean Code, padrões de design, arquitetura de software e metodologias ágeis.</p>
                        
                        <h3>Projetos Open Source</h3>
                        <p>Contribuição para projetos, criação de repositórios e comunidade de desenvolvimento.</p>
                    `
        },
        noticias: {
            titulo: '📰 Notícias',
            conteudo: `
                        <h3>Lançamentos</h3>
                        <p>Primeiras informações sobre novos produtos, atualizações e features exclusivas.</p>
                        
                        <h3>Tendências de Mercado</h3>
                        <p>Análises de mercado, previsões e impactos das novas tecnologias no setor.</p>
                        
                        <h3>Eventos e Conferências</h3>
                        <p>Cobertura completa dos principais eventos tech: CES, WWDC, Google I/O e mais.</p>
                        
                        <h3>Aquisições e Fusões</h3>
                        <p>Mudanças no mercado tech, grandes negócios e impactos para os usuários.</p>
                    `
        },
        reviews: {
            titulo: '⭐ Guias e Reviews',
            conteudo: `
                        <h3>Comparativos de Produtos</h3>
                        <p>Análises lado a lado dos principais produtos para ajudar na sua decisão de compra.</p>
                        
                        <h3>Análises Detalhadas</h3>
                        <p>Reviews profundos com testes rigorosos, prós e contras de cada produto.</p>
                        
                        <h3>Guias de Compra</h3>
                        <p>Orientações completas para escolher o produto ideal para suas necessidades e orçamento.</p>
                        
                        <h3>Dicas e Truques</h3>
                        <p>Secrets e macetes para otimizar o uso dos seus dispositivos e aplicativos.</p>
                    `
        }
    };

    modalTitle.innerHTML = conteudos[categoria].titulo;
    modalBody.innerHTML = conteudos[categoria].conteudo;
    modal.style.display = 'block';
}

// Função para fechar modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Fechar modal clicando fora
window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Newsletter
document.querySelector('.newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.querySelector('.newsletter-input').value;
    if (email) {
        alert('✅ Obrigado por se inscrever! Você receberá nossas atualizações em: ' + email);
        document.querySelector('.newsletter-input').value = '';
    }
});

// Busca
document.querySelector('.search-btn').addEventListener('click', function () {
    const termo = document.querySelector('.search-box').value;
    if (termo) {
        alert('🔍 Buscando por: "' + termo + '"\n\nEm breve teremos resultados personalizados!');
    }
});

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Animação de entrada para cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.category-card').forEach(card => {
    observer.observe(card);
});


document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.categories-swiper', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });
});
