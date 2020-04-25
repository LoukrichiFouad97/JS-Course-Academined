// class Product {
// 	constructor(title, price, desc, imgUrl) {
// 		this.title = title;
// 		this.price = price;
// 		this.description = desc;
// 		this.imageUrl = imgUrl;
// 	}
// }

// class ProductItem {
// 	constructor(product) {
// 		this.product = product;
// 	}

// 	addToCart() {
// 		console.log("added to cart...");
// 		console.log(this.product);
// 	}

// 	render() {
// 		const prodEl = document.createElement("li");
// 		prodEl.setAttribute("class", "product-item");
// 		prodEl.innerHTML = `
//         <div>
//           <img src="${this.product.imageUrl}" alt="${this.product.title}" >
//           <div class="product-item__content">
//             <h2>${this.product.title}</h2>
//             <h3>${this.product.price}</h3>
//             <p>${this.product.description}</p>
//             <button>Add to cart</button>
//           </div>
//         </div>
//       `;

// 		const addToCart = prodEl.querySelector("button");
// 		addToCart.addEventListener("click", this.addToCart.bind(this));
// 		return prodEl;
// 	}
// }

// class ProductList {
// 	products = [
// 		new Product("pillow", 19.99, "A Soft pillow", "http://placehold.it/200/10"),
// 		new Product("A Carpet", 109.99, "A carpet", "http://placehold.it/200/52"),
// 	];

// 	render() {
// 		const prodHooks = document.getElementById("app");
// 		const prodList = document.createElement("ul");
// 		prodList.setAttribute("class", "product-list");

// 		this.products.forEach((prod) => {
// 			const productItem = new ProductItem(prod);
// 			const prodEl = productItem.render();
// 			prodList.appendChild(prodEl);
// 		});

// 		prodHooks.appendChild(prodList);
// 	}
// }

// const productList = new ProductList();
// productList.render();

class Products {
	constructor(title, price, desc, imgUrl) {
		this.title = title;
		this.price = price;
		this.description = desc;
		this.imageUrl = imgUrl;
	}
}

class ProductList {
	products = [
		new Products("Pillow", 19.99, "soft Pillow", "http://placehold.it/200/50"),
		new Products("Carpet", 89.99, "Carpet", "http://placehold.it/200/150"),
	];

	render() {
		const prodHook = document.getElementById("app");
		const prodList = document.createElement("ul");
		prodList.classList.add("product-list");

		this.products.forEach((prod) => {
			const productItem = new ProductItem(prod);
			prodList.append(productItem.render());
		});
		prodHook.appendChild(prodList);
	}
}

class ProductItem {
	constructor(product) {
		this.product = product;
	}

	render() {
		const prodEl = document.createElement("li");
		prodEl.classList.add("product-item");
		prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}" >
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to cart</button>
          </div>
        </div>
    `;
		return prodEl;
	}
}

const productList = new ProductList();
productList.render();
