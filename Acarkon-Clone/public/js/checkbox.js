const myCheckbox = document.querySelectorAll('.custom-checkbox input[type="checkbox"]');
const checkState = document.querySelectorAll('.custom-checkbox img');


/*myCheckbox.addEventListener("click", function () {
    if (this.classList.contains("checked")) {
        this.classList.remove("checked");
        checkState.src = "img/checkbox/unchecked.svg";
    } else {
        this.classList.add("checked");
        checkState.src = "img/checkbox/checked.svg";
    }
})*/

for (let i=0; i < myCheckbox.length; i++) {
    myCheckbox[i].addEventListener("click", function (){
        if (this.classList.contains("checked")) {
            this.classList.remove("checked");
            checkState[i].src = "img/checkbox/unchecked.svg";
        } else {
            this.classList.add("checked");
            checkState[i].src = "img/checkbox/checked.svg";
        }
    })
}
