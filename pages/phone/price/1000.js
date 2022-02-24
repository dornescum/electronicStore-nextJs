import React, {useContext, useState} from 'react';
import Product from "../../../components/Product";
import {ProductContext} from "../../../context/ProductContext";
import Link from "next/link";
import FilterByPrice from "../../../components/filters/FilterByPrice";
import FilterByBrand from "../../../components/filters/FilterByBrand";

const Ph700 = ({items}) => {
	const {onAdd, cartItems} = useContext(ProductContext);
	// const [priceFilter, setPriceFilter] = useState(false);
	const handleAllFilters = (num) => items.filter((item) => {
		if (item.price.length === 0) {
			return item;
		}
		return item.price < num;
	});
	const price1000 = handleAllFilters(1000);
	// const handleFilterByPrice = (e) => {
	// 	setPriceFilter(true);
	// };
	const link = 'phone';
	const values =[1000,700,450,350];
	const brands =['apple', 'samsung', 'sony', 'motorola', 'nokia', 'blackberry']

	return (
		<main className="flex font-dosis md:mx-0 lg:mx-60 flex-col md:flex-row">
			<section className="hidden lg:block  lg:basis-1/5">
				<Link href="/phone">
					<a className='mt-0 pl-6 bg-zinc-50'>Remove All filters</a>
				</Link>
				<FilterByPrice link={link} value={values} />
				<FilterByBrand link={link} brands={brands} />
			</section>
			<section className="lg:basis-4/5">
				<Link href="/phone">
					<a className='mt-4 pl-2'>Phones</a>
				</Link>
				<div
					className={` flex flex-wrap gap-2 mx-0 justify-start items-center mb-20`}>
					{!items && <div className="mt-20 text-red-700 text-3xl">Loading...</div>}
					{price1000.map((product) => (
						<Product key={product.id} product={product} onAdd={onAdd}></Product>
					))}
				</div>
			</section>
		</main>
	);
};

export default Ph700;
export const getStaticProps = async () => {
	const res = await fetch(`https://electronis-api.herokuapp.com/api/phones`);
	const items = await res.json();

	return {
		props: {
			items,
		},
	};
};
