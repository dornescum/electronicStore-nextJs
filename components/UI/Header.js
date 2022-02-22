import React, {useState, useContext} from 'react';
// import {NavLink} from "react-router-dom";
import Link from "next/link";
// import SignIn from "../SignIn";
import {MdClose, MdFormatAlignRight, MdChevronLeft, MdChevronRight, MdOutlineMenuOpen} from "react-icons/md";
import SidebarMenu from "./SidebarMenu";
import Button from "./Button";
import {ProductContext} from "../../context/ProductContext";
import {DiRedhat} from "react-icons/di";
import {BsCart, BsChevronDoubleDown} from "react-icons/bs";


export default function Header({countCartItems}) {
	const {showSidebar, setShowSidebar} = useContext(ProductContext);


	// todo sa inchid automat meniul cand dau in afara
	// const [showSidebar, setShowSidebar] = useState(false);
	const [showCartInfo, setShowCartInfo] = useState(true);
	const [showModal, setShowModal] = useState(false);
	const modalMessage ="We don't collect your data";



	return (
		<header className="block bg-zinc-50 z-10 flex w-full fixed top-0 justify-between p-4 font-dosis">
			<div className="ml-0 lg:ml-52 flex items-center justify-center">
				{showSidebar ?
					<button onClick={() => setShowSidebar(!showSidebar)}
							className="p-2  transition ease-out duration-300 bg-primary  mx-4 md:mr-8">
						<MdClose size="22"/>
					</button>
					:
					<button onClick={() => setShowSidebar(!showSidebar)}
							className="p-2  transition ease-out duration-300 bg-primary  mx-4 md:mr-8">
						{/*<MdFormatAlignRight/>*/}
						<MdOutlineMenuOpen size="22"/>
					</button>
				}

				<div className="relative">
					<div className={`absolute top-20 -left-32 md:-left-28 lg:left-80 w-96 h-80 flex items-center justify-center flex-col
					rounded-md bg-zinc-50 shadow-2xl border transition duration-700 ease-out  translate-y-2 modal
					${showModal ? "hidden" : "block "}`}>
						<button className="relative" onClick={()=>{setShowModal(!showModal)}}>
						<span className="absolute -top-28 -right-44 border">
							<MdClose size="18"/>
						</span>
						</button>
						<p className="px-24 leading-5" id='modal'>
							{modalMessage} <span className='hidden-message font-bold leading-9 '>anymore ...</span>
						</p>

					</div>
				</div>


				<Link href="/">
					<a>
						<h1 className="text-lg font-bold">ECommerce</h1>
					</a>
				</Link>

			</div>

			<div className="flex items-center justify-center mr-0 lg:mr-[225px]">

				<div className="relative"
					 onMouseEnter={() => setShowCartInfo(false)}
					 onMouseLeave={() => setShowCartInfo(true)}
				>
					<div className={`absolute top-10 -left-32 md:-left-12 w-48 h-24 flex items-center justify-center flex-col
					rounded-md bg-zinc-50 shadow-2xl border
					${showCartInfo ? "hidden" : "block"}`}>
						{countCartItems === 0 ? "NO Items" : <div>
							<p>You have </p>
							{countCartItems} items in cart</div>}
					</div>

					<Link href="/CartDetails" className="mx-4 cursor-pointer">
						<a>
							<div className="flex items-center justify-center mx-2">
								{/*<span className='mx-2'>Cart</span>*/}
								<BsCart size="18"/>
								{countCartItems ? (
									<button
										className="bg-red-600 px-2 ml-2 rounded-full cursor-pointer text-white">{countCartItems}</button>
								) : (
									''
								)}
							</div>
						</a>
					</Link>{' '}
				</div>

				<Link href="/SignIn" className="mx-4 cursor-pointer ">
					<a>
						<div className="flex items-center justify-center mx-2">
							{/*<span className='mx-2'>Log In</span>*/}
							<DiRedhat size="26"/>
						</div>

					</a>


				</Link>

			</div>

			{showSidebar && <SidebarMenu onClose={() => setShowSidebar(!showSidebar)}/>}
		</header>
	);
}
