const toggleBtn = document.getElementById("toggleBtn");
const floatingCard = document.getElementById("floatingCard");
const closeBtn = document.getElementById("closeBtn");

toggleBtn.addEventListener("click", () => {
    floatingCard.classList.toggle("hidden");
});

closeBtn.addEventListener("click", () => {
    floatingCard.classList.add("hidden");
});