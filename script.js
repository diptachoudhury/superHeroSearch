const superHeroName = document.getElementById("superHeroName");
const submitBtn = document.getElementById("submitBtn");
const result =document.getElementById("result")
const superHeroResult=document.getElementById("superHeroResult")

let superheroes = []; // to store data and pass to superheroScript

function searchSuperHero(){
    const name = superHeroName.value
    superHeroData(name)
}








async function superHeroData(name){
    try {
    const apiUrl=`https://superheroapi.com/api.php/1628132770683309/search/${name}`;
    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log(data);
    superheroes = data.results;
    for (let i=0;i<data.results.length;i++){
        renderSuperHero(data.results[i],i);
        }
    
    // result.innerHTML = 
    //     `<h1>${data.results[2].name}</h1>`   //we get here arrays 
    

    if(data.response == "error"){
        throw new Error()
    }
}
catch(error){
    console.log("its okay we can make a new superHero");
}
}


function renderSuperHero(abc,index){
    let div = document.createElement("div");
    div.id = index;
    div.onclick=(event)=>{
        handleSuperHeroClick(event)
    }
    
    div.innerHTML = 
    `
    <h1>${abc.name}</h1>;
    <img src="${abc.image.url}"  />
    `
    div.classList.add("superHeroCard");
    result.appendChild(div);

}



function handleSuperHeroClick(event){

    const index = event.target.id;    // check
    window.open("superhero.html")
    renderSuperHeroDetails(superheroes[index])
}



function renderSuperHeroDetails(name){
    let div = document.createElement("div");
    
    
    div.innerHTML = 
    `
    <h1>${data.name}</h1>;
    <img src="${data.image.url}"  />
    `
    
    superHeroResult.appendChild(div);

}










submitBtn.addEventListener("click",searchSuperHero);

// https://superheroapi.com/api.php/1628132770683309/search/${name}