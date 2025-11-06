document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.fanfact-sin');

    const animateCounter = (counterBox) => {
        const countElement = counterBox.querySelector('.counter');
        const target = +counterBox.getAttribute('data-count');
        const duration = 2000;
        const startTime = performance.now();

        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const easeOutQuad = 1 - Math.pow(1 - progress, 2);

            const currentValue = Math.floor(easeOutQuad * target);
            countElement.textContent = currentValue;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                countElement.textContent = target;
            }
        };

        requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.6
    });

    counters.forEach(counter => observer.observe(counter));
});

const hearts = document.querySelectorAll('.fa-heart');
hearts.forEach(heart => {
    heart.addEventListener('click', () => {
        heart.classList.toggle('active');
    });
});

$('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    navText: [
        "<i class='fa-solid fa-angle-left'></i>",
        "<i class='fa-solid fa-angle-right'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

document.querySelector(".show-more").addEventListener("click", function () {
    const more = document.querySelector(".cate-more");
    const icon = this.querySelector("i");
    const text = this.querySelector("a");

    if (more.style.display === "block") {
        more.style.display = "none";
        text.textContent = "Show more";
        icon.classList.replace("fa-chevron-up", "fa-chevron-down");
    } else {
        more.style.display = "block";
        text.textContent = "Show less";
        icon.classList.replace("fa-chevron-down", "fa-chevron-up");
    }
});

$(function () {
    $("#slider-range").slider({
        range: true,
        min: 25,
        max: 120,
        values: [75, 300],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));
});