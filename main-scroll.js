document.addEventListener("DOMContentLoaded", () => {
    const animate = ScrollReveal({
        origin: "top",
        distance: "90px",
        duration: "2000",
        delay: "100",
        reset: true,
    });

    animate.reveal(".heading-product", { origin: "left" });
    animate.reveal(".scroll-container", { origin: "left" });
    animate.reveal(".tabcontent", { origin: "up" });  
    animate.reveal(".bottom-nav", { interval:50 });
    animate.reveal(".nav-bar", { interval:50 });
    animate.reveal(".header2", { interval:50 });

});
