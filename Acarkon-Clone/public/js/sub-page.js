const hideFilters = document.querySelector("#hide-filters");
const filters = document.querySelector(".Sub-page-main_filters");
const products = document.querySelector(".Sub-page-main_content");
const filterEye = document.querySelector("#filter-eye");

hideFilters.addEventListener("click", () => {
    if (products.classList.contains("subpageProductGridColumn")) {
        products.classList.remove("subpageProductGridColumn");
        hideFilters.querySelector("span").innerText = "Filtreleri Gizle";
        filterEye.className = "fa-solid fa-eye fs-5";
    } else {
        products.classList.add("subpageProductGridColumn");
        hideFilters.querySelector("span").innerText = "Filtreleri Göster";
        filterEye.className = "fa-solid fa-eye-slash fs-5";
    }
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const gridViewProduct = document.querySelector("#gridViewProduct");
const listViewProduct = document.querySelector("#listViewProduct");
const productCards = document.querySelectorAll(".Card-product");

listViewProduct.addEventListener("click", async () => {
    products.style.opacity = "0";
    products.querySelector("section").style.gridTemplateColumns = "1fr";
    gridViewProduct.style.stroke = "none";
    listViewProduct.style.stroke = "#7A6958";
    for (let card of productCards) {
        card.classList.add("gridViewCard");
    }
    document.querySelector(".info-video img").classList.add("h-100");
    await sleep(200);
    products.style.opacity = "1";
})

gridViewProduct.addEventListener("click", async () => {
    products.style.opacity = "0";
    products.querySelector("section").style.gridTemplateColumns = "repeat(4, 1fr)";
    listViewProduct.style.stroke = "none";
    gridViewProduct.style.stroke = "#7A6958";
    for (let card of productCards) {
        card.classList.remove("gridViewCard");
    }
    document.querySelector(".info-video img").classList.remove("h-100");
    await sleep(200);
    products.style.opacity = "1";
})



