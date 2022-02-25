import React from 'react';
import Link from "next/link";
import Image from "next/image";

const electronicProducts = [
	{id: "e1", title: "Flash deals", link: "/phone"},
	{id: "e2", title: "Favorites", link: "/favorites"},
	{id: "e3", title: "Offer of the day", link: "/phone"},
	{id: "e4", title: "Discounted products", link: "/phone"},
	{id: "e5", title: "Holiday offers", link: "/phone"},
	{id: "e6", title: "Resealed", link: "/phone"},
];

const Hero = () => {
	return (
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
		</div>
	);
};

export default Hero;
