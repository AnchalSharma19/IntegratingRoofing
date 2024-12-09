document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');

    if (menuToggle && dropdownMenu) {
        // Toggle the dropdown menu when the hamburger button is clicked
        menuToggle.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent event from propagating
            dropdownMenu.classList.toggle('hidden'); // Toggle visibility
            dropdownMenu.classList.toggle('show');   // Add/Remove show class for visibility
        });

        document.addEventListener('click', (event) => {
            if (!dropdownMenu.contains(event.target) && event.target !== menuToggle) {
                dropdownMenu.classList.add('hidden');
                dropdownMenu.classList.remove('show');
            }
        });
    }

    document.querySelectorAll('.dropdown-item > a').forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const dropdown = item.nextElementSibling;
            if (dropdown) {
                dropdown.classList.toggle('hidden');
            }
        });
    });
});


window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-green-600');
    } else {
        navbar.classList.remove('bg-green-600');
    }
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



const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
});

