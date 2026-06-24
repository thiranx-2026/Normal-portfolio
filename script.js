document.getElementById("hireBtn").addEventListener("click", () => {
    alert("Thanks for your interest! Contact me at yourname@example.com");
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});