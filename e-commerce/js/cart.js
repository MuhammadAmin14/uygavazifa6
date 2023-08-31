let cartProducts = JSON.parse(localStorage.getItem('cartProducts'));

const searchInput = document.getElementById('search-input');
const rowProducts = document.querySelector('.row.py-5');


function displayProducts(products) {
  rowProducts.innerHTML = '';
  let str = '';
  products.map((product) => {
    str += `
            <div class="col col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card2">
              <img src='${product.images[0]}' alt="Product img" />
              <div class="card-footer">
                <h3  style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">${product.name}</h3>
                <p style="height: 50px; overflow: hidden">
                  ${product.description}
                </p>
                <button class="btnmin">-</button>${product.numberOfProduct}<button class="btnmax">+</button>
              </div>
            </div>
          </div>
            `;
  });
  rowProducts.innerHTML = str;
}


displayProducts(cartProducts);
const plusBtn = document.querySelector('.btnmax');
const minusBtn = document.querySelector('.btnmin');

function displaySearchedProducts(query) {
  const filteredProducts = cartProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
  );
  displayProducts(filteredProducts);
}

searchInput.addEventListener('keyup', function (e) {
  displaySearchedProducts(e.target.value);
});

// localStorage.clear()




function updateProductQuantity(product, increment) {
  const updatedProducts = cartProducts.map((p) => {
    if (p.id === product.id) {
      return {
        ...p,
        numberOfProduct: p.numberOfProduct + increment,
      };
    }
    return p;
  });

  // Обновляем значение в localStorage
  localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));

  // Обновляем отображение продуктов
  displayProducts(updatedProducts);
}

// Обработчик события для кнопки "+"
// plusBtn.addEventListener('click', function () {
//   const productCard = this.closest('.card');
//   const productId = productCard.dataset.productId;
//   const product = cartProducts.find((p) => p.id === productId);
//   if (product) {
//     updateProductQuantity(product, 1);
//   }
// });

// // Обработчик события для кнопки "-"
// minusBtn.addEventListener('click', function () {
//   const productCard = this.closest('.card2');
//   const productId = productCard.dataset.productId;
//   const product = cartProducts.find((p) => p.id === productId);
//   if (product && product.numberOfProduct > 0) {
//     updateProductQuantity(product, -1);
//   }
// });


const btnOpen = document.getElementById('btn-open');
const btnlose = document.getElementById('btn-close');
const modal = document.querySelector('.modal-content');
const openf = document.querySelector('.open')

btnOpen.addEventListener('click', function (e) {
  openf.style.display = 'block'
});

btnlose.addEventListener('click', function (e) {
  openf.style.display = 'none'
});