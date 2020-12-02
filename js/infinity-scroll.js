const obs = document.querySelector(".obs");
const obsWrapper = document.querySelector(".obs__wrapper");
// const images = document.querySelectorAll(".section img");


// console.dir(obsWrapper);
// console.log(obsWrapper.offsetHeight + 500);
// obsWrapper.style.height += "100px";



const lazyLoad = (target) => {
    const options = {
        rootMargin: "30px 0px",
        threshold: 0.1,
    };
    // создаем IntersectionObserver/entries = массив свойст
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // entry.isIntersecting - факт пересечения viewport
            if (entry.isIntersecting) {
                obs.style.height += "100px";
            }
        });
    }, options);
    io.observe(target);
};

