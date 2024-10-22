import { fetchProductById } from "./product1.js";

async function fetchProducts(amt) {
	const y = amt;
	console.group(`Fetching ${amt} Products`)
	for (let x = 0; x < y; x++) {
		console.group(`Product #${x + 1}/${y}`)
		await fetchProductById(x);
		console.groupEnd();
		console.log()
	}
	console.groupEnd();
}

fetchProducts(6);