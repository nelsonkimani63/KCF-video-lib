//TOGGLE FORMAT BUTTON

const formatButtons = document.querySelectorAll(".format-radio-btn");
let checkedButton = 0;

formatButtons.forEach((item, i) => {
    item.addEventListener("click", () => {

        formatButtons[checkedButton].classList.remove("check");
        item.classList.add("check");

        checkedButton = i;

    })
})