// For Movement Animation to Happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//Items  (Extra Animation: Optional)
const title = document.querySelector('.title');
const profile = document.querySelector('.profile img');
const reachout = document.querySelector('.reachout button');
const description = document.querySelector('.info h3');
const btn = document.querySelector('.btn');

//Moving AnimationEvent
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

// Animate in
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //popout
    title.style.transform = "translateZ(150px)";
    profile.style.transform = "translateZ(200px) rotateZ(-25deg)";
    reachout.style.transform = "translateZ(75px)";
    description.style.transform = "translateZ(125px)";
    btn.style.transform = "translateZ(180px)";

});

//Animate out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //pop in
    title.style.transform = "translateZ(0px)";
    profile.style.transform = "translateZ(0px) rotateZ(0deg)";
    reachout.style.transform = "translateZ(75px)";
    description.style.transform = "translateZ(0px)";
    btn.style.transform = "translateZ(0px)";
});