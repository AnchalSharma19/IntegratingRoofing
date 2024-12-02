document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', (event) => {
        event.stopPropagation();
        mobileMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (event) => {
        const isClickInside = mobileMenu.contains(event.target) || menuToggle.contains(event.target);
        if (!isClickInside) {
            mobileMenu.classList.add('hidden');
        }
    });
});


// Reviews Section Carousel

const carousel = document.getElementById("carousel");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;
const itemsToShow = 3;
const totalItems = carousel.children.length;
const itemWidth = carousel.children[0].offsetWidth + 24; // Includes gap

function updateCarousel() {
    const offset = -(currentIndex * itemWidth);
    carousel.style.transform = `translateX(${offset}px)`;
}

prevButton.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : totalItems - itemsToShow;
    updateCarousel();
});

nextButton.addEventListener("click", () => {
    currentIndex = currentIndex < totalItems - itemsToShow ? currentIndex + 1 : 0;
    updateCarousel();
});

window.addEventListener("resize", updateCarousel);



// Why Us Carousel

const carouselImages = document.getElementById('carousel-images');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentInd = 0;

function updateCarouselPosition() {
    const imageWidth = document.querySelector('.carousel-container').offsetWidth;
    carouselImages.style.transform = `translateX(-${imageWidth * currentInd}px)`;
}

nextBtn.addEventListener('click', () => {
    if (currentInd < carouselImages.children.length - 1) {
        currentInd++;
        updateCarouselPosition();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentInd > 0) {
        currentInd--;
        updateCarouselPosition();
    }
});

window.addEventListener('resize', updateCarouselPosition);


// FAQ 
function toggleFAQ(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector("span:last-child");


    if (content.classList.contains("hidden")) {
        content.classList.remove("hidden");
        icon.textContent = "−";
    } else {
        content.classList.add("hidden");
        icon.textContent = "+";
    }
}





