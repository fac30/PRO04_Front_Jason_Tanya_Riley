import { SearchHeader } from '../groups/SearchHeaderGroup';
import { ProductGallery } from '../dataDisplays/ProductGallery';

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
 * @export
 * @param {{ products: Product[] }} param0
 * @param {{}\} param0.products
 * @returns {${2:*}\}
 */
export function SearchView({ products }: { products: Product[] }) {
  return (
    <section>
			<SearchHeader />
      <ProductGallery products={products} />
    </section>
  );
}
