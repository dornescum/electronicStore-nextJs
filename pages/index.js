import Head from 'next/head';
import Image from 'next/image';
import {ProductContext} from "../context/ProductContext";
import {useContext} from "react";
// import Slider from "react-slick";
import Product from "../components/Product";
import Link from "next/link";
import FilterByPrice from "../components/filters/FilterByPrice";
import FilterByBrand from "../components/filters/FilterByBrand";
import SliderComponent from "../components/SliderComponet";
import { AiFillHeart } from 'react-icons/ai';

import Photo1 from '../public/895.jpg';
import Photo2 from '../assets/895.jpg';
import HomeFavorites from "../components/HomeFavorites/HomeFavorites";

const electronicProducts = [
	{id: "e1", title: "Flash deals", link: "/"},
	{id: "e2", title: "Favorites", link: "/Phones"},
	{id: "e3", title: "Offer of the day", link: "/"},
	{id: "e4", title: "Discounted products", link: "/"},
	{id: "e5", title: "Holiday offers", link: "/"},
	{id: "e6", title: "Resealed", link: "/"},

];


export default function Home({products}) {
	const {onAdd, cartItems,} = useContext(ProductContext);
	// console.log(products);

	return (
		<main className="font-dosis lg:mx-60">
			<div className="">
				<div className="flex flex-col md:flex-row relative">
					<ul className="absolute top-0 left-4 z-10">
						{electronicProducts.map((link) => {
							return <div
								className="hidden md:block md:py-2 md:mb-0 md:mt-1 hover:bg-zinc-100 w-full transition duration-150 ease-out"
								key={link.id} data-testid={link.id}>
								<Link href={link.link}>
									<a className="flex justify-start pl-2 text-white"
									   data-testid={link.title}>{link.title} </a>
								</Link>
							</div>;
						})}
					</ul>
					<Image src="/895.jpg" alt="laptop" className="w-full object-fit h-[700px] rounded-sm" width="1920"
						   height="990"/>

					{/*==============*/}
					{/*<div className="bottom-32 md:bottom-40 lg:bottom-[560px] md:left-4 w-full h-12 opacity-0 hover:opacity-100 duration-300*/}
					{/*	absolute  z-10 flex flex-col cursor-pointer">*/}
					{/*	<ul className=" flex justify-between items-center px-2">*/}
					{/*		<li className='flex'>*/}
					{/*			<Link href="/Phones">*/}
					{/*				<a className=" flex items-center justify-center">*/}
					{/*					<span className='pr-2'>ECommerce</span>*/}
					{/*					<AiFillHeart color='red' />*/}
					{/*				</a>*/}
					{/*			</Link>*/}

					{/*		</li>*/}
					{/*		<li className=''>*/}
					{/*			<Link href="/Phones">*/}
					{/*				<a className="mr-6 text-white">Phones</a>*/}
					{/*			</Link>*/}
					{/*		</li>*/}
					{/*	</ul>*/}
					{/*</div>*/}
					{/*==============*/}


				</div>



				<section className="my-1">
					<SliderComponent />
				</section>
				<section className='mx-0'>
					<HomeFavorites items={products}/>
				</section>
			</div>
		</main>
	);
}
export const getStaticProps = async () => {
	const res = await fetch(`https://electronis-api.herokuapp.com/api/phones`);
	const products = await res.json();

	return {
		props: {
			products,
		},
	};
};
