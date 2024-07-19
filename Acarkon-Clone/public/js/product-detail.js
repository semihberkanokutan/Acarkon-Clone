$('.similar-products').owlCarousel({
    loop:true,
    // margin:10,
    nav:true,
    // navText: ['<i class="fa-solid fa-chevron-left" style="color: #7a6958;"></i>', '<i class="fa-solid fa-chevron-right"  style="color: #7a6958;"></i>'],
    navText: ["<img src='img/prev-next-arrows/prev-btn.svg'>",  "<img src='img/prev-next-arrows/next-btn.svg'>"],
    navContainer: "#similar-products-navhere",
    dots:true,
    dotsEach:true,
    dotsContainer: "#similar-products-counter-here",
    // autoWidth:true,
    items: 5,
    center: true,
    // startPosition: 2,
    dotsData:"'1', '2', '3'",

    // responsive:{
    //     0:{
    //         items:1
    //     },
    //     600:{
    //         items:3
    //     },
    //     1000:{
    //         items:5
    //     }
    // }
})

$('.recently-shown').owlCarousel({
    loop:true,
    // margin:10,
    nav:true,
    // navText: ['<i class="fa-solid fa-chevron-left" style="color: #7a6958;"></i>', '<i class="fa-solid fa-chevron-right"  style="color: #7a6958;"></i>'],
    navText: ["<img src='img/prev-next-arrows/prev-btn.svg'>",  "<img src='img/prev-next-arrows/next-btn.svg'>"],
    navContainer: "#recently-shown-navhere",
    dots:true,
    dotsEach:true,
    dotsContainer: "#recently-shown-counter-here",
    // autoWidth:true,
    items: 5,
    center: true,
    // startPosition: 2,
    dotsData:"'1', '2', '3'",

    // responsive:{
    //     0:{
    //         items:1
    //     },
    //     600:{
    //         items:3
    //     },
    //     1000:{
    //         items:5
    //     }
    // }
})

const technical_details = document.querySelector(".technical_details");
const faq = document.querySelector(".faq");
const comments = document.querySelector(".comments");
const tech_details_article = document.querySelector("#technical-details");
const faq_article = document.querySelector("#faq");
const comments_article = document.querySelector("#comments");

technical_details.addEventListener("click", function (){
    faq_article.style.display = "none";
    comments_article.style.display = "none";
    tech_details_article.style.display = "block";
    this.style.fontWeight = "500";
    faq.style.fontWeight = "300";
    comments.style.fontWeight = "300";
})

faq.addEventListener("click", function (){
    tech_details_article.style.display = "none";
    comments_article.style.display = "none";
    faq_article.style.display = "block";
    this.style.fontWeight = "500";
    technical_details.style.fontWeight = "300";
    comments.style.fontWeight = "300";
})

comments.addEventListener("click", function (){
    tech_details_article.style.display = "none";
    faq_article.style.display = "none";
    comments_article.style.display = "block";
    this.style.fontWeight = "500";
    technical_details.style.fontWeight = "300";
    faq.style.fontWeight = "300";
})

const subtract = document.querySelector("#subtract");
const increase = document.querySelector("#increase");
const quantity = document.querySelector(".quantity");
let q = 0;

subtract.addEventListener("click", function (){
    if (q != 0) {
        q -= 1
        quantity.innerHTML = q;
    }
})

increase.addEventListener("click", function (){
    q += 1
    quantity.innerHTML = q;
})



const measuerCalculationBtn = document.querySelector(".measure-calculation");
const imageCollapses = document.querySelectorAll(".img-collapse");
const rulerImage = document.querySelector("#measure-calculation-ruler");
const arrowImage = document.querySelector("#measure-calculation-arrow");

measuerCalculationBtn.addEventListener("click", () => {
    for (let i = 0; i < imageCollapses.length; i++) {
        if (imageCollapses[i].classList.contains("img-show")) {
            imageCollapses[i].style.opacity = "0";
            imageCollapses[i].classList.remove("img-show");
            arrowImage.style.opacity = "1";
            rulerImage.style.opacity = "0";
        } else {
            imageCollapses[i].style.opacity = "1";
            imageCollapses[i].classList.add("img-show");
            arrowImage.style.opacity = "0";
            rulerImage.style.opacity = "1";
        }
    }
})

const fav_btn = document.querySelector(".fav-button");

fav_btn.addEventListener("click", () => {
    if (fav_btn.classList.contains("active") == false) {
        fav_btn.classList.add("active");
        fav_btn.querySelector("svg").style.fill = "#7A6958";
    } else {
        fav_btn.classList.remove("active");
        fav_btn.querySelector("svg").style.fill = "none";
    }
})

const chosenColorText = document.querySelector(".chosen-color span");
const colorChoices = document.querySelectorAll(".colorChose");

for (let color of colorChoices) {
    color.addEventListener("click", () => {
        color.classList.add("active")
        let x = color.getAttribute("color");
        chosenColorText.innerText = x;
        for (let i of colorChoices) {
            i.classList.remove("active");
        }
        color.classList.add("active");
    })
}