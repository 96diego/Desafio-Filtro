const URL = "https://fakestoreapi.com/products";
const etiquetaListado = document.getElementsByClassName("list-group");
const btnFiltrar = document.getElementById("rangeFilterCount");
const btnLimpiar = document.getElementById("clearRangeFilter");
let filteredProductsArr=[];
let currentProductsArr =[];

document.addEventListener("DOMContentLoaded", () => {
   const listado = (URLL) =>
   {
    fetch(URLL)
   .then(promesa =>
    {
    if(promesa.ok)
        {
            return promesa.json();
        }
    })
    .then (function(respuesta)
    {
        respuesta.forEach(producto =>
        {
            currentProductsArr.push(producto);
            etiquetaListado[0].innerHTML +=`<div>
                                        <h4>${producto.title}</h4>
                                        <p>${producto.price}</p>
                                        </div>`
        });
    }); 
    }
    console.log(currentProductsArr);
    listado(URL);
    btnFiltrar.addEventListener("click", () => {
        let min = document.getElementById("rangeFilterCountMin").value;
        let max = document.getElementById("rangeFilterCountMax").value;
    
        filteredProductsArr = currentProductsArr.filter(
          (product) => product.price >= min && product.price <= max
        );
        console.log(filteredProductsArr);
        etiquetaListado[0].innerHTML="";
        filteredProductsArr.forEach(nuevaLista =>
            {
                etiquetaListado[0].innerHTML+= `<div>
                                                <h4>${nuevaLista.title}</h4>
                                                <p>${nuevaLista.price}</p>
                                            </div>`
            });
    
      });
    btnLimpiar.addEventListener("click",()=>{
        listado(URL);
        filteredProductsArr = currentProductsArr.slice();
    });
    
});





  

