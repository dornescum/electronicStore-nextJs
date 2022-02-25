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
	const modalMessage = "We don't collect your data";


	return (
		<header className="block bg-zinc-50 z-20 flex w-full fixed top-0 justify-between p-4 font-dosis">
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
				{/*Modal*/}
				<div className="relative">
					<div className={`absolute top-10 -left-8 md:left-8 lg:left-96  w-56 md:w-44 lg:w-44 h-48 lg:h-44 flex items-center justify-center flex-col
					rounded-md bg-zinc-50 shadow-2xl border transition duration-700 ease-out  translate-y-2 modal
					${showModal ? "hidden" : "block "}`}>
						<ul>
							<li className='flex justify-center items-center flex-col'>{modalMessage}
								<span className="hidden-message font-bold leading-9 ">anymore ...</span>
							</li>
							<li>
								<button className="" onClick={() => {
									setShowModal(!showModal);
								}}>
									{/*absolute -top-5 lg:-top-32 -right-24 lg:-right-80*/}
									<span className=" border absolute bottom-4 right-4"> Close
										{/*<MdClose size="18"/>*/}
									</span>
								</button>
							</li>
						</ul>
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
										className="bg-red-600 px-3 ml-2 rounded-full cursor-pointer text-white">{countCartItems}</button>
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
