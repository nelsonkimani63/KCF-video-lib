const videosContainer = [...document.querySelectorAll(".videos-container")];
const nextButton = [...document.querySelectorAll(".next-button")];

const preButton = [...document.querySelectorAll(".pre-button")];

//LOOP THROUGH EACH CARD USING FOR EACH LOOP

videosContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidith = containerDimensions.width;

    nextButton[i].addEventListener('click', () => {
        item.scrollLeft += containerWidith;
    })

    preButton[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidith;
    })



})