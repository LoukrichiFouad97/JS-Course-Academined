// creates new product
class Product {
	constructor(title, imgUrl, price, desc) {
		this.title = title;
		this.imageUrl = imgUrl;
		this.price = price;
		this.description = desc;
	}
}

class ElementAttribute {
	constructor(attrName, attrValue) {
		this.name = attrName;
		this.value = attrValue;
	}
}

// Utility Component
class Component {
	constructor(ElemHookId) {
		this.elementId = ElemHookId;
		this.render();
	}
	render() {}

	createRootElement(tag, cssClass, attributes) {
		const rootElement = document.createElement(tag);
		if (cssClass) rootElement.className = cssClass;

		if (attributes && attributes > 0) {
			attributes.forEach((attr) => {
				rootElement.setAttribute(attr.name, attr.value);
			});
		}

		document.getElementById(this.elementId).appendChild(rootElement);
		return rootElement;
	}
}

// Add Product Item
class ProductItem extends Component {
	constructor(product, elementId) {
		super(elementId);
		this.product = product;
	}

	addToCart() {
		App.addProductToCart(this.product);
	}

	render() {
		const prodEl = this.createRootElement("li", "product-tem");

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
	}
}

class ShoppingCart extends Component {
	items = [];

	set addItem(product) {
		this.items = product;
		this.totalAmount.innerHTML = `<h2>\$${this.addedItems.toFixed(2)}</h2>`;
	}

	get addedItems() {
		return this.items.reduce((prev, curr) => prev + curr.price, 0);
	}

	// update Total amount
	addProduct(product) {
		const updatedItems = [...this.items];
		updatedItems.push(product);
		this.addItem = updatedItems;
	}

	constructor(elementId) {
		super(elementId);
	}

	// add shopping cart UI
	render() {
		const cartItem = this.createRootElement("section", "cart");
		cartItem.innerHTML = `
			<h2>\$${0}</h2>
			<button>Order Now</button>
		`;
		this.totalAmount = cartItem.querySelector("h2");
	}
}

class ProductList extends Component {
	products = [];
	constructor(elementId) {
		super(elementId);
		this.fetchProduct();
	}

	// create new products
	fetchProduct() {
		this.products = [
			new Product("Pillow", "http://placehold.it/200/55", 19.99, "Pillow"),
			new Product("Carpet", "http://placehold.it/200/50", 89.99, "Carpet"),
		];
		this.renderProduct()
	}

	renderProduct() {
		for (const prod of this.products) {
			new ProductItem(prod, "product-list");
		}
	}
	render() {
		// add product list
		const prodlist = this.createRootElement("ul", "product-list");
		prodlist.id = "product-list";

		// add product item
		const { products } = this;
		if (products && products.length > 0) {
			this.renderProduct();
		}
	}
}

// create the UI
class Shop {
	constructor() {
		this.render();
	}
	cart;
	render() {
		// add the shopping card to the page
		this.cart = new ShoppingCart("app");

		// add Product to the page
		new ProductList("app");
	}
}

// Initialize the app
class App {
	static cart;
	static init() {
		const shop = new Shop();
		this.cart = shop.cart;
	}

	static addProductToCart(product) {
		this.cart.addProduct(product);
	}
}

App.init();
