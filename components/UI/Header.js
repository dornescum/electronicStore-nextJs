import React, {useState} from 'react';
// import {NavLink} from "react-router-dom";
import Link from "next/link";
// import SignIn from "../SignIn";
import {MdClose, MdFormatAlignRight, MdChevronLeft, MdChevronRight, MdOutlineMenuOpen} from "react-icons/md";
import SidebarMenu from "./SidebarMenu";
import {DiRedhat} from "react-icons/di";
import {BsCart} from "react-icons/bs";

export default function Header({countCartItems}) {

	const [showSidebar, setShowSidebar] = useState(false);


	return (
		<header className="block bg-zinc-50 z-10 flex w-full fixed justify-between p-4">
			<div className='ml-0 lg:ml-96 flex items-center justify-center'>
				{showSidebar ?
					<button onClick={() => setShowSidebar(!showSidebar)}
							className="p-2  transition ease-out duration-300 bg-primary  mx-4 md:mr-8">
						<MdClose size='22'/>
					</button>
					:
					<button onClick={() => setShowSidebar(!showSidebar)}
							className="p-2  transition ease-out duration-300 bg-primary  mx-4 md:mr-8 ">
						{/*<MdFormatAlignRight/>*/}
						<MdOutlineMenuOpen size='22'/>
					</button>
				}
				<Link href="/">
					<a>
						<h1 className="text-lg font-bold">Menu</h1>
					</a>
				</Link>
			</div>
			<div className="flex items-center justify-center mr-0 lg:mr-96">
				<Link href="/CartDetails" className="mx-4 cursor-pointer"><a>
					<div className="flex items-center justify-center mx-2">
						<BsCart size='18'/>


					{countCartItems ? (
						<button
							className="bg-red-600 px-2 ml-2 rounded-full cursor-pointer text-white">{countCartItems}</button>
					) : (
						''
					)}
					</div>
				</a>

				</Link>{' '}
				<Link href="/SignIn" className="mx-4 cursor-pointer">
					<a>
						<div className="flex items-center justify-center mx-2">
							<DiRedhat size='26' />
						</div>

					</a>


				</Link>

			</div>

			{showSidebar && <SidebarMenu onClose={() => setShowSidebar(!showSidebar)}/>}
		</header>
	);
}
