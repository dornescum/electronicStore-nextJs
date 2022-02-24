import React, {useContext} from 'react';
import HomeFavorites from "../HomeFavorites/HomeFavorites";
import {ProductContext} from "../../context/ProductContext";
import Product from "../Product";
import Link from "next/link";
import {AiFillHeart} from "react-icons/ai";
import {BsStarFill} from "react-icons/bs";
import Button from "../UI/Button";


const HomePhones = ({products}) => {
	const {onAdd, cartItems,} = useContext(ProductContext);


	return (
		<section className="mx-2 lg:mx-0 mt-4 mb-2 flex flex-col  justify-center items-center">
			<ul className=" flex justify-center md:justify-start items-center flex-wrap flex-col md:flex-row w-full mb-2">
				{products.map((product) => {
					return <li key={product.id}
							   // todo fix margin error
							   className="flex flex-col bg-slate-50 w-full md:w-80 lg:w-48 ml-0 md:ml-2 mb-2 md:mb-0
		rounded-sm shadow-md  mt-2 md:mt-6  h-96 md:h-80 lg:h-[300px] drop-shadow-sm hover:drop-shadow-md ease-in duration-300
		font-dosis relative">
						<Link href={`/Phones/${product.id}`}>
							<a>
								<img className="object-cover h-48 lg:h-36 w-full " src={product?.main_img.link}
									 loading='lazy'	 alt={product?.title} />
							</a>
						</Link>
						<div className='absolute top-0 left-0'>
							<p className={`${product.discount ? 'bg-red-500 rounded-sm text-white text-sm': ' ' || product.discount === 0 ? 'hidden' :""}
				
				 z-10 p-1`}> { - product.discount  }</p>
						</div>
						<div className='absolute bottom-0  w-full'>
							<ul className='flex justify-start px-1'>
								<li className={`py-4 md:py-1 text-xl pl-2 ${product.favorite === true ? "italic text-2xl":""}`}>
									{product.title}
								</li>
								<li className='flex items-center animate-ping pl-4 ' >
									{product.favorite === true ? <BsStarFill    color="#ff0a0a"/> : " "}
								</li>
							</ul>

							<div className=' md:mb-2 px-1'>
								<ul className='flex  justify-between py-4 md:py-1 px-2'>
									<li className='underline py-1'>
										<Link href={`/Phones/${product.id}`}>
											<a>
												Info
											</a>
										</Link>
									</li>
									<li className='py-1 text-lg lg:text-base font-bold md:font-thin'>{product.price} &euro;</li>
								</ul>

							</div>
							<div className=' flex justify-center items-center bg-blue-400'>
								<Button onClick={() => onAdd(product)}>Add to cart</Button>
							</div>
						</div>
					</li>;
				})}
			</ul>
		</section>
	);
};

export default HomePhones;
