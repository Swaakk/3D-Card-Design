let container = document.querySelector(".container");
let card = document.querySelector(".card");


container.addEventListener("mousemove",(e)=>{
    let xAxis = window.innerWidth - e.pageX
    let yAxis = window.innerHeight - e.pageY

    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`
})