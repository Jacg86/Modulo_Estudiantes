document.addEventListener('DOMContentLoaded', () => {
    const btnJulio = document.getElementById('btn-julio');

    if (btnJulio) {
        btnJulio.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'https://jacg86.github.io';
        });
    }

    const btnDaniel = document.getElementById('btn-daniel');
    if (btnDaniel) {
        btnDaniel.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'https://danieljmzf.github.io/Hoja-de-vida/';
        });
    }

    const btnYulieth = document.getElementById('btn-yulieth');
    if (btnYulieth) {
        btnYulieth.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'https://github.com/yuliortega/mi_hoja_de_vida';
        });
    }

    const searchInput = document.querySelector('.search-input');
    const studentCards = document.querySelectorAll('.student-card');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();

            studentCards.forEach(card => {
                const studentNameElement = card.querySelector('.student-name');
                if (studentNameElement) {
                    const studentName = studentNameElement.textContent.toLowerCase();
                    if (studentName.includes(searchTerm)) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    }

    const settingsIcon = document.querySelector('.header-dropdown .icon-link');
    const settingsDropdown = document.querySelector('.header-dropdown-content');

    if (settingsIcon && settingsDropdown) {
        settingsIcon.addEventListener('click', (e) => {
            e.preventDefault();
            settingsDropdown.classList.toggle('show');
        });
    }

    window.addEventListener('click', (e) => {
        if (!e.target.closest('.header-dropdown')) {
            if (settingsDropdown && settingsDropdown.classList.contains('show')) {
                settingsDropdown.classList.remove('show');
            }
        }
    });
});
