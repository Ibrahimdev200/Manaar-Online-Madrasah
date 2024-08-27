document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 5000); // Change image every 5 seconds
    }
});


// Greeting Modal Interaction
document.addEventListener('DOMContentLoaded', function () {
    // Show the greeting screen for 4 seconds
    setTimeout(function () {
        document.getElementById('greeting-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 4000);
});

// JavaScript for YouTube video player interaction
document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('.blinking-play');
    const iframe = document.getElementById('video-iframe');
    const player = new YT.Player(iframe, {
        events: {
            'onReady': onPlayerReady
        }
    });

    function onPlayerReady(event) {
        playButton.addEventListener('click', () => {
            if (player.getPlayerState() === YT.PlayerState.PAUSED || player.getPlayerState() === YT.PlayerState.UNSTARTED) {
                player.playVideo();
                playButton.style.display = 'none'; // Hide play button when video is playing
            } else {
                player.pauseVideo();
                playButton.style.display = 'block'; // Show play button if video is paused
            }
        });
    }
});

// Event details pop-up for upcoming events
document.addEventListener('DOMContentLoaded', () => {
    const eventItems = document.querySelectorAll('#upcoming-events li');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    const eventPopup = document.createElement('div');
    eventPopup.className = 'event-popup';
    document.body.appendChild(eventPopup);

    function showEventDetails(eventName) {
        eventPopup.innerHTML = `
            <h3>${eventName}</h3>
            <p>Details about ${eventName} will be displayed here. Stay tuned for more information!</p>
            <button class="close-btn">Close</button>
        `;
        overlay.style.display = 'block';
        eventPopup.style.display = 'block';

        eventPopup.querySelector('.close-btn').addEventListener('click', () => {
            overlay.style.display = 'none';
            eventPopup.style.display = 'none';
        });
    }

    eventItems.forEach(item => {
        item.addEventListener('click', () => {
            showEventDetails(item.textContent.trim());
        });
    });

    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
        eventPopup.style.display = 'none';
    });
});

// Academic calendar pop-up interaction
document.addEventListener('DOMContentLoaded', () => {
    const calendarItems = document.querySelectorAll('#academic-calendar li');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    const calendarPopup = document.createElement('div');
    calendarPopup.className = 'calendar-popup';
    document.body.appendChild(calendarPopup);

    function showCalendarDetails(eventName) {
        calendarPopup.innerHTML = `
            <h3>${eventName}</h3>
            <p>Details about ${eventName} will be displayed here. This can include dates, important notes, and links for more information.</p>
            <button class="close-btn">Close</button>
        `;
        overlay.style.display = 'block';
        calendarPopup.style.display = 'block';

        calendarPopup.querySelector('.close-btn').addEventListener('click', () => {
            overlay.style.display = 'none';
            calendarPopup.style.display = 'none';
        });
    }

    calendarItems.forEach(item => {
        item.addEventListener('click', () => {
            showCalendarDetails(item.textContent.trim());
        });
    });

    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
        calendarPopup.style.display = 'none';
    });
});

// JavaScript for hamburger menu
function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
        document.getElementById('menu').style.borderBottomRightRadius = '0';
        document.getElementById('menu').style.borderBottomLeftRadius = '0';
    } else {
        document.getElementById('menu').style.borderRadius = '10px';
    }
}

// Function to handle contact form submission with a loading animation
function showLoading(event) {
    event.preventDefault(); // Prevent the form from submitting immediately

    // Hide the form and show the loading spinner
    document.getElementById('contact-form').style.display = 'none';
    document.getElementById('loading').classList.remove('hidden');

    // Simulate a delay for form submission (e.g., 2 seconds)
    setTimeout(function () {
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('thank-you').classList.remove('hidden');
    }, 2000);
}

// Scroll reveal for elements on the page
const scrollElements = document.querySelectorAll('.scroll-reveal');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElement = (element) => {
    element.classList.add('revealed');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        }
    });
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// Video play button interaction
document.querySelector('.play-icon').addEventListener('click', function() {
    var video = document.getElementById('myVideo');
    video.style.display = 'block';  // Show the video
    video.play();  // Start playing the video
    this.style.display = 'none';  // Hide the play icon
    document.querySelector('.video-placeholder').style.display = 'none';  // Hide the placeholder image
});

/// Function to open the academic calendar modal
function openCalendar() {
    document.getElementById("calendarModal").style.display = "block";
}

// Function to close the academic calendar modal
function closeCalendar() {
    document.getElementById("calendarModal").style.display = "none";
}

// Function to open the upcoming events modal
function openEvents() {
    document.getElementById("eventsModal").style.display = "block";
}

// Function to close the upcoming events modal
function closeEvents() {
    document.getElementById("eventsModal").style.display = "none";
}

// Attach event listeners to ensure buttons can open the modals
document.addEventListener("DOMContentLoaded", function () {
    const calendarLinks = document.querySelectorAll('a[href="#academic-calendar"]');
    const eventsLinks = document.querySelectorAll('a[href="#upcoming-events"]');

    calendarLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            openCalendar();
        });
    });

    eventsLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            openEvents();
        });
    });
});


