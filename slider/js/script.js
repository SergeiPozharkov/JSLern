let showPrevBtn = document.getElementById('show-prev-img');
let showNextBtn = document.getElementById('show-next-img');
let slideImg = document.getElementById('slide-img');

showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

let imagesUrls = [];
imagesUrls.push('images/237-536x354.jpg');
imagesUrls.push('images/download.jpg');
imagesUrls.push('images/photo-1481349518771-20055b2a7b24.jpg');
imagesUrls.push('images/random.jpg');
imagesUrls.push('images/Random-Pictures-of-Conceptual-and-Creative-Ideas-11.jpg');

let currentImgIndex = 0;

slideImg.src = imagesUrls[currentImgIndex];
showPrevBtn.disabled = true;

function onShowPrevBtnClick() {
    currentImgIndex--;
    slideImg.src = imagesUrls[currentImgIndex];
    showNextBtn.disabled = false;

    if (currentImgIndex === 0) {
        showPrevBtn.disabled = true;
    }
}

function onShowNextBtnClick() {
    currentImgIndex++;
    slideImg.src = imagesUrls[currentImgIndex];
    showPrevBtn.disabled = false;

    if (currentImgIndex === (imagesUrls.length - 1)) {
        showNextBtn.disabled = true;
    }
}