import React, {useContext} from 'react';
import Product from "../../components/Product";
import {ProductContext} from "../../context/ProductContext";
import Link from "next/link";

const Index = ({items}) => {
	const {onAdd,  cartItems} = useContext(ProductContext);
	console.log(items);
	return (
		<main className='flex font-dosis'>
			<section className="basis-1 lg:basis-3/4">
				<h2>Products</h2>
				<div className=" flex flex-wrap gap-2 mx-0 justify-center items-center mb-20">
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
