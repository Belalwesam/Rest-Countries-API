//fetch("https://restcountries.eu/rest/v2/all").then(res => res.json()).then(data => data.forEach(dat => console.log(dat.name)))
//let countries = [];
const countries = document.getElementById("countries")
const input = document.getElementById("input");
const select = document.getElementById("select");
 fetch("https://restcountries.eu/rest/v2/all").then(res => res.json()).then(data => data.forEach(country => {
    let newCountry = document.createElement("div");
    newCountry.setAttribute("data-country" ,country.name.toLowerCase())
    newCountry.className="country border";
     newCountry.innerHTML = ` <div class="flag">
     <img src="${country.flag}" alt="" id="img">
   </div>
   <div class="country-info py-3 px-4">
     <h3>${country.name}</h3>
     <p>Population: <span>${country.population}</p>
     <p>Region: <span>${country.region}</span></p>
     <p>Capital: <span>${country.capital}</span></p>
   </div>
   `
   ;
   countries.appendChild(newCountry)
 }))
document.addEventListener('click' , (e) => {
   const country = e.target.getAttribute("data-country");
   fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res => res.json()).then(country => {
     const detailes = document.createElement("div");
     detailes.className = "detailes py-5"
     detailes.innerHTML = ` <div class="container" id="wid">
     <button class="back-btn" id="back-btn">
       <i class="fas fa-long-arrow-alt-left mr-2"></i> Back
     </button>
     <div class="row my-5">
       <div class="col-12 col-md-6 mb-3 mb-md-0">
         <img
           src="${country[0].flag}"
           alt=""
           class="img-fluid"
         />
       </div>
       <div class="col-12 col-md-5 offset-md-1 det">
         <h1 class="my-4 my-md-0">${country[0].name}</h1>
         <div
           class="info d-flex flex-column flex-md-row justify-content-between my-3 my-md-5"
         >
           <div class="left my-4 my-md-0">
             <h5>Native Name :<span>${country[0].nativeName}</span></h5>
             <h5>Population : <span>${country[0].population}</span></h5>
             <h5>Region : <span>${country[0].region}</span></h5>
             <h5>Sub Region : <span>W${country[0].subregion}</span></h5>
             <h5>Capital : <span>${country[0].capital}</span></h5>
           </div>
           <div class="right my-4 my-md-0">
             <h5>Top Level Domain :<span>${country[0].topLevelDomain}</span></h5>
             <h5>Currinces :<span>${country[0].currencies[0].name}</span></h5>
             <h5>Languges :<span>${country[0].languages[0].iso639_1}</span></h5>
           </div>
         </div>
         <div
           class="border-countries d-flex flex-column flex-md-row align-items-md-center justify-content-start"
         >
           <h5 class="mr-2 mb-3 mb-md-0">Border Countries :</h5>
           <div class="btns">
             <button class="back-btn" id="fix">${country[0].borders[0]}</button>
             <button class="back-btn" id="fix">${country[0].borders[1]}</button>
             <button class="back-btn" id="fix">${country[0].borders[2]}</button>
           </div>
         </div>
       </div>
     </div>
   </div>`;
   let size = window.scrollY;
   window.scrollTo(0 , 0);
   document.body.appendChild(detailes)
   document.getElementById("back-btn").addEventListener("click" , ()=> {
       document.body.removeChild(detailes)
       window.scrollTo(0 , size)
   })
   })
})
input.addEventListener("change" , ()=> {
    countries.innerHTML ="";
    if (input.value == "") {
        Reload();
    } else {
        fetch(`https://restcountries.eu/rest/v2/name/${input.value}`).then(res => res.json()).then(data => {
        data.forEach (country => {
            let newCountry = document.createElement("div");
            newCountry.setAttribute("data-country" ,country.name.toLowerCase())
            newCountry.className="country border";
             newCountry.innerHTML = ` <div class="flag">
             <img src="${country.flag}" alt="" id="img">
           </div>
           <div class="country-info py-3 px-4">
             <h3>${country.name}</h3>
             <p>Population: <span>${country.population}</p>
             <p>Region: <span>${country.region}</span></p>
             <p>Capital: <span>${country.capital}</span></p>
           </div>`;
           countries.appendChild(newCountry)
        })
    })
    }
})
select.addEventListener("change" , ()=> {
    countries.innerHTML ='';
    fetch(`https://restcountries.eu/rest/v2/region/${select.value}`).then(res => res.json()).then(data => data.forEach(country => {
        let newCountry = document.createElement("div");
            newCountry.setAttribute("data-country" ,country.name.toLowerCase())
            newCountry.className="country border";
             newCountry.innerHTML = ` <div class="flag">
             <img src="${country.flag}" alt="" id="img">
           </div>
           <div class="country-info py-3 px-4">
             <h3>${country.name}</h3>
             <p>Population: <span>${country.population}</p>
             <p>Region: <span>${country.region}</span></p>
             <p>Capital: <span>${country.capital}</span></p>
           </div>`;
           countries.appendChild(newCountry)
    }));
})
function Reload(){
    fetch("https://restcountries.eu/rest/v2/all").then(res => res.json()).then(data => data.forEach(country => {
    let newCountry = document.createElement("div");
    newCountry.setAttribute("data-country" ,country.name.toLowerCase())
    newCountry.className="country border";
     newCountry.innerHTML = ` <div class="flag">
     <img src="${country.flag}" alt="" id="img">
   </div>
   <div class="country-info py-3 px-4">
     <h3>${country.name}</h3>
     <p>Population: <span>${country.population}</p>
     <p>Region: <span>${country.region}</span></p>
     <p>Capital: <span>${country.capital}</span></p>
   </div>`;
   countries.appendChild(newCountry)
 }))
}
document.getElementById("dark-mode").addEventListener("click" , ()=> {
  document.body.classList.toggle("dark-modes")
})