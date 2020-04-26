class Product {
	constructor(title, price, desc, imgUrl) {
		this.title = title;
		this.price = price;
		this.description = desc;
		this.imageUrl = imgUrl;
	}
}
class ShoppingCart {
	items = [];

	addProduct(product) {
		this.items.push(product);
		this.totalItems = `<h2>Total: \$${1}</h2>`;
	}

	render() {
		const cartEl = document.createElement("section");
		cartEl.className = "cart";
		cartEl.innerHTML = `
			<h2>Total: \$${0}</h2>
			<button>Order Now!</button>
		`;
		this.totalItems = cartEl.querySelector("h2");
		return cartEl;
	}
}

class ProductItem {
	constructor(product) {
		this.product = product;
	}

	addToCart() {
		console.log("added to cart...");
		console.log(this.product);
	}

	render() {
		const prodEl = document.createElement("li");
		prodEl.setAttribute("class", "product-item");
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

		const addToCart = prodEl.querySelector("button");
		addToCart.addEventListener("click", this.addToCart.bind(this));
		return prodEl;
	}
}

class ProductList {
	products = [
		new Product("pillow", 19.99, "A Soft pillow", "http://placehold.it/200/10"),
		new Product("A Carpet", 109.99, "A carpet", "http://placehold.it/200/52"),
		new Product("A Carpet", 109.99, "A carpet", "http://placehold.it/200/250"),
	];

	render() {
		const prodList = document.createElement("ul");
		prodList.setAttribute("class", "product-list");

		this.products.forEach((prod) => {
			const productItem = new ProductItem(prod);
			const prodEl = productItem.render();
			prodList.appendChild(prodEl);
		});
		return prodList;
	}
}

class Shop {
	render() {
		const prodHooks = document.getElementById("app");
		const productList = new ProductList();
		const prodList = productList.render();
		const shopCart = new ShoppingCart();
		const cart = shopCart.render();

		prodHooks.appendChild(cart);
		prodHooks.appendChild(prodList);
	}
}

class App {
	static init() {
		const shop = new Shop();
		shop.render();
	}
}

App.init()
