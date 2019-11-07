//vamos a atacar la api del tiempo
//guardamos al apikey en una variblae

//recogemos la fecha actual
const fecha = new Date();
const fechaCompleta = ` ${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()} `;

document.querySelector(".banner-header .fecha").innerHTML = fechaCompleta;



//recogemos el nombre de la ciudad del html mediante el boton
const botonEnviar = document.querySelector(".btn");
botonEnviar.addEventListener("click", recibirDatos);

//llamamos a la funcion que hace la peticion a la Api, recogemos la temperatura y el icono
function recibirDatos(e) {
  e.preventDefault();
  const ciudad = document.querySelector(".ciudad").value;
  const apiKey = "43e33186b2d19517b323d6d218fa8274";
  const url = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${ciudad}&units=metric`;
  const datos = fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      //console.log(data)
      return data;
    });
    console.log(datos)
    datos.then(res => {
        const temperaturaPrincipal = (document.querySelector(
          ".temperatura-icono .temperatura"
        ).innerHTML = res.main.temp + " grados");
        //pintamos el nombre la ciudad buscada en el html
        document.querySelector('.banner-content .ciudad').textContent=ciudad;
        console.log(temperaturaPrincipal);
        // categorias del tiempo de la api: Rain, Snow, Thunderstorm,Drizzle,Clear,Clouds
        let categoriaActual="";
        categoriaActual = res.weather[0].main;
        console.log(categoriaActual)
        if (categoriaActual === "Rain") {
          document.querySelector(".banner-icono i").className = "".className =
            "fa fa-sun-o";
        } else if (categoriaActual === "Snow") {
          document.querySelector(".banner-icono i").className = "".className =
            "fa fa-snowflake-o";
        } else if (categoriaActual === "Thunderstorm") {
          document.querySelector(".banner-icono i").className = "".className =
            "fa fa-poo-storm";
        } else if (categoriaActual === "Drizzle") {
          document.querySelector(".banner-icono i").className = "".className =
            "fa fa-cloud-rain";
        } else if (categoriaActual === "Clear") {
            
          document.querySelector(".banner-icono i").className = "".className ="fa fa-cloud-sun";
        } else if (categoriaActual === "Clouds") {
          document.querySelector(".banner-icono i").className="".className="fa fa-cloud";
        }
      });
}
