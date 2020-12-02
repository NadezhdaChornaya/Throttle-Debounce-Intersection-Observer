// получаем одну картинку
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
                const img = entry.target;
                const imageURL = img.dataset.lazy;

                // img.setAttribute("src", imageURL);
                img.src = imageURL;
                img.classList.add("fade-in");

                observer.disconnect();
            }
        });
    }, options);
    io.observe(target);
};
// получаем массив всех картинок
const images = document.querySelectorAll(".section img")
images.forEach((image) =>
    lazyLoad(image)
);