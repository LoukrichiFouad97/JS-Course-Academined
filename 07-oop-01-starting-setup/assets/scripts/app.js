// creates new product
class Product {
	constructor(title, imgUrl, price, desc) {
		this.title = title;
		this.imageUrl = imgUrl;
		this.price = price;
		this.description = desc;
	}
}

// Add Product Item
class ProductItem {
	constructor(product) {
		this.product = product;
	}

	addToCart() {
		console.log("adding to cart...");
		console.log(this.product);
		App.addProductToCart(this.product);
	}

	render() {
		const prodEl = document.createElement("li");
		prodEl.classList.add("product-item");
		const { product } = this;
		prodEl.innerHTML = `
				<img src='${product.imageUrl}' alt='${product.title}'>
				<div class='product-item__content'>
					<h2>${product.title}</h2>
					<h3>${product.price}</h3>
					<p>${product.description}</p>
					<button>Add to cart</button>
				</div>
			`;
		const addCartBtn = prodEl.querySelector("button");
		addCartBtn.addEventListener("click", this.addToCart.bind(this));
		return prodEl;
	}
}

class ShoppingCart {
	items = [];

	// update Total amount
	addProduct(product) {
		const { items } = this;

		items.push(Product);
		this.totalAmount.innerHTML = `<h2>\$${2}</h2>`;
	}

	// add shopping cart UI
	render() {
		const cartItem = document.createElement("section");
		cartItem.classList.add("cart");
		cartItem.innerHTML = `
			<h2>\$${0}</h2>
			<button>Order Now</button>
		`;
		this.totalAmount = cartItem.querySelector("h2");
		return cartItem;
	}
}

class ProductList {
	// create new products
	products = [
		new Product("Pillow", "http://placehold.it/200/55", 19.99, "Pillow"),
		new Product("Carpet", "http://placehold.it/200/50", 89.99, "Carpet"),
	];

	render() {
		// add product list
		const prodList = document.createElement("ul");
		prodList.classList.add("product-list");

		// add product item
		const { products } = this;
		for (const prod of products) {
			const productItem = new ProductItem(prod);
			const prodEl = productItem.render();
			prodList.appendChild(prodEl);
		}
		return prodList;
	}
}

class Shop {
	render() {
		const productHook = document.getElementById("app");
		/*
			shop = {
				cart: new ShoppingCart()
			}
		*/
		// add the shopping card to the page
		this.cart = new ShoppingCart();
		const shopCart = this.cart.render();
		productHook.appendChild(shopCart);

		// add Product to the page
		const productList = new ProductList();
		const prodList = productList.render();
		productHook.appendChild(prodList);
	}
}

class App {
	/*
		App = {
			cart: shop.cart
		}
	*/
	static cart;
	
	static init() {
		const shop = new Shop();
		shop.render();
		this.cart = shop.cart;
	}

	static addProductToCart(product) {
		this.cart.addProduct(product);
	}
}

App.init();
