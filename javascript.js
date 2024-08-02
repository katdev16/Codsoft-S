
document.addEventListener('DOMContentLoaded', () => {
    const showShoesButton = document.getElementById('showShoes');
    const showClothesButton = document.getElementById('showClothes');
    const shoesProducts = document.getElementById('productsS');
    const clothesProducts = document.getElementById('productsC');

    showShoesButton.addEventListener('click', () => {
        alert("shoes")
        showShoesButton.classList.add('active');
        showClothesButton.classList.remove('active');
        shoesProducts.classList.add('active');
        clothesProducts.classList.remove('active');
    });

    showClothesButton.addEventListener('click', () => {
        alert("cloths")
        showClothesButton.classList.add('active');
        showShoesButton.classList.remove('active');
        clothesProducts.classList.add('active');
        shoesProducts.classList.remove('active');
    });

    // Initialize to show shoes by default
    showShoesButton.click();
});
