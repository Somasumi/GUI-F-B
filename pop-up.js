const cards = document.querySelectorAll(".card, .menu-card");

const foodModal = document.getElementById("foodModal");
const closeModal = document.getElementById("closeModal");

const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalPrice = document.getElementById("modalPrice");

const modalDescription =
    document.getElementById("modalDescription");

const modalOrigin =
    document.getElementById("modalOrigin");

const buyButton = document.getElementById("buyButton");


// OPEN POPUP
cards.forEach(card => {

    card.addEventListener("click", () => {

        const name = card.dataset.name;
        const price = card.dataset.price;
        const description = card.dataset.description;
        const origin = card.dataset.origin;

        const image = card.querySelector("img").src;

        modalImage.src = image;
        modalImage.alt = name;

        modalName.textContent = name;
        modalPrice.textContent = price;

        modalDescription.textContent = description;
        modalOrigin.textContent = origin;

        buyButton.href =
            "https://wa.me/6282253500859?text=" +
            encodeURIComponent("Saya ingin memesan " + name);

        foodModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


// CLOSE POPUP
function closeFoodModal() {

    foodModal.classList.remove("active");

    document.body.style.overflow = "";

}

closeModal.addEventListener("click", closeFoodModal);


// CLICK OUTSIDE POPUP
foodModal.addEventListener("click", (event) => {

    if (event.target === foodModal) {
        closeFoodModal();
    }

});


// ESCAPE KEY
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeFoodModal();
    }

});