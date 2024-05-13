const openModalBtn = document.getElementById('order-now-button');
const closeModalBtn = document.getElementById('close-pop-up');
const modal = document.getElementById('pop-up-order');

openModalBtn.addEventListener('click', () => {
    modal.classList.toggle("hidden");
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.toggle("hidden");
});