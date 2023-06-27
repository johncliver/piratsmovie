const listMS = [
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgWy3DLSoDNZxaoOiVo3G9I7-fXtRAztlpB8YtYejl&s', iframe: '//pelisplay.io/play?id=MTY4OTA4&option=latin',episode:{}, category: 'category1', title: 'Item 1' },
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgWy3DLSoDNZxaoOiVo3G9I7-fXtRAztlpB8YtYejl&s', iframe: 'iframe2', category: 'category2', title: 'Item 2' },
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgWy3DLSoDNZxaoOiVo3G9I7-fXtRAztlpB8YtYejl&s', iframe: 'iframe3', category: 'category3', title: 'Item 3' },
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgWy3DLSoDNZxaoOiVo3G9I7-fXtRAztlpB8YtYejl&s', iframe: 'iframe4', category: 'category1', title: 'Item 4' },
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgWy3DLSoDNZxaoOiVo3G9I7-fXtRAztlpB8YtYejl&s', iframe: 'iframe5', category: 'category2', title: 'Item 5' },
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgWy3DLSoDNZxaoOiVo3G9I7-fXtRAztlpB8YtYejl&s', iframe: 'iframe6', category: 'category3', title: 'Item 6' }
];

// Función para mostrar todos los elementos
function showAll() {
  // Obtener el contenedor de contenido
  var content = document.getElementById("content");

  // Limpiar el contenido anterior
  content.innerHTML = "";

  // Recorrer la lista de elementos y agregarlos al contenido
  listMS.forEach(item => {
    const element = document.createElement("div");
    element.classList.add('item');
    element.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <h3>${item.title}</h3>
      `;
    element.onclick=()=>{
      const body=document.body,
      newBody=document.createElement('body'),
      back=document.createElement('a'),
      iframe=document.createElement('div');

      body.parentElement.replaceChild(newBody, body);
      window.scrollTo({top:0, behavior:'auto'});

      back.setAttribute('style', 'cursor:pointer;margin:10px;')
      back.innerHTML='<svg xmlns="http://www.w3.o rg/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path></svg>'
      back.onclick=()=>{
        newBody.parentElement.replaceChild(body, newBody);
      }

      iframe.innerHTML=`
      <h3 style="text-align:center;margin-top:-35px">${item.title}</h3>
      <div class="play-video">
        <iframe id="IFR" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" marginwidth="0" marginheight="0" scrolling="no" src="${item.iframe}"></iframe>
      </div>
      `;
      newBody.append(back,iframe);
    }
    content.appendChild(element);

    // Función para buscar elementos por título o categoría
    function searchItems() {
      var input = document.getElementById("searchInput");
      var searchTerm = input.value.toLowerCase();
      var filteredList = listMS.filter(item => {
        var title = item.title.toLowerCase();
        var category = item.category.toLowerCase();
        return title.includes(searchTerm) || category.includes(searchTerm);
      });
      var content = document.getElementById("content");
      content.innerHTML = "";
      filteredList.forEach(item => {
        element.innerHTML = `
        <h3>${item.title}</h3>
        <img src="${item.img}" alt="${item.title}">
      `;
        content.appendChild(element);
      });
    }

    // Agregar un event listener para el evento "input" del campo de búsqueda
    var searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", searchItems);
  });
}

// Función para mostrar los elementos de una categoría
function showCategory(category) {
  // Obtener el contenedor de contenido
  var content = document.getElementById("content");

  // Limpiar el contenido anterior
  content.innerHTML = "";

  // Filtrar la lista de elementos por la categoría seleccionada
  var filteredList = listMS.filter(item => item.category === category);

  // Recorrer la lista filtrada y agregar los elementos al contenido
  filteredList.forEach(item => {
    const element=document.createElement('div')
    element.classList.add('item');
    element.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <h3>${item.title}</h3>
      `;
    content.appendChild(element);
  });

}

showAll();
