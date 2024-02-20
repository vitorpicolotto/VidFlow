const containerVideos = document.querySelector('.videos__container')




const api = fetch("http://localhost:3000/videos") //o fetch faz uma busca na API, retornando uma promise
    .then(res => res.json()) //o then espera que a promise seja cumprida. Se ela for cumprida, executa o que está dentro do then. O status: 200 presente no console do naegador mostra que está tudo bem. o res é um objeto?
    .then((videos) =>
        videos.forEach((video) => {
            containerVideos.innerHTML += `
        <li class="videos__item">
            <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
            <div class="descricao-video">
                <img class="img-canal" src="${video.imagem}" alt="Logo do canal">
                <h3 class="titulo-video">${video.titulo}</h3>
                <p class="titulo-canal">${video.descricao}</p>
            </div>
        </li>
        `;
        })
    )
    .catch((erro) =>{
        containerVideos.innerHTML = `<p>Houve um erro ao carregar os vídeos.</p>`
        });
  

