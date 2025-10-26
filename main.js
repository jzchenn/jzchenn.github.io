document.addEventListener("DOMContentLoaded", () => {
    // Carousel
    document.querySelectorAll(".carousel-container").forEach(container => {
        const carousel = container.querySelector(".carousel");
        const items = carousel.querySelectorAll(".carousel__item");
        const buttonLeft = container.querySelector(".carousel__button.left");
        const buttonRight = container.querySelector(".carousel__button.right");

        if (buttonLeft) {
            buttonLeft.addEventListener("click", () => {
                const currentItem = carousel.querySelector(".carousel__item--selected")
                currentItem.classList.remove("carousel__item--selected");
                let prevItem = currentItem.previousElementSibling;
                if (!prevItem || !prevItem.classList.contains("carousel__item")) {
                    prevItem = items[items.length - 1];
                }
                prevItem.classList.add("carousel__item--selected");
            });
        }
        if (buttonRight) {
            buttonRight.addEventListener("click", () => {
                const currentItem = carousel.querySelector(".carousel__item--selected")
                currentItem.classList.remove("carousel__item--selected");
                let nextItem = currentItem.nextElementSibling;
                if (!nextItem || !nextItem.classList.contains("carousel__item")) {
                    nextItem = items[0];
                }
                nextItem.classList.add("carousel__item--selected");
            });
        } 
    });
    // ScrollSpy

    let section = document.querySelectorAll('section, footer[id]');
    let navLinks = document.querySelectorAll('nav a');
    let heroArrow = document.querySelector('.hero .arrow');

    window.onscroll = () =>{    
        let currentActiveId = '';
        let top = window.scrollY;

        if (top > 50){
            heroArrow.classList.add("hidden")
        }
        else{
            heroArrow.classList.remove("hidden")
        }

        section.forEach((sec, index) =>{
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            const atBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight -2;

            if (index === section.length - 1 && atBottom) {
                currentActiveId = id;
            }
            else if (top >= offset && top < offset + height) {
                currentActiveId = id;
            }
        });

        navLinks.forEach(link => {
                link.classList.remove('highlight-word');
                const href = link.getAttribute('href');

                if (href.includes(currentActiveId) && currentActiveId !== '') {
                    link.classList.add('highlight-word')
                }
            })
    }
    

});