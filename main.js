document.addEventListener("DOMContentLoaded", () => {
    // ------------- Delay Function -------------
    function debounce(func, delay = 100) {
        let timer;
        return function(...args) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    }
    // ------------- ScrollSpy -------------
    let section = document.querySelectorAll('section, footer[id]');
    let navLinks = document.querySelectorAll('nav a');
    let heroArrow = document.querySelector('.hero .arrow');
    
    function scrollSpyLogic(){
        let currentActiveId = '';
        let top = window.scrollY;

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
    const debouncedScrollSpy = debounce(scrollSpyLogic, 100);
    window.onscroll = () => {
        if (window.scrollY > 50){
            heroArrow.classList.add("hidden")
        }
        else{
            heroArrow.classList.remove("hidden")
        }
        debouncedScrollSpy();
    }
    // ------------- Hamburger Animation -------------
    $(function(){
        $('.hamburger-menu').on('click', function() {
            $(this).closest('.navbar').toggleClass('active'); 
        });
    });

});