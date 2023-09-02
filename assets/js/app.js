let box = document.querySelectorAll(".box");

box.forEach((row) => {
    row.addEventListener("click", () => {
        const x = document.querySelector(".active");
        row.classList.toggle("active");
        x && x.classList.remove("active");
    })
})