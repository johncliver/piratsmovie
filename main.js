const movie = [
  // {
  //   img:'img',
  //   title:'title',
  //   category:'category',
  //   iframe:'iframe',
  //   episodes:[]
  // },
  {
    img:'https://m.media-amazon.com/images/M/MV5BNzZmOTU1ZTEtYzVhNi00NzQxLWI5ZjAtNWNhNjEwY2E3YmZjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg',
    title:'Fast Y Furious 10',
    category:'movie',
    iframe:'//pelisplay.io/play?id=MTY4NzQ3&option=castell',
    episodes:[]
  }, 
  {
    img:'https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_FMjpg_UX1000_.jpg',
    title:'Super Mario Bros La película',
    category:'movie',
    iframe:'//pelisplay.io/play?id=MTY4NTA3&option=castell',
    episodes:[]
  }, 
  {
    img:'https://static.cinepolis.com/resources/mx/movies/posters/414x603/42129-729588-20230405074853.jpg',
    title:'Evil Dead El Despertar Posesión infernal El despertar (2023)',
    category:'movie',
    iframe:'https://2323245.xyz/video/tt13345606/',
    episodes:[]
  }, 
  {
    img:'https://m.media-amazon.com/images/M/MV5BNmQzOWZhOTMtZTcxNC00MTdkLWEwYmUtOWVmOTFhNTdkNjRkXkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_.jpg',
    title:'Guy Ritchies The Covenant El Pacto',
    category:'movie',
    iframe:'//pelisplay.io/play?id=MTY4NzA5&option=latin',
    episodes:[]
  }, 
  {
    img:'https://m.media-amazon.com/images/M/MV5BZTUwYmYwMzUtYmIyZS00OWM3LWE3MWEtM2NjYTk0NzhiM2NmXkEyXkFqcGdeQXVyNDAyNjg5MzY@._V1_FMjpg_UX1000_.jpg',
    title:'About My Father Todo sobre mi padre (2023)',
    category:'movie',
    iframe:'https://2323245.xyz/video/tt8373206/',
    episodes:[]
  }, 
  { 
    img:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/7f6ff03e-aeaf-435e-9ed9-ca9664eb639d.jpg',
    title:'John Wick 4 (2023)',
    category:'movie',
    iframe:'https://2323245.xyz/video/tt10366206/',
    episodes:[]
  }, 
  {
    img:'https://pics.filmaffinity.com/La_ballena_The_Whale-547391789-large.jpg',
    title:'La Ballena The Whale (2022)',
    category:'movie',
    iframe:'https://2323245.xyz/video/tt13833688/',
    episodes:[]
  }, 
  {
    img:'https://pics.filmaffinity.com/Oso_vicioso-808012708-large.jpg',
    title:'Oso vicioso (2023) Cocaine Bear',
    category:'movie',
    iframe:'https://2323245.xyz/video/tt14209916/',
    episodes:[]
  }, 
  {
    img:'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg',
    title:'Avatar: El sentido del agua (2022) Avatar: The Way of Water',
    category:'movie',
    iframe:'https://2323245.xyz/video/tt1630029/',
    episodes:[]
  }, 
  {
    img:'https://upload.wikimedia.org/wikipedia/en/2/21/Black_Clover_Sword_of_The_Wizard_King.jpg',
    title:'Black Clover La espada del rey mago (2023) Black Clover: Sword of the Wizard King',
    category:'anime',
    iframe:'https://2323245.xyz/video/tt22868844/',
    episodes:[]
  },  
  {
    img: 'https://media.glamour.mx/photos/629e6b4b46002ba2beefc456/master/w_2000,h_3000,c_limit/jenna-ortega-es-merlina.jpg',
    title: 'Merlina',
    category: 'serie',
    iframe: '//pelisplay.io/play?id=MTY3NDgw&option=latin',
    episodes: [
      {
        title: 1,
        videoUrl: '//pelisplay.io/play?id=MTY3NDgw&option=latin',
      },
      {
        title: 2,
        videoUrl: '//pelisplay.io/play?id=MTY3NDc5&option=latin',
      },
      {
        title: 3,
        videoUrl: '//pelisplay.io/play?id=MTY3NDc4&option=castell',
      },
      {
        title: 4,
        videoUrl: '//pelisplay.io/play?id=MTY3NDY4&option=castell',
      },
      {
        title: 5,
        videoUrl: '//pelisplay.io/play?id=MTY3NDY3&option=castell',
      },
      {
        title: 6,
        videoUrl: '//pelisplay.io/play?id=MTY3NDY2&option=castell',
      },
      {
        title: 7,
        videoUrl: '//pelisplay.io/play?id=MTY3NDY1&option=castell',
      },
      {
        title: 8,
        videoUrl: '//pelisplay.io/play?id=MTY3NDY0&option=castell',
      },
    ]
  },
  {
    img: 'https://m.media-amazon.com/images/M/MV5BMmM3OWU0YWItNTAzMC00YjNlLWJiM2ItODY5NjY0OTA4OTY1XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
    category: 'movie',
    iframe: 'https://lvturbo.com/e/48slqtsgyocn?poster=https://i.embedsito.net/t/p/original/7e9MVGg8efOhoA2R9XhZcGWTC5Z.jpg&amp;',
    title: 'Flash 2023',
    episodes:[]
  },
];

console.log(movie);

function searchMovies(searchTerm) {
  const searchResults = movie.filter((item) => {
    return (
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return searchResults;
}

function displayMovies(movies) {
  const resultContainer = document.getElementById('result');
  resultContainer.innerHTML = '';

  movies.forEach(item => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('h3');
    const category = document.createElement('p');

    div.append(img, title, category);
    div.classList.add('card');
    div.onclick = () => {
      var body = document.body,
        newBody = document.createElement('body'),
        back = document.createElement('a'),
        title = document.createElement('h3'),
        iframe = document.createElement('div'),
        ads = document.createElement('center');

      body.parentElement.replaceChild(newBody, body);
      window.scrollTo({ top: 0, behavior: 'auto' });

      back.innerHTML = '<svg xmlns="http://www.w3.o rg/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path></svg>';
      back.onclick = () => {
        newBody.parentElement.replaceChild(body, newBody);
        body.append(resultContainer);
      };

      title.textContent = item.title;
      title.style.textAlign = 'center';
      title.style.marginTop = -35 + 'px';
      title.style.marginLeft=35+'px';

      iframe.innerHTML = `<iframe id="IFR" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" src="${item.iframe}"></iframe>`;
      iframe.style.marginTop = 20 + 'px';
      iframe.style.backgroundColor='#292929';

       // Agregar la sección de episodios
       const episodesContainer = document.createElement('div');
       episodesContainer.classList.add('episodes-container');
 
       const episodes = item.episodes;
       const numEpisodes = episodes.length;
 
       if (numEpisodes > 10) {
         const numSeasons = Math.ceil(numEpisodes / 10); // Calcular el número de temporadas
 
         for (let i = 0; i < numSeasons; i++) {
           const seasonContainer = document.createElement('div');
           seasonContainer.classList.add('season-container');

           const seasonTitle = document.createElement('h4');
           seasonTitle.textContent = `Temporada ${i + 1}`;
           seasonTitle.setAttribute('style', 'padding-left:40px');

           seasonContainer.appendChild(seasonTitle);
 
           const startIndex = i * 10;
           const endIndex = Math.min((i + 1) * 10, numEpisodes);
           const seasonEpisodes = episodes.slice(startIndex, endIndex);
 
           seasonEpisodes.forEach((episode, index) => {
             const episodeLink = document.createElement('li');
             episodeLink.textContent = `Episodio ${startIndex + index + 1}: ${episode.title}`;
             episodeLink.onclick=()=>{
              iframe.innerHTML = `<iframe id="IFR" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" src="${episode.videoUrl}"></iframe>`;
              ads.innerHTML='<iframe id="ads" src="//a.realsrv.com/iframe.php?idzone=5012366&size=728x90" width="728" height="90" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe><iframe id="ads" src="//a.realsrv.com/iframe.php?idzone=5012366&size=728x90" width="728" height="90" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>';
            }
             seasonContainer.appendChild(episodeLink);
           });
 
           episodesContainer.appendChild(seasonContainer);
           episodesContainer.style.overflowY='scroll';
         }
       } else {
         episodes.forEach((episode, index) => {
           const episodeLink = document.createElement('li');
           episodeLink.textContent = `Episodio ${index + 1}: ${episode.title}`;
           episodeLink.onclick=()=>{
            title.textContent=`${item.title} Episode: ${episode.title}`;
            iframe.innerHTML = `<iframe id="IFR" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" src="${episode.videoUrl}"></iframe>`;
            ads.innerHTML='<iframe id="ads" src="//a.realsrv.com/iframe.php?idzone=5012366&size=728x90" width="728" height="90" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe><iframe id="ads" src="//a.realsrv.com/iframe.php?idzone=5012366&size=728x90" width="728" height="90" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>';
          }
           episodesContainer.appendChild(episodeLink);
         });
       }

       ads.innerHTML='<iframe id="ads" src="//a.realsrv.com/iframe.php?idzone=5012366&size=728x90" width="728" height="90" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe><iframe id="ads" src="//a.realsrv.com/iframe.php?idzone=5012366&size=728x90" width="728" height="90" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>';
       ads.id='centerAds';

      newBody.append(back, title, iframe, episodesContainer, ads, resultContainer);
    }

    img.src = item.img;
    title.textContent = item.title;
    category.textContent = item.category;

    resultContainer.appendChild(div);
  });
}

// Mostrar todas las películas al cargar la página
displayMovies(movie);

// Manejar la búsqueda
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value;
  const searchResults = searchMovies(searchTerm);
  displayMovies(searchResults);
});

// Filtrar por categoría
const categoryButtons = document.querySelectorAll('.category-button');

categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    let filteredMovies = movie;

    if (category !== 'all') {
      filteredMovies = movie.filter((item) => item.category === category);
    }

    displayMovies(filteredMovies);
  });
});
