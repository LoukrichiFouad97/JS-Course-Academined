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
	
	set cartItems(item) {
		this.items = item;
		this.totalItems.innerHTML = `
		<h2>Total:\$${this.totalAmount.toFixed(2)}</h2>`;
	}

	// get total price of items in the cart
	get totalAmount() {
		const sum = this.items.reduce(
			(prevVal, curItem) => prevVal + curItem.price,
			0
		);
		return sum;
	}

	addProduct(product) {
		const updatedItems = [...this.items];
		updatedItems.push(product);
		this.cartItems = updatedItems;
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
		App.addProductToCart(this.product);
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
		this.shopCart = new ShoppingCart();
		const cart = this.shopCart.render();

		prodHooks.appendChild(cart);
		prodHooks.appendChild(prodList);
	}
}

class App {
	static cart;

	static init() {
		const shop = new Shop();
		shop.render();
		this.cart = shop.shopCart;
	}

	static addProductToCart(product) {
		this.cart.addProduct(product);
	}
}

App.init();
