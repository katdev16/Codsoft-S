
document.addEventListener('DOMContentLoaded', () => {
    const showShoesButton = document.getElementById('showShoes');
    const showClothesButton = document.getElementById('showClothes');
    const shoesProducts = document.getElementById('productsS');
    const clothesProducts = document.getElementById('productsC');

    showShoesButton.addEventListener('click', () => {

        showShoesButton.classList.add('active');
        showClothesButton.classList.remove('active');
        shoesProducts.classList.add('active');
        clothesProducts.classList.remove('active');
    });

    showClothesButton.addEventListener('click', () => {

        showClothesButton.classList.add('active');
        showShoesButton.classList.remove('active');
        clothesProducts.classList.add('active');
        shoesProducts.classList.remove('active');
    });

    // Initialize to show shoes by default
    showShoesButton.click();
});




document.addEventListener('DOMContentLoaded', () => {
    const typingText = document.querySelector('.typing-text');
    const text = "Special Offer: Get 20% Off All Items! Limited Time Only!";
    let index = 0;

    function type() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust typing speed here
        }
    }

    type();
});