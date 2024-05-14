let username = "João";
var texto_nome = document.getElementById('username');
texto_nome.textContent = `Seja Bem-Vindo(a), ${username}`;


var cursos = [
    {
        "titulo": "Full-Stack",
        "descricao": "Construa o futuro da web! Aprenda a desenvolver aplicações completas, desde o front-end até o back-end, com nossa trilha Full-stack. Seja o arquiteto do digital!"
    },
    {
        "titulo": "Ciência de Dados",
        "descricao": "Desvende os segredos dos dados! Aprenda a extrair insights valiosos, desenvolver modelos preditivos e             impulsionar decisões inteligentes com nossa trilha de Ciência de Dados."
    },
    {
        "titulo": "Front-end e UX/UI",
        "descricao": "Dê vida às suas ideias! Domine as técnicas de design de interface e desenvolvimento front-end para criar experiências digitais incríveis. Explore nossa trilha Front-end e UX/UI agora!"
    }

];

// Função para criar um card com título, descrição e imagem
function createCard(data) {
    const card = document.createElement('div');
    card.classList.add('card_curso_perfil');

    const card_perfil = document.createElement('div');
    card_perfil.classList.add('card_texto_perfil');
    
    const titulo = document.createElement('p');
    titulo.textContent = data.titulo;
    titulo.classList.add('titulo');

    const descricao = document.createElement('p');
    descricao.textContent = data.descricao;
    descricao.classList.add('card_descricao');

    card_perfil.appendChild(titulo);
    card_perfil.appendChild(descricao);
    card.appendChild(card_perfil);

    return card;
}

document.addEventListener('DOMContentLoaded', function() {
    const cursosContainer = document.getElementById('cursos_perfil');

    cursos.forEach(item =>{
        const card = createCard(item);
        cursosContainer.appendChild(card)
    })
})