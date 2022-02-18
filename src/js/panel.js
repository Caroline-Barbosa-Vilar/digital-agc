const panelImages = document.querySelectorAll('.panel-image');
const nextArrow = document.getElementById('btn-next');
const previousArrow = document.getElementById('btn-previous');
let currentImage = 0;

function hideImages() {
    panelImages.forEach(image => {
    image.classList.remove('show')
    });
}

function showImage() {
	panelImages[currentImage].classList.add('show');
}

nextArrow.addEventListener('click', function() {

    previousArrow.classList.remove('hide')
	const imagesTotal = panelImages.length - 1;

    if (currentImage ===1) {
        nextArrow.classList.add('hide')
    }

    if(currentImage === imagesTotal) {
        return;
    }
	currentImage++;
	
	hideImages();
    showImage();
});

previousArrow.addEventListener('click', function() {

    nextArrow.classList.remove('hide')

    if (currentImage === 1) {
        previousArrow.classList.add('hide')
    }

    if(currentImage === 0) {
        return;
    }
	
	currentImage--;

    hideImages();
    showImage();
})
