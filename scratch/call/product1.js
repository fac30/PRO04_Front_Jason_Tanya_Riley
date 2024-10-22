async function fetchProductById(id) {
	try {
		const response = await fetch(`http://localhost:3000/products/${id}`);
		if (!response.ok) {
			throw new Error('Failed to fetch product');
		}
		const product = await response.json();
		console.log(product);
	} catch (error) {
		console.error('Error fetching product:', error);
	}
};

fetchProductById(1);

export { fetchProductById }