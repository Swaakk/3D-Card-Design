let container = document.querySelector(".container");
let card = document.querySelector(".card");


container.addEventListener("mousemove",(e)=>{
    let xAxis = (window.innerWidth/2 - e.pageX) / 20
    let yAxis = (window.innerHeight/2 - e.pageY) /20

    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`
})