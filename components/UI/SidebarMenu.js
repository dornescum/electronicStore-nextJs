import React from 'react';
import Link from "next/link";
import {MdChevronRight} from "react-icons/md";
import Logo from '../Logo/Logo'



const menus = [
	{id: "m1", title: "Home", link: "/"},
	{id: "m2", title: "Salads", link: "/salads"},
	{id: "m3", title: "Soups", link: "/soups"},
	{id: "m4", title: "Pasta", link: "/pasta"},
	{id: "m5", title: "Burgers", link: "/burgers"},
	{id: "m6", title: "Chicken", link: "/chicken"},
	{id: "m7", title: "Pork", link: "/pork"},
	{id: "m8", title: "Beef", link: "/beef"},
	{id: "m9", title: "Recommendations", link: "/recommendations"},
	{id: "m10", title: "Desert", link: "/desert"},
	{id: "m11", title: "Drinks", link: "/drinks"},
];

const SidebarMenu = (props) => {
	return (<aside className="fixed h-screen z-50 transition-all
		bg-gray-200 text-gray-600 w-64 top-12 left-0 opacity-100 overflow-y-auto sidebar rounded-md">
		{/*<div className="text-center cursor-pointer transition-all duration-700 ease-out delay-700">*/}
		{/*			<div className="flex items-center py-2 pr-8 bg-gray-200 justify-between">*/}
		{/*				<h1 className="text-2xl w-36 text-gray-600">Menu</h1>*/}
		{/*				<div className="bg-primary text-white rounded h-6 w-6 items-center flex justify-center"*/}
		{/*					 onClick={props.onClose}>*/}
		{/*					<MdChevronRight/>*/}
		{/*				</div>*/}
		{/*			</div>*/}
		{/*</div>*/}
		<nav>
			<div className="flex flex-col py-4">
				{menus.map((link) => {
					return <div className="py-2 mb-0 mt-1 hover:bg-primary" key={link.id} data-testid={link.id}>
						<Link href={link.link}>
							<a className="flex justify-end pr-8" onClick={props.onClose} data-testid={link.title}>{link.title} </a>
						</Link>
					</div>;
				})}
			</div>
		</nav>
		<div className='flex justify-center items-center h-48'>
			{/*<h3>LOGO</h3>*/}
			<Logo />
		</div>

	</aside>);
};

export default SidebarMenu;
