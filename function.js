document.addEventListener('DOMContentLoaded', function () {
    let exploreButton = document.getElementById('explore-button');
    let nav = document.getElementById('navigation');

    exploreButton.addEventListener('click', function () {
        if (nav.classList.contains('hidden')) {
            nav.classList.remove('hidden');
            nav.classList.add('visible');
            nav.scrollIntoView({ behavior: 'smooth' });
        }
    });

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    
    const typingText = "Welcome, DJ Shape's Official Website";
    let index = 0;
    const typingElement = document.querySelector('.typing');

    function type() {
        typingElement.innerHTML = typingText.substring(0, index);
        if (index < typingText.length) {
            index++;
            setTimeout(type, 100);
        } else {
            setTimeout(() => {
                index = 0;
                type();
            }, 2000);
        }
    }

    type();

    function animateProgressBars() {
        document.querySelectorAll('.progress-bar').forEach(bar => {
            let percentage = bar.getAttribute('data-percentage');
            bar.style.width = percentage + '%';
        });
    }

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observer.disconnect();
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(document.querySelector('#skills'));
});
