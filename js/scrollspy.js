const nav = document.querySelector(".page-nav");
const options = {
    threshold: 1
};
const onEntry = (entries) => {
    console.log(entries);
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id");
            //   console.log(sectionId);
            const currentActiveLink = nav.querySelector(".page-nav__link--active");
            if (currentActiveLink) {
                currentActiveLink.classList.remove("page-nav__link--active");
            }
            const nextActiveLink = nav.querySelector(`[href="#${sectionId}"]`);
            nextActiveLink.classList.add("page-nav__link--active");
        }
    });
};
const observer = new IntersectionObserver(onEntry, options);
// получаем все секции
const sections = document.querySelectorAll(".section");
sections.forEach((section) => observer.observe(section));










// const nav = document.querySelector(".page-nav");
// const options = {
//     threshold: 1,
// }

// const onEntry = (entries) => {
//     console.log(entries);
//     entries.forEach((entry) => {
//         if (entry.isIntersenting) {
//             const sectionId = entry.target.getAttribute("id");
//             console.log(sectionId);
//             const currentActiveLink = nav.querySelector(".page-nav__link--active")
//             if (currentActiveLink) {
//                 currentActiveLink.classList.remove("page-nav__link--active")
//             }
//             const nextActiveLink = nav.querySelector("[href='#${sectionId}']")
//             nextActiveLink.classList.add("page-nav__link--active")
//         }

//     })
// }


// const observer = new IntersectionObserver(onEntry, options);

// // получаем все секции
// const sections = document.querySelectorAll(".section")
// console.log(sections);

// sections.forEach((section) => observer.observe(section));