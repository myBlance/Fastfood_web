// -----------Search--------------------------------


function searchProducts() {
    // Lấy giá trị từ ô tìm kiếm
    var query = document.getElementById("searchInput").value.toLowerCase();

    // Lấy tất cả các sản phẩm trong danh sách
    var products = document.querySelectorAll(".menu_card");

    // Lặp qua từng sản phẩm và ẩn hiện sản phẩm tùy thuộc vào kết quả tìm kiếm
    products.forEach(function(product) {
        var productName = product.querySelector("h2").innerText.toLowerCase();
        if (productName.includes(query)) {
            product.style.display = "block"; // Hiện sản phẩm
        } else {
            product.style.display = "none"; // Ẩn sản phẩm
        }
    });
}



// ---Shopping cart--------------------------------


document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
        const itemName = button.getAttribute('data-item-id');
        const itemPrice = parseFloat(button.parentElement.querySelector('h3').innerText.slice(1));
        totalPrice += itemPrice;

        const cartItem = document.createElement('li');
        cartItem.innerText = `${itemName} : $${itemPrice.toFixed(2)}`;
        cartItemsContainer.appendChild(cartItem);

        totalPriceElement.innerText = `Tổng cộng: $${totalPrice.toFixed(2)}`;
      });
    });
  });

