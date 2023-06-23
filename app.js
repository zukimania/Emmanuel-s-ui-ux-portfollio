const options = {
    threshold: 0.2,
}
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    })
}, options);

const boxElements = document.querySelectorAll(".project-item");
boxElements.forEach((el) => observer.observe(el));