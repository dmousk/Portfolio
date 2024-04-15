document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar ul');

    // Function to toggle menu display
    function toggleMenu() {
        const isDisplayed = navbar.style.display === 'flex';
        navbar.style.display = isDisplayed ? 'none' : 'flex';
    }

    // Event listener for menu icon click
    menuIcon.addEventListener('click', toggleMenu);

    // Close the menu when a link is clicked (useful for SPA)
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {  // Only on mobile view
                toggleMenu();
            }
        });
    });
});

/*document.addEventListener('DOMContentLoaded', function() {
    const projectsGrid = document.getElementById('projects-grid');
    let projectCards = projectsGrid.getElementsByClassName('project-card');
    let currentIndex = 0;

    // Function to display the current project
    function displayProject(index) {
        // Hide all project cards
        Array.from(projectCards).forEach(card => card.style.display = 'none');
        // Show the current project
        projectCards[index].style.display = 'block';
    }

    // Event listener for the 'next' button
    document.getElementById('next-btn').addEventListener('click', function() {
        if (currentIndex < projectCards.length - 1) {
            currentIndex++;
            displayProject(currentIndex);
        }
    });

    // Event listener for the 'previous' button
    document.getElementById('prev-btn').addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            displayProject(currentIndex);
        }
    });

    // Initially display the first project
    displayProject(currentIndex);
});
*/

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('main-nav');
    const sections = document.querySelectorAll('section');
    const options = {
        rootMargin: '-50% 0px -50% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bgColor = window.getComputedStyle(entry.target).backgroundColor;
                const colorBrightness = getColorBrightness(bgColor);

                // Change header color based on the brightness of the section background
                if (colorBrightness > 180) {
                    navbar.classList.add('dark-navbar');
                    navbar.classList.remove('light-navbar');
                } else {
                    navbar.classList.add('light-navbar');
                    navbar.classList.remove('dark-navbar');
                }
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    function getColorBrightness(rgb) {
        const rgbValues = rgb.match(/\d+/g).map(Number);
        // Formula to determine brightness of the background
        return (rgbValues[0] * 299 + rgbValues[1] * 587 + rgbValues[2] * 114) / 1000;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('main-nav');
    const sections = document.querySelectorAll('section');
    const navbarHeight = navbar.offsetHeight;
    
    const options = {
        rootMargin: `-${navbarHeight}px 0px 0px 0px`,
        threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.isIntersecting) {
                document.querySelector('.navbar ul a.active').classList.remove('active');
                document.querySelector(`.navbar ul a[href="#${id}"]`).classList.add('active');
                
                // Add custom class based on section id if needed, for example:
                if (id === 'about') {
                    navbar.classList.add('about-navbar-style');
                } else {
                    navbar.classList.remove('about-navbar-style');
                }
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Optional: Define custom styles for the navbar when on certain sections
    // This can be based on the section's background-color, or any other property
});



document.addEventListener('DOMContentLoaded', function() {
    const projectsGrid = document.querySelector('.projects-grid'); // Changed from getElementById to querySelector
    let projectCards = projectsGrid.getElementsByClassName('project-card');

    let currentIndex = 0; // Initialize the index to the first project

    // Function to display the current project
    function displayProject(index) {
        // Hide all project cards
        Array.from(projectCards).forEach(card => card.style.display = 'none');
        // Show the current project
        projectCards[index].style.display = 'block';
    }

    // Event listener for the 'next' button
    document.getElementById('next-btn').addEventListener('click', function() {
        if (currentIndex < projectCards.length - 1) {
            currentIndex++;
            displayProject(currentIndex);
        }
    });

    // Event listener for the 'previous' button
    document.getElementById('prev-btn').addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            displayProject(currentIndex);
        }
    });

    // Initially display the first project
    displayProject(currentIndex);
});


