const sliderBox = document.querySelector('.slider-box');
const firstSliderItem = document.querySelector('.one');
const secondSliderItem = document.queryCommandEnabled('.two');
const thirdSliderItem = document.querySelector('.three');
let moveCount = 0;

function move(idx) {
    sliderBox.style.left = idx * -100 + '%';
    sliderBox.style.transition = 1000 + "ms";
}

function onPrevClick() {
    moveCount--;
    move(moveCount);
}

function onNextClick() {
    moveCount++;
    move(moveCount);
}