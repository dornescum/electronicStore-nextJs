import React, {useContext, useState} from 'react';
import Link from "next/link";
import Product from "../../components/Product";
import {ProductContext} from "../../context/ProductContext";


const Index = ({items}) => {
	const {onAdd} = useContext(ProductContext);
	const discountSale = items.filter((item)=> item.discount > 0);

	return (
		<main className="flex font-dosis md:mx-0 lg:mx-60 flex-col md:flex-row">
			<section className=" basis-1 lg:basis-1/5">
				<div className='hidden lg:block '>
					<Link href="/">
						<a className="mt-0 pl-6 bg-zinc-50">Remove All filters</a>
					</Link>
					<br/>
					<p className='mx-6 my-4'>
						Not ready
					</p>
				</div>
			</section>
			<section className="lg:basis-4/5">
				<div className="py-2 pl-2 mt-2  md:mt-0 md:p-0 md:pl-12 lg:pl-2" >
					<Link href="/favorites">
						<a className="">Favorites</a>
					</Link>
				</div>

				<div
					className={` flex flex-wrap gap-2 mx-0 justify-start md:justify-center lg:justify-start items-center mb-20`}>
					{/*{!items && <div className="mt-4 text-red-700 text-3xl">Loading...</div>}*/}
					{discountSale.map((product) => (
						<Product key={product.id} product={product} onAdd={onAdd} id={product.id}></Product>
					))}
				</div>
			</section>
		</main>
	);
};

export default Index;
export const getStaticProps = async () => {
	const res = await fetch(`https://electronis-api.herokuapp.com/api/all`);
	// console.log(res);
	const items = await res.json();

	return {
		props: {
			items,
		},
	};
};
