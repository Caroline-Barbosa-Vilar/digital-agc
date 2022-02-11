
const panelImages = document.querySelectorAll('.panel-image');
const nextArrow = document.getElementById('btn-next');
const previousArrow = document.getElementById('btn-previous');
let currentImage = 0;

function hiddeImages() {
      panelImages.forEach(image => {
        image.classList.remove('show')
    });
}

function showImage() {
  panelImages[currentImage].classList.add('show');
}

nextArrow.addEventListener('click', function() {

    const totalImages = panelImages.length - 1;
    if(currentImage === totalImages) {
        return;
    }

    currentImage++;
    
    hiddeImages();
    showImage();
});

previousArrow.addEventListener('click', function() {

    if(currentImage === 0) {
        return;
    }

    currentImage--;

    hiddeImages();
    showImage();
})
