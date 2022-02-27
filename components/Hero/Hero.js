import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {AiFillHeart} from "react-icons/ai";


const electronicProducts = [
	{id: "e2", title: "Favorites", link: "/favorites"},
	{id: "e1", title: "Flash deals", link: "/flash"},
	{id: "e4", title: "Discounted products", link: "/discount"},
	{id: "e5", title: "Holiday offers", link: "/holidays"},
];

const Hero = () => {
	return (
		<div className="flex flex-col md:flex-row relative">
			<ul className="absolute top-0 left-4 z-10">
				{electronicProducts.map((link) => {
					return <div
						className="block py-1 md:py-2 md:mb-0 md:mt-1 hover:bg-zinc-100 w-full transition duration-150 ease-out"
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


			<div
				className=" bottom-0 w-full h-8 md:h-12 opacity-20 hover:opacity-100 duration-300 absolute  z-10 flex flex-col">
				<ul className=" flex justify-between items-center px-2">
					<li>
						<div className=" flex text-white cursor-wait">
							<Link href="/offer">
								<a className="">
									<div className="flex items-center justify-center pl-4">
										<AiFillHeart color="red"/>
										<span className="font-thin pl-2">Offer of the day</span>
									</div>
								</a>
							</Link>

						</div>
					</li>
					<li>
						<Link href="/phone">
							<a className="cursor-pointer bg-zinc-50 p-1" >Phones</a>
						</Link>
					</li>
				</ul>
			</div>


		</div>
	);
};

export default Hero;
