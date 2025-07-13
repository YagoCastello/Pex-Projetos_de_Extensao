document.addEventListener('DOMContentLoaded', function() {
    // Toggle menu mobile
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            // Toggle classes
            menuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Fecha o menu ao clicar em um link
        const mobileLinks = document.querySelectorAll('.mobile-nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }

    // Preenche o ano atual no rodapé
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Dados das atividades
    const activities = [
        {
            title: "Time de Futebol",
            description: "Junte-se ao nosso time competitivo de futebol e desenvolva habilidades de trabalho em equipe enquanto se mantém ativo.",
            schedule: "Terças e Quintas, 16:00 - 17:30",
            ageGroup: "8-14 anos"
        },
        {
            title: "Oficina de Arte",
            description: "Expresse criatividade através de vários meios artísticos sob a orientação de professores qualificados.",
            schedule: "Segundas e Quartas, 15:45 - 17:00",
            ageGroup: "Todas as idades"
        },
        {
            title: "Clube de Ciências",
            description: "Explore as maravilhas da ciência através de experimentos práticos e projetos.",
            schedule: "Sextas, 15:45 - 17:15",
            ageGroup: "10-16 anos"
        },
        {
            title: "Clube de Xadrez",
            description: "Aprenda estratégia e habilidades de pensamento crítico através do jogo de xadrez.",
            schedule: "Terças, 15:45 - 16:45",
            ageGroup: "7+ anos"
        },
        {
            title: "Aulas de Música",
            description: "Aulas individuais e em grupo de música para vários instrumentos.",
            schedule: "Vários horários disponíveis",
            ageGroup: "Todas as idades"
        },
        {
            title: "Equipe de Debate",
            description: "Desenvolva habilidades de fala pública e argumentação em nossa premiada equipe de debate.",
            schedule: "Quartas e Sextas, 16:00 - 17:30",
            ageGroup: "12-18 anos"
        }
    ];

    // Preenche a grade de atividades dinamicamente
    const activitiesGrid = document.getElementById('activities-grid');
    
    if (activitiesGrid) {
        activities.forEach(activity => {
            const activityCard = document.createElement('div');
            activityCard.className = 'activity-card';
            
            activityCard.innerHTML = `
                <h3 class="activity-title">${activity.title}</h3>
                <p class="activity-description">${activity.description}</p>
                <div class="activity-details">
                    <p><strong>Horário:</strong> ${activity.schedule}</p>
                    <p><strong>Faixa Etária:</strong> ${activity.ageGroup}</p>
                </div>
            `;
            
            activitiesGrid.appendChild(activityCard);
        });
    }

    // Smooth scroll para links de navegação
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header-fixed').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});