import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../context/Store';
import { useEnv } from '../../context/Environment';
import { LandingView } from '../view/LandingView';
import { SearchView } from '../view/SearchView';
import { ProductView } from '../view/ProductView';
import { LogView } from '../view/LogView';

/**
 * ${1:Description placeholder}
 *
 * @interface Product
 * @typedef {Product}
 */
interface Product {
  /**
 * ${1:Description placeholder}
 *
 * @type {number}
 */
id: number;
  /**
 * ${1:Description placeholder}
 *
 * @type {string}
 */
name: string;
	/**
 * ${1:Description placeholder}
 *
 * @type {string}
 */
photo_link: string;
  /**
 * ${1:Description placeholder}
 *
 * @type {string}
 */
strapline: string;
  /**
 * ${1:Description placeholder}
 *
 * @type {string}
 */
description: string;
	/**
 * ${1:Description placeholder}
 *
 * @type {number}
 */
stock_level: number;
	/**
 * ${1:Description placeholder}
 *
 * @type {number}
 */
location: number;
	/**
 * ${1:Description placeholder}
 *
 * @type {number}
 */
orders: number;
	/**
 * ${1:Description placeholder}
 *
 * @type {(number | null)}
 */
reviews: number | null;
  /**
 * ${1:Description placeholder}
 *
 * @type {number}
 */
activities: number;
  /**
 * ${1:Description placeholder}
 *
 * @type {?number}
 */
price?: number;
}

/**
 * ${1:Description placeholder}
 *
 * @returns {${2:*}}
 */
function Content() {
	const { serverURL } = useEnv();
  const { view, searchTerm } = useContext(StoreContext);
  const [ products, setProducts ] = useState<Product[]>([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState<string | null>(null);

  const fetchProducts = async () => {
		await serverURL;
    try {
      setLoading(true);
			const endpoint = await (`${serverURL}` + '/products');
			console.log(`Fetching products from ${endpoint}`);
      
			const response = await fetch(endpoint);
      if (!response.ok) {
				throw new Error('Failed to fetch products')
			};
      
			const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      setError(`${err}`);
      setLoading(false);
    }
  };

	useEffect(() => { 
		console.log(`serverURL in Content: ${serverURL}`);
		if (serverURL !== "") { fetchProducts() };
	}, [serverURL]);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

	{console.log(`Calling return on Content: ${view}`)}

  return (
    <main className="site-main">
      <div id="view-holder" className='container w-full mx-auto px-4 py-8 flex-1'>
        {view === 'landing' && <LandingView />}
        {view === 'search' && <SearchView products={filteredProducts} />}
        {view === 'product' && <ProductView />}
				{view === 'login' && <LogView /> }
      </div>
    </main>
  );
}

export default Content;
