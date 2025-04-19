const main=document.getElementsByTagName("main").item(0);
const URLMain="https://fakestoreapi.com/products/";
const UlMenu=document.getElementById("ulMenu");

function getData(elemento) {
  const options={"method":"GET"};

  fetch(URLMain+elemento,options)
.then((response)=>{
    response.json().then((res)=>{
        crearCard(res);
    });
 })
 .catch((err)=>{
    main.insertAdjacentHTML("afterbegin",
        `<div class="error">Error: ${err.message}</div>`);
    
 });
}

function crearCard(res) {
    main.innerHTML="";
    res.forEach((element)=>{
        main.insertAdjacentHTML("afterbegin",

        `<div class="card">
                    <img src="${element.image}" class="card-img-top" alt="${element.title}">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">${element.description}</p>
                            <a href="#" class="btn btn-primary">Click para saber mas</a>
                        </div>
        </div>
        `);

    });
}

function getCategories() {
  const options={"method":"GET"};
  fetch(URLMain+"categories/",options)
.then((response)=>{
  response.json().then((res)=>{
    res.forEach((element)=>{
      UlMenu.insertAdjacentHTML("afterbegin",
      `<li><a class="dropdown-item" onclick="getData('category/${element}')">${element}</a></li>`);
    });
  });
})
.catch((err)=>{
  main.insertAdjacentHTML("beforeend",
      `<div class="error">Error: ${err.message}</div>`);
  
});
}

getCategories();
getData("");