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

	const imagesTotal = panelImages.length - 1;
    if(currentImage === imagesTotal) {
        return;
    }
	
	currentImage++;
	
	hideImages();
    showImage();
});

previousArrow.addEventListener('click', function() {

    if(currentImage === 0) {
        return;
    }
	
	currentImage--;

    hideImages();
    showImage();
})
