import React, {useContext, useState} from 'react';
import Product from "../../components/Product";
import {ProductContext} from "../../context/ProductContext";
import Link from "next/link";

const Index = ({items}) => {
	const {onAdd, cartItems} = useContext(ProductContext);
	// const diffPrices =[];

	const [priceFilter, setPriceFilter] = useState(false);
	const [showCard, setShowCard] = useState(false);

	const handleAllFilters = (num) => items.filter((item) => {
		if (item.price.length === 0) {
			return item;
		}
		return item.price < num;
	});


	const price1000 = handleAllFilters(1000);
	const price700 = handleAllFilters(700);
	const price450 = handleAllFilters(450);
	const price350 = handleAllFilters(350);

	const handleFilterByPrice = (e) => {
		setPriceFilter(true);
	};
	const handleFilterPrices = (e) => {
		setShowCard(true);
	};

	// console.log(priceFilter);

	return (
		<main className="flex font-dosis mx-60 bg-zinc-200">
			<section className="hidden lg:block  lg:basis-1/5">
				<div className="flex justify-center items-center  flex-col mt-20">
					<p>Filter by price</p>
					<div>
						<button onClick={handleFilterByPrice}>
							1000+
						</button>
					</div>
					<div>
						<button onClick={handleFilterByPrice}>
							700+
						</button>
					</div>
					<div>
						<button onClick={handleFilterPrices}>
							450+
						</button>
					</div>
					<div>
						<button onClick={handleFilterPrices}>
							350+
						</button>
					</div>

				</div>

			</section>
			<section className="basis-1 lg:basis-4/5">
				<h2>Products</h2>
				<div
					className={`${priceFilter ? "hidden" : "block"} flex flex-wrap gap-2 mx-0 justify-start items-center mb-20`}>
					{!items && <div className="mt-20 text-red-700 text-3xl">Loading...</div>}
					{items.map((product) => (
						<Product key={product.id} product={product} onAdd={onAdd}></Product>
					))}
				</div>
				{/*<div*/}
				{/*	className={`${show1000 ? "block" : "hidden"} flex flex-wrap gap-2 mx-0 justify-start items-center mb-20`}>*/}
				{/*	{price1000.map((item) => (*/}
				{/*		<Product key={item.id} product={item} onAdd={onAdd}></Product>*/}
				{/*	))}*/}
				{/*</div>*/}
				{/*<div*/}
				{/*	className={`${show700 ? `block` : "hidden"} flex flex-wrap gap-2 mx-0 justify-start items-center mb-20 bg-pink-200`}>*/}
				{/*	{price700.map((item) => (*/}
				{/*		<Product key={item.id} product={item} onAdd={onAdd}></Product>*/}
				{/*	))}*/}
				{/*</div>*/}
				<div
					className={`${showCard ? "block" : "hidden"} flex flex-wrap gap-2 mx-0 justify-start items-center mb-20 bg-pink-400`}>
					{price450.map((item) => (
						<Product key={item.id} product={item} onAdd={onAdd}></Product>
					))}
				</div>
				<div
					className={`${showCard ? "block" : "hidden"} flex flex-wrap gap-2 mx-0 justify-start items-center mb-20 bg-pink-900`}>
					{price350.map((item) => (
						<Product key={item.id} product={item} onAdd={onAdd}></Product>
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
