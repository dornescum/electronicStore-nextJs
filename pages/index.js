import {ProductContext} from "../context/ProductContext";
import React, {useContext} from "react";
import Link from "next/link";
import SliderComponent from "../components/SliderComponet";
import Hero from '../components/Hero/Hero';
import {AiFillHeart} from 'react-icons/ai';
import HomeFavorites from "../components/HomeFavorites/HomeFavorites";
import Footer from "../components/UI/Footer";
import HomePhones from "../components/HomePhones/HomePhones";


export default function Home({products}) {
	const {onAdd} = useContext(ProductContext);

	const favoriteItems = products.filter((item) => item.favorite).slice(0,10);
	const phonesProducts = products.filter((item => item.tag === "phone")).slice(0,10);


	return (
		<main className="font-dosis lg:mx-60">
			<Hero/>
			<SliderComponent/>
			{/*?Best phone*/}
			<div className="pl-4 mt-12 ">
				<Link href='/phone'>
					<a className='pr-2 my-4 hover:bg-zinc-100 duration-300'>Best phones</a>
				</Link>
			</div>
			<HomePhones products={phonesProducts}/>


			{/*?favorites*/}
			<div className="pl-4 mt-12">
				<Link href='/favorites'>
					<a className='pr-2 my-4 '>
						<div className="flex justify-start items-center">
							<span className="pr-2 my-4 hover:bg-zinc-100 duration-300">ECommerce</span>
							<AiFillHeart color="red"/>
						</div>
					</a>
				</Link>

			</div>
			<section className="mx-0  mt-4 mb-4 flex flex-col  justify-center items-center">
				<ul className=" flex justify-center md:justify-start items-center flex-wrap flex-row w-full mb-20">
					{favoriteItems.map((product) => {
						return <li key={product.id} id={product.id}
								   className="mx-1 mb-2 md:mb-6 border drop-shadow-md hover:drop-shadow-2xl ease-in duration-300 ">
							<HomeFavorites product={product} onAdd={onAdd}/>
						</li>;
					})}
				</ul>
			</section>
			{/*==========*/}
			{/*<Footer />*/}
		</main>
	);
}
export const getStaticProps = async () => {
	const res = await fetch(`https://electronis-api.herokuapp.com/api/all`);
	const products = await res.json();

	return {
		props: {
			products,
		},
	};
};
