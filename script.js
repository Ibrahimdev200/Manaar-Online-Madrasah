// JavaScript to handle slide show and other interactions

// JavaScript for Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}


// Greeting Modal Interaction
document.getElementById("close-greeting").addEventListener("click", function() {
    document.getElementById("greeting-modal").style.display = "none";
});

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

document.addEventListener('DOMContentLoaded', () => {
    const eventItems = document.querySelectorAll('#upcoming-events li');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    const eventPopup = document.createElement('div');
    eventPopup.className = 'event-popup';
    document.body.appendChild(eventPopup);

    // Populate and show the event details in a pop-up
    function showEventDetails(eventName) {
        eventPopup.innerHTML = `
            <h3>${eventName}</h3>
            <p>Details about ${eventName} will be displayed here. Stay tuned for more information!</p>
            <button class="close-btn">Close</button>
        `;
        overlay.style.display = 'block';
        eventPopup.style.display = 'block';

        // Close button event
        eventPopup.querySelector('.close-btn').addEventListener('click', () => {
            overlay.style.display = 'none';
            eventPopup.style.display = 'none';
        });
    }

    // Click event for each event item to show more details
    eventItems.forEach(item => {
        item.addEventListener('click', () => {
            showEventDetails(item.textContent.trim());
        });
    });

    // Click event to close the pop-up when clicking outside
    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
        eventPopup.style.display = 'none';
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const calendarItems = document.querySelectorAll('#academic-calendar li');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    const calendarPopup = document.createElement('div');
    calendarPopup.className = 'calendar-popup';
    document.body.appendChild(calendarPopup);

    // Function to show calendar event details in a pop-up
    function showCalendarDetails(eventName) {
        calendarPopup.innerHTML = `
            <h3>${eventName}</h3>
            <p>Details about ${eventName} will be displayed here. This can include dates, important notes, and links for more information.</p>
            <button class="close-btn">Close</button>
        `;
        overlay.style.display = 'block';
        calendarPopup.style.display = 'block';

        // Close button event
        calendarPopup.querySelector('.close-btn').addEventListener('click', () => {
            overlay.style.display = 'none';
            calendarPopup.style.display = 'none';
        });
    }

    // Click event for each calendar item to show more details
    calendarItems.forEach(item => {
        item.addEventListener('click', () => {
            showCalendarDetails(item.textContent.trim());
        });
    });

    // Click event to close the pop-up when clicking outside
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
    }else{
      document.getElementById('menu').style.borderRadius = '10px';
    }
  }

  


  // contact
  function showLoading() {
    // Prevent the form from submitting immediately
    event.preventDefault();

    // Hide the form and show the loading spinner
    document.getElementById('contact-form').style.display = 'none';
    document.getElementById('loading').classList.remove('hidden');

    // Simulate a delay for form submission (e.g., 2 seconds)
    setTimeout(function () {
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('thank-you').classList.remove('hidden');
    }, 2000);
}



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


    document.getElementById('playButton').addEventListener('click', function() {
        var video = document.getElementById('myVideo');
        video.play();
        this.style.display = 'none'; // Hide the play icon when the video starts playing
    });

