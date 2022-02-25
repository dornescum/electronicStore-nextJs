import React,{useContext} from 'react';
import Link from "next/link";
import FilterByPrice from "../../components/filters/FilterByPrice";
import FilterByBrand from "../../components/filters/FilterByBrand";
import Product from "../../components/Product";
import {ProductContext} from "../../context/ProductContext";

const Index = ({favoriteItems}) => {
	const {onAdd, cartItems} = useContext(ProductContext);
	// console.log(favoriteItems);
	const link = 'phone';
	// const values = [1000, 700, 450, 350];
	const brands = ['apple', 'samsung', 'sony', 'motorola', 'nokia', 'blackberry'];
	return (
		<main className="flex font-dosis md:mx-0 lg:mx-60 flex-col md:flex-row">
			<section className=" basis-1 lg:basis-1/5">
				<div className='hidden lg:block'>
					<Link href="/phone">
						<a className="mt-0 pl-6 bg-zinc-50">Brands</a>
					</Link>
					<FilterByBrand link={link} brands={brands}/>
				</div>
			</section>
			<section className="lg:basis-4/5">
				<div className="py-2 pl-2 mt-2  md:mt-0 md:p-0 md:pl-2" >
					<Link href="/phone">
						<a className="">Phones</a>
					</Link>
				</div>

				<div
					className={` flex flex-wrap gap-2 mx-0 justify-start items-center mb-20`}>
					{!favoriteItems && <div className="mt-4 text-red-700 text-3xl">Loading...</div>}
					{favoriteItems.map((product) => (
						<Product key={product.id} product={product} onAdd={onAdd} link={product.subtitle}></Product>
					))}
				</div>
			</section>
		</main>
	);
};

export default Index;
export const getStaticProps = async () => {
	const res = await fetch(`https://electronis-api.herokuapp.com/api/all`);
	const items = await res.json();
	// console.log(items);
	const favoriteItems = items.filter((item)=>{
		return item.favorite
	})
	// console.log(newItems);
	return {
		props: {
			favoriteItems,
		},
	};
};
