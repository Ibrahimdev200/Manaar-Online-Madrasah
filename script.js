document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-images .main-image');
    const quotes = document.querySelectorAll('.carousel-images .quote-overlay');
    const carouselInterval = 5000; // Time for each image and quote to stay visible (5 seconds)
    let currentIndex = 0;

    function getRandomIndex(max) {
        return Math.floor(Math.random() * max);
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function setUpCarousel() {
        // Convert NodeList to Array for shuffling
        const imagesArray = Array.from(images);
        const quotesArray = Array.from(quotes);

        // Shuffle images and quotes
        shuffleArray(imagesArray);
        shuffleArray(quotesArray);

        // Re-assign shuffled images and quotes to the carousel
        imagesArray.forEach((img, index) => {
            img.style.order = index;
        });

        quotesArray.forEach((quote, index) => {
            quote.style.order = index;
        });

        // Initialize the first image and quote
        imagesArray[0].classList.add('active');
        quotesArray[0].classList.add('active');
    }

    function showNext() {
        images[currentIndex].classList.remove('active');
        quotes[currentIndex].classList.remove('active');

        currentIndex = (currentIndex + 1) % images.length;

        images[currentIndex].classList.add('active');
        quotes[currentIndex].classList.add('active');
    }

    // Initialize carousel
    setUpCarousel();
    setInterval(showNext, carouselInterval);

    // Play button functionality for video
    const playButton = document.getElementById('play-button');
    const video = document.getElementById('demo-video');

    playButton.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playButton.style.display = 'none'; // Hide play button when video is playing
        } else {
            video.pause();
            playButton.style.display = 'flex'; // Show play button if video is paused
        }
    });

    // Modals functionality
    const calendarModal = document.getElementById('calendarModal');
    const eventsModal = document.getElementById('eventsModal');

    function openCalendar() {
        calendarModal.style.display = 'block';
    }

    function closeCalendar() {
        calendarModal.style.display = 'none';
    }

    function openEvents() {
        eventsModal.style.display = 'block';
    }

    function closeEvents() {
        eventsModal.style.display = 'none';
    }

    document.querySelectorAll('.close').forEach(element => {
        element.addEventListener('click', function() {
            if (this.parentElement.id === 'calendarModal') {
                closeCalendar();
            } else if (this.parentElement.id === 'eventsModal') {
                closeEvents();
            }
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target === calendarModal) {
            closeCalendar();
        }
        if (event.target === eventsModal) {
            closeEvents();
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
    var currentLocation = window.location.pathname;
    var navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });
});



// Get the modals
var jobModal = document.getElementById("jobModal");
var volunteerModal = document.getElementById("volunteerModal");

// Get the links that open the modals
var jobLink = document.getElementById("job-link");
var volunteerLink = document.getElementById("volunteer-link");

// Get the <span> elements that close the modals
var jobClose = document.getElementById("job-close");
var volunteerClose = document.getElementById("volunteer-close");

// When the user clicks the link, open the modal
jobLink.onclick = function() {
    jobModal.style.display = "block";
}

volunteerLink.onclick = function() {
    volunteerModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
jobClose.onclick = function() {
    jobModal.style.display = "none";
}

volunteerClose.onclick = function() {
    volunteerModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == jobModal) {
        jobModal.style.display = "none";
    }
    if (event.target == volunteerModal) {
        volunteerModal.style.display = "none";
    }
}

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 50);
});

// Select elements
const video = document.getElementById('myVideo');
const playPauseButton = document.getElementById('playPauseButton');
const playPauseIcon = document.getElementById('playPauseIcon');

// Toggle play/pause on button click
playPauseButton.addEventListener('click', togglePlayPause);

// Toggle play/pause on video screen click
video.addEventListener('click', togglePlayPause);

// Function to toggle play and pause
function togglePlayPause() {
    if (video.paused) {
        video.play();
        playPauseIcon.classList.remove('fa-play');
        playPauseIcon.classList.add('fa-pause');
        playPauseButton.classList.add('hidden'); // Hide button when video is playing
    } else {
        video.pause();
        playPauseIcon.classList.remove('fa-pause');
        playPauseIcon.classList.add('fa-play');
        playPauseButton.classList.remove('hidden'); // Show button when video is paused
    }
}

// Show the play button when video ends
video.addEventListener('ended', function() {
    playPauseIcon.classList.remove('fa-pause');
    playPauseIcon.classList.add('fa-play');
    playPauseButton.classList.remove('hidden');
});



const rainContainer = document.querySelector('.rain-container');

// Function to create a raindrop (dot)
function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    
    // Random size for the dot
    const size = Math.random() * 5 + 2; // Range from 2px to 7px
    raindrop.style.width = `${size}px`;
    raindrop.style.height = `${size}px`;

    // Random starting position
    raindrop.style.left = `${Math.random() * window.innerWidth}px`;

    // Random duration for the falling animation
    const fallDuration = Math.random() * 3 + 2; // Between 2s and 5s
    raindrop.style.animationDuration = `${fallDuration}s`;

    // Add the raindrop to the container
    rainContainer.appendChild(raindrop);

    // Remove the raindrop after animation ends
    setTimeout(() => {
        raindrop.remove();
    }, fallDuration * 1000);
}

// Function to continuously generate raindrops
function generateRain() {
    setInterval(createRaindrop, 100); // Create a raindrop every 100ms
}

// Start generating raindrops
generateRain();



document.addEventListener('DOMContentLoaded', function () {
    // Add any interactivity here (if needed)
});
