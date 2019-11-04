//vamos a atacar la api del tiempo
//guardamos al apikey en una variblae

const apiKey="43e33186b2d19517b323d6d218fa8274";
const url =`https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}&q=London,uk`;
const datos=fetch(url)
    .then(res =>{
        return res.json();
    })
    .then(data =>{
        //console.log(data)
       return data
    })
//recogemos la fecha actual
const fecha =  new Date();
const fechaCompleta = `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`;

document.querySelector('.info-principal .linea2').innerHTML=fechaCompleta;

datos.then((res) =>{  
    
    document.querySelector('.info-principal .linea3').innerHTML=res.main.temp +" grados";
    const categoriaActual =res.weather[0].main;
    if(categoriaActual ==="Rain"){
        document.querySelector('.hoy .icono-tiempo .fas').className="".className="fa fa-sun-o";
    }else if(categoriaActual==="Snow"){
        document.querySelector('.hoy .icono-tiempo .fas').className="".className="fa fa-snowflake-o";
    }else if(categoriaActual==="Thunderstorm"){
        document.querySelector('.hoy .icono-tiempo .fas').className="".className="fa fa-poo-storm";
    }else if(categoriaActual==="Drizzle"){
        document.querySelector('.hoy .icono-tiempo .fas').className="".className="fa fa-cloud-rain";
    }else if(categoriaActual==="Clear"){
        document.querySelector('..hoy .icono-tiempo .fas').className="".className="fa fa-cloud-sun";
    }else if(categoriaActual ==="Clouds"){
        document.querySelector('.hoy .icono-tiempo .fas').className="".className="fa fa-cloud";
    }
    
})

// categorias del tiempo de la api: Rain, Snow, Thunderstorm,Drizzle,Clear,Clouds

