var btn = $('#back-to-top-button');

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

const natural_walnut = document.querySelector("#natural-walnut");
const natural_teak = document.querySelector("#natural-teak");
const natural_oak = document.querySelector("#natural-oak");
const soft_white = document.querySelector("#soft-white");
const soft_black = document.querySelector("#soft-black");
const soft_grey = document.querySelector("#soft-grey");
const color_name = document.querySelectorAll(".color-name");
const color_dot = document.querySelectorAll(".color-dot");

const horizontal_shaking = [
   { transform: "translateX(0)" },
   { transform: "translateX(8px)" },
   { transform: "translateX(-8px)" },
   // { transform: "translateX(5px)" },
   { transform: "translateX(0)" }
]

const horizontal_shaking_reverse = [
  { transform: "translateX(0)" },
  { transform: "translateX(-8px)" },
  { transform: "translateX(8px)" },
  // { transform: "translateX(-5px)" },
  { transform: "translateX(0)" }
]

const blink = [
  {opacity: "1"},
  {opacity: "0"},
  {opacity: "1"}
]

const blink_timing = {
  duration: 30,
  iterations: 1,
}

const blink_timing_less = {
  duration: 50,
  iterations: 1
}

const animate_timing = {
  duration: 270,
  iterations: 1,
}

const animate_timing_less = {
  duration: 270,
  iterations: 1,
}

const animate_timing_delay = {
  duration: 170,
  iterations: 1,
  delay: 100
}


// natural walnut
natural_walnut.onmouseover = function (){
  this.animate(horizontal_shaking, animate_timing);
  this.animate(blink, blink_timing);
  color_name[0].style.opacity = "1";
  color_dot[0].style.opacity = "1";


  natural_teak.animate(horizontal_shaking_reverse, animate_timing);
  natural_teak.animate(blink, blink_timing);
}

natural_walnut.onmouseleave = function () {
  this.animate(horizontal_shaking_reverse, animate_timing);
  this.animate(blink, blink_timing);
  color_name[0].style.opacity = "0";
  color_dot[0].style.opacity = "0";
}

// natural teak
natural_teak.onmouseover = function () {
  this.animate(horizontal_shaking_reverse, animate_timing);
  this.animate(blink, blink_timing);
  color_name[1].style.opacity = "1";
  color_dot[1].style.opacity = "1";

  natural_walnut.animate(horizontal_shaking, animate_timing);
  natural_walnut.animate(blink, blink_timing);
}

natural_teak.onmouseleave = function () {
  this.animate(horizontal_shaking, animate_timing);
  this.animate(blink, blink_timing);
  color_name[1].style.opacity = "0";
  color_dot[1].style.opacity = "0";

  natural_walnut.animate(horizontal_shaking_reverse, animate_timing);
  natural_walnut.animate(blink, blink_timing);
}

// natural oak
natural_oak.onmouseover = function () {
  this.animate(horizontal_shaking_reverse, animate_timing);
  this.animate(blink, blink_timing);
  color_name[2].style.opacity = "1";
  color_dot[2].style.opacity = "1";

  natural_walnut.animate(horizontal_shaking_reverse, animate_timing);
  natural_walnut.animate(blink, blink_timing_less);

  natural_teak.animate(horizontal_shaking_reverse, animate_timing);
  natural_teak.animate(blink, blink_timing);
}

natural_oak.onmouseleave = function () {
  this.animate(horizontal_shaking, animate_timing);
  this.animate(blink, blink_timing);
  color_name[2].style.opacity = "0";
  color_dot[2].style.opacity = "0";

  natural_walnut.animate(horizontal_shaking, animate_timing);
  natural_walnut.animate(blink, blink_timing_less);

  natural_teak.animate(horizontal_shaking, animate_timing);
  natural_teak.animate(blink, blink_timing);
}


soft_white.onmouseover = function () {
  this.animate(horizontal_shaking_reverse, animate_timing);
  this.animate(blink, blink_timing);
  color_name[3].style.opacity = "1";
  color_dot[3].style.opacity = "1";

  natural_walnut.animate(horizontal_shaking, animate_timing);
  natural_walnut.animate(blink, blink_timing_less);

  natural_teak.animate(horizontal_shaking, animate_timing);
  natural_teak.animate(blink, blink_timing);

  natural_oak.animate(horizontal_shaking, animate_timing);
  natural_oak.animate(blink, blink_timing_less);
}

soft_white.onmouseleave = function () {
  this.animate(horizontal_shaking, animate_timing);
  this.animate(blink, blink_timing);
  color_name[3].style.opacity = "0";
  color_dot[3].style.opacity = "0";

  natural_walnut.animate(horizontal_shaking_reverse, animate_timing);
  natural_walnut.animate(blink, blink_timing_less);

  natural_teak.animate(horizontal_shaking_reverse, animate_timing);
  natural_teak.animate(blink, blink_timing);

  natural_oak.animate(horizontal_shaking_reverse, animate_timing);
  natural_oak.animate(blink, blink_timing_less);
}

soft_black.onmouseover = function () {
  this.animate(horizontal_shaking_reverse, animate_timing);
  this.animate(blink, blink_timing);
  color_name[4].style.opacity = "1";
  color_dot[4].style.opacity = "1";

  natural_walnut.animate(horizontal_shaking, animate_timing);
  natural_walnut.animate(blink, blink_timing_less);

  natural_teak.animate(horizontal_shaking, animate_timing);
  natural_teak.animate(blink, blink_timing);

  natural_oak.animate(horizontal_shaking, animate_timing);
  natural_oak.animate(blink, blink_timing_less);

  soft_white.animate(horizontal_shaking, animate_timing);
  soft_white.animate(blink, blink_timing_less);

  soft_grey.animate(horizontal_shaking, animate_timing);
  soft_grey.animate(blink, blink_timing_less);
}

soft_black.onmouseleave = function () {
  this.animate(horizontal_shaking, animate_timing);
  this.animate(blink, blink_timing);
  color_name[4].style.opacity = "0";
  color_dot[4].style.opacity = "0";

  natural_walnut.animate(horizontal_shaking_reverse, animate_timing);
  natural_walnut.animate(blink, blink_timing_less);

  natural_teak.animate(horizontal_shaking_reverse, animate_timing);
  natural_teak.animate(blink, blink_timing);

  natural_oak.animate(horizontal_shaking_reverse, animate_timing);
  natural_oak.animate(blink, blink_timing_less);

  soft_white.animate(horizontal_shaking_reverse, animate_timing);
  soft_white.animate(blink, blink_timing_less);

  soft_grey.animate(horizontal_shaking_reverse, animate_timing);
  soft_grey.animate(blink, blink_timing_less);
}

soft_grey.onmouseover = function () {
  natural_walnut.animate(horizontal_shaking_reverse, animate_timing);
  natural_walnut.animate(blink, blink_timing_less);
  color_name[5].style.opacity = "1";
  color_dot[5].style.opacity = "1";

  natural_teak.animate(horizontal_shaking_reverse, animate_timing);
  natural_teak.animate(blink, blink_timing);

  natural_oak.animate(horizontal_shaking_reverse, animate_timing);
  natural_oak.animate(blink, blink_timing_less);

  soft_white.animate(horizontal_shaking_reverse, animate_timing);
  soft_white.animate(blink, blink_timing_less);
}

soft_grey.onmouseleave = function () {
  natural_walnut.animate(horizontal_shaking, animate_timing);
  natural_walnut.animate(blink, blink_timing_less);
  color_name[5].style.opacity = "0";
  color_dot[5].style.opacity = "0";

  natural_teak.animate(horizontal_shaking, animate_timing);
  natural_teak.animate(blink, blink_timing);

  natural_oak.animate(horizontal_shaking, animate_timing);
  natural_oak.animate(blink, blink_timing_less);

  soft_white.animate(horizontal_shaking, animate_timing);
  soft_white.animate(blink, blink_timing_less);
}




const brown_panel = document.querySelector("#brown-panel");
const black_panel = document.querySelector("#black-panel");
const blurred_circle = document.querySelector("#blurred-circle");

const brown_panel_move = [
  { transform: "translateY(42px)" }
]

const brown_panel_move_reverse = [
  { transform: "translateY(0)" }
]

const blurred_circle_move = [
  { transform: "translate(66px, -30px)" }
]

const blurred_circle_move_reverse = [
  { transform: "translate(0,0)" }
]

const black_panel_move = [
  { transform: "translate(45px, -82px)" }
]

const black_panel_move_reverse = [
  { transform: "translate(0,0)" }
]


const visualContentTiming = {
  duration: 3000,
  iterations: 1,
  fill: "forwards",
  easing: "ease-in-out"
}



function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// example().then(r => Promise);

async function brownPanelAnimation() {
  brown_panel.animate(brown_panel_move, visualContentTiming);
  await sleep(7000); // Sleep for 2 seconds
  brown_panel.animate(brown_panel_move_reverse, visualContentTiming);
}

async function blurredCircleAnimation() {
  blurred_circle.animate(blurred_circle_move, visualContentTiming);
  await sleep(7000); // Sleep for 2 seconds
  blurred_circle.animate(blurred_circle_move_reverse, visualContentTiming);
}

async function blackPanelAnimation() {
  black_panel.animate(black_panel_move, visualContentTiming);
  await sleep(7000); // Sleep for 2 seconds
  black_panel.animate(black_panel_move_reverse, visualContentTiming);
}

setInterval(brownPanelAnimation, 17000);
setInterval(blurredCircleAnimation, 17000);
setInterval(blackPanelAnimation, 17000);


let collector = document.querySelectorAll(".collector-slick-item");
const collectorName = document.querySelector(".Collectors-content .collectors-name");
const collectorImage = document.querySelector("#collectors-image");


for(let card of collector) {
  const name = card.querySelector(".collectors-name").innerHTML;
  card.addEventListener("click", async function(){
    collectorImage.src = "img/collectors/nazli.svg";
    collectorName.innerHTML = name;
    collectorName.style.display = "none";
    collectorName.style.opacity = "0";
    collectorImage.style.opacity = "0";
    await sleep(50);
    collectorName.style.display = "block";
    await sleep(50);
    collectorName.style.opacity = "1";
    collectorImage.style.opacity = "1";
  })
}





