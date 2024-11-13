// Seleciona todos os links dos itens de lista dentro do menu
document.querySelectorAll('ul li a').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault(); // Evita a navegação padrão

        const href = event.currentTarget.getAttribute('href').substring(1); // Obtém o ID da seção alvo
        const targetSection = document.getElementById(href);

        // Remove a classe 'active' de todas as seções e aplica a nova seção alvo
        document.querySelectorAll('.console-details').forEach(section => {
            section.classList.remove('active');
        });
        targetSection.classList.add('active');
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Toca o som "Hadouken" ao clicar no botão
        playHadoukenSound();
    });
});

// Função para tocar o som "Hadouken"
function playHadoukenSound() {
    const audio = new Audio('src/audio/hadouken.mp3'); // Substitua pelo caminho correto do som
    audio.play();
}

// Função para tocar os áudios dos botões
function playAudio(audioId) {
    let audio;
    if (audioId === 'audio1') {
        audio = document.getElementById('audio1');
    } else if (audioId === 'audio2') {
        audio = document.getElementById('audio2');
    }
    audio.play();
}

// Função para tocar o áudio do Pac-Man
function playPacmanAudio(audioId) {
    let audio;
    if (audioId === 'pacman1') {
        audio = document.getElementById('pacman1');
    } else if (audioId === 'pacman2') {
        audio = document.getElementById('pacman2');
    }
    audio.play();
}
