import React from 'react';
import Link from "next/link";
import {MdChevronRight} from "react-icons/md";
// import Logo from '../Logo/Logo'



const electronicProducts = [
	{id: "e1", title: "Home", link: "/"},
	{id: "e2", title: "Phones", link: "/Phones"},
	{id: "e3", title: "Laptops", link: "/"},
	{id: "e4", title: "Tablets", link: "/"},
	{id: "e5", title: "Pc", link: "/"},
	{id: "e6", title: "Tv", link: "/"},

];

const SidebarMenu = (props) => {
	return (<aside className="fixed  z-50 transition-all
		bg-gray-200 text-gray-600 w-64 top-12 left-0 opacity-100 overflow-y-auto sidebar rounded-md">

		<nav className=' rounded-md h-full md:h-[700px] bg-stone-50 pt-8'>
			<div className="flex flex-col py-4">
				{electronicProducts.map((link) => {
					return <div className="py-2 mb-0 mt-1 hover:bg-primary" key={link.id} data-testid={link.id}>
						<Link href={link.link}>
							<a className="flex justify-end pr-8" onClick={props.onClose} data-testid={link.title}>{link.title} </a>
						</Link>
					</div>;
				})}
			</div>
		</nav>


	</aside>);
};

export default SidebarMenu;
