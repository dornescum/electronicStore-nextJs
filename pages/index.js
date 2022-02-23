import Head from 'next/head';
import Image from 'next/image';
import {ProductContext} from "../context/ProductContext";
import React, {useContext} from "react";
// import Slider from "react-slick";
import Product from "../components/Product";
import Link from "next/link";
import FilterByPrice from "../components/filters/FilterByPrice";
import FilterByBrand from "../components/filters/FilterByBrand";
import SliderComponent from "../components/SliderComponet";
import Hero from '../components/Hero/Hero';
import {AiFillHeart} from 'react-icons/ai';

import Photo1 from '../public/895.jpg';
import Photo2 from '../assets/895.jpg';
import HomeFavorites from "../components/HomeFavorites/HomeFavorites";
import Footer from "../components/UI/Footer";
import HomePhones from "../components/HomePhones/HomePhones";


export default function Home({products}) {
	const {onAdd, cartItems,} = useContext(ProductContext);

	const favoriteItems = products.filter((item) => {
		return item.favorite;
	});
	const phonesProducts = products.filter((item => item.tag === "phone"))


	return (
		<main className="font-dosis lg:mx-60">
			<Hero/>
			<SliderComponent/>
			{/*Best phones*/}
			<div className="pl-6 mt-12">
				<div className="flex justify-start items-center">
					<span className="pr-2 my-4">Best phones</span>
					{/*<AiFillHeart color="red"/>*/}
				</div>
			</div>
			<HomePhones products={phonesProducts} />


			{/*Favorites*/}
			<div className="pl-6 mt-12">
				<div className="flex justify-start items-center">
					<span className="pr-2 my-4">ECommerce</span>
					<AiFillHeart color="red"/>
				</div>
			</div>
			<section className="mx-0 lg:ml-4 mt-4 mb-4 flex flex-col  justify-center items-center">
				<ul className=" flex justify-center md:justify-start items-center flex-wrap flex-row w-full mb-20">
					{favoriteItems.map((product) => {
						return <li key={product.id}
								   className="mx-1 mb-2 border drop-shadow-md hover:drop-shadow-2xl ease-in duration-300 ">
							<HomeFavorites product={product} onAdd={onAdd}/>
						</li>;
					})}
				</ul>
			</section>
			{/*==========*/}
			<Footer />
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
