import React, {useContext, useState} from 'react';
import Product from "../../components/Product";
import {ProductContext} from "../../context/ProductContext";
import Link from "next/link";

const Index = ({items}) => {
	const {onAdd,  cartItems} = useContext(ProductContext);
	const [priceFilter, setPriceFilter]=useState(0);

	// console.log(items);
	const product600 = items.filter((item)=>{
		return item.price < 600
	})
	console.log(product600);

	return (
		<main className='flex font-dosis mx-60 bg-zinc-200'>
			<section className='hidden lg:block  lg:basis-1/5'>
				<div className='flex justify-center items-center  flex-col mt-20'>
					<p>Filter by price</p>
					{priceFilter}
					<ul>
						<li>Premium</li>
						<li>Medium</li>
						<li>Budget</li>
						<li>Just a ringer</li>
					</ul>
				</div>

			</section>
			<section className="basis-1 lg:basis-4/5">
				<h2>Products</h2>
				<div className=" flex flex-wrap gap-2 mx-0 justify-start items-center mb-20">
					{!items && <div className='mt-20 text-red-700 text-3xl'>Loading...</div> }
					{items.map((product) => (
						<Product key={product.id} product={product} onAdd={onAdd}></Product>
					))}
				</div>
			</section>
		</main>
	);
};

export default Index;
export const getStaticProps = async () => {
	const res = await fetch(`https://electronis-api.herokuapp.com/api/phones`);
	const items = await res.json();

	return {
		props: {
			items,
		},
	};
};
