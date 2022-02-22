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

const menuLinks = [

    {id: "ml-2", title: "Phones", link: "/Phones"},
    {id: "ml-3", title: "Laptops", link: "/"},
    {id: "ml-4", title: "Tablets", link: "/"},
    {id: "ml-5", title: "Pc", link: "/"},
    {id: "ml-6", title: "Tv", link: "/"},

];

export default function Header({countCartItems}) {
    const {showSidebar, setShowSidebar} = useContext(ProductContext);


    // todo sa inchid automat meniul cand dau in afara
    // const [showSidebar, setShowSidebar] = useState(false);
    const [showCartInfo, setShowCartInfo] = useState(true);
    const [showProducts, setShowProducts] = useState(false);


    return (
        <header className="block bg-zinc-50 z-10 flex w-full fixed top-0 justify-between p-4 font-dosis">
            <div className="ml-0 lg:ml-96 flex items-center justify-center">
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
                <Link href="/">
                    <a>
                        <h1 className="text-lg font-bold">ECommerce</h1>
                    </a>
                </Link>


                <div className="relative"
                     onClick={() => setShowProducts(!showProducts)}>
                    {/*<span className="mx-2 cursor-pointer">Products</span>*/}
                    <div className={`absolute top-10 -left-32 md:-left-28 w-96 h-80 flex items-center justify-center flex-col
					rounded-md bg-zinc-50 shadow-2xl border transition duration-700 ease-out  translate-y-2 sidebar
					${showProducts ? "hidden" : "block "}`}>
                        <button className="relative">
						<span className="absolute bottom-6 -right-44 border">
							<MdClose size="18"/>
						</span>
                        </button>
                        <p className='px-24 leading-5'>
                            Want to hear about our latest products?
                        </p>

                        <form>
                            <div className='flex flex-col'>
                                <label htmlFor="name" className='py-1 pl-2'>Name</label>
                                <input type="text" id='name-modal' placeholder='name' className='border py-1
							pl-2 w-full'/>
                            </div>
                            <div>
                                <label htmlFor="email" className='py-1 pl-2'>Name</label>
                                <input type="text" id='email-modal' placeholder='email' className='border py-1
							pl-2 w-full'/>
                            </div>
                            {/*todo adaduga overlay*/}
                            <div className='py-2'>
                                <Button>Subscribe</Button>
                            </div>

                        </form>
                        {/*{menuLinks.map((link) => {*/}
                        {/*	return <div*/}
                        {/*		className="py-2 mb-0 mt-1 hover:bg-zinc-100 w-full transition duration-150 ease-out"*/}
                        {/*		key={link.id} data-testid={link.id}>*/}

                        {/*		<Link href={link.link}>*/}
                        {/*			<a className="flex justify-start pl-4" data-testid={link.title}>{link.title} </a>*/}
                        {/*		</Link>*/}
                        {/*	</div>;*/}
                        {/*})}*/}

                    </div>

                </div>


            </div>
            <div className="flex items-center justify-center mr-0 lg:mr-96">

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
