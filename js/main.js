// ENV retrieve the store ID from .env
    require('dotenv').config();

    const storeId = process.env.STORE_ID;

    const storeElement = document.getElementById(storeId);

// ORDER / ECWID
    // get the button and the pop-up elements
    const shopButton = document.getElementById("shop-button");
    const popup = document.getElementById("popup");
    const popupClose = document.getElementById("popup-close");

    // show the pop-up when the button is clicked
    shopButton.addEventListener("click", function() {
        popup.style.display = "block";
    });

    // hide the pop-up when the X button is clicked
    popupClose.addEventListener("click", function() {
        popup.style.display = "none";
    });

    // hide the pop-up when the user clicks outside of it (meaning the transparent/black overlay)
    popup.addEventListener("click", function(e) {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });

// SLIDER
    var slides = document.querySelectorAll('.slide'); // list of slides can be accessed like an array
    var currentSlide = 0; // index 0
    var slideInterval = setInterval(nextSlide, 4000); // set sliide transition intervals

    function nextSlide() {
        slides[currentSlide].className = 'slide'; // remove "active" class from currentSlide
        currentSlide = (currentSlide + 1) % slides.length; // set index for the next currentSlide --> modulus exists so that the slideshow cycles back to the beginning slide once it reaches the end (eg, once (currentSlide + 1) = 4, --> 4 % 4 = 0 becomes the currentSlide value, which is the first slide)
        slides[currentSlide].className = 'slide active'; // assign "active" to currentSlide
    }

    function prevSlide() { // same as above except going the opposite way
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].className = 'slide active';
    }

    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');

    prev.addEventListener('click', function() {
        prevSlide();
        clearInterval(slideInterval); // clears interval of slideshow to stoop the automatic slide rotation --> clearInterval() is a js function that clears a timer set with the setInterval() method.
        slideInterval = setInterval(nextSlide, 4000); // sets the interval again to start rotating after 5 seconds
    });

    next.addEventListener('click', function() { // same as above except for next
        nextSlide();
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 4000);
    });