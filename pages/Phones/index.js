import React, {useContext, useState} from 'react';
import Product from "../../components/Product";
import {ProductContext} from "../../context/ProductContext";
import Link from "next/link";
import Layout from "../../components/UI/Layout";
import FilterByPrice from "../../components/filters/FilterByPrice";
import FilterByBrand from "../../components/filters/FilterByBrand";

const Index = ({items}) => {
	const {onAdd, cartItems} = useContext(ProductContext);

		const link = 'Phones';
		const values =[1000,700,450,350];
		const brands =['apple', 'samsung', 'sony', 'motorola', 'nokia', 'blackberry']

	return (
			<main className="flex font-dosis mx-60">
				<section className="hidden lg:block  lg:basis-1/5">
					{/*<p className='mt-0 pl-6 bg-zinc-50'>Remove All filters</p>*/}
					<Link href="/Phones">
						<a className='mt-0 pl-6 bg-zinc-50'>Remove All filters</a>
					</Link>
					<FilterByPrice link={link} value={values} />
					<FilterByBrand link={link} brands={brands} />

				</section>
				<section className="basis-1 lg:basis-4/5">
					{/*<h2 className='mt-4 pl-2' >Phones</h2>*/}
								<Link href="/Phones">
									<a className='mt-4 pl-2'>Phones</a>
								</Link>
					<div
						className={` flex flex-wrap gap-2 mx-0 justify-start items-center mb-20`}>
						{!items && <div className="mt-4 text-red-700 text-3xl">Loading...</div>}
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
