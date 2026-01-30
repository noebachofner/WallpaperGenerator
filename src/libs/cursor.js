const cursor = document.querySelector(".custom-cursor");
const links = document.querySelectorAll("a");
const navbar = document.querySelector(".glass-navbar");
const footer = document.querySelector("footer");
let isCursorInited = false;

const initCursor = () => {
    cursor.classList.add("custom-cursor--init");
    isCursorInited = true;
};

const destroyCursor = () => {
    cursor.classList.remove("custom-cursor--init");
    isCursorInited = false;
};

links.forEach((link) => {
    link.addEventListener("mouseover", () => {
        cursor.classList.add("custom-cursor--link");
    });

    link.addEventListener("mouseout", () => {
        cursor.classList.remove("custom-cursor--link");
    });
});

document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    if (!isCursorInited) {
        initCursor();
    }

    cursor.style = `translate: ${mouseX}px ${mouseY}px`;
});

document.addEventListener("mouseout", destroyCursor);

if (navbar) {
    navbar.addEventListener("mouseenter", () => {
        cursor.classList.add("hidden");
    });

    navbar.addEventListener("mouseleave", () => {
        cursor.classList.remove("hidden");
    });
}

if (footer) {
    footer.addEventListener("mouseenter", () => {
        cursor.classList.add('hidden');
    });

    footer.addEventListener("mouseleave", () => {
        cursor.classList.remove('hidden');
    });
}