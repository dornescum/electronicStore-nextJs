import React from 'react';
import Link from "next/link";
import {AiFillHeart} from "react-icons/ai";
import Button from "../UI/Button";


const HomeFavorites = ({items}) => {
	const favoriteItems = items.filter((item) => {
		return item.favorite;
	});
	console.log(favoriteItems);
	return <div className="my-12">

		<div className="pl-6">
			<div className="flex items-center">
				<span className='pr-2'>ECommerce</span>
				<AiFillHeart color="red"/>
			</div>
		</div>
		<ul className="flex flex-wrap">
			{favoriteItems.map((item) => {
				return <li key={item?.id}>
					<div className="flex flex-col bg-slate-50 w-full md:w-80 lg:w-48 md:ml-2
		rounded-sm shadow-md mx-2  mt-2 md:mt-6  h-96 md:h-80 lg:h-[300px] drop-shadow-md hover:drop-shadow-2xl ease-in duration-300
		font-dosis relative">
						<Link href={`/Phones/${item.id}`}>
							<a>
								<img className="object-cover h-48 lg:h-36 w-full absolute top-0"
									 src={item?.main_img.link}
									 loading="lazy" alt={item?.title}/>
							</a>
						</Link>

						<div className="absolute top-0 left-0">
							<p className={`${item.discount ? 'bg-red-500 rounded-sm text-white text-sm' : ' ' || item.discount === 0 ? 'hidden' : ""}
				
				 z-10 p-1`}> {-item.discount}</p>
						</div>
						<div className="absolute bottom-0  w-full">
							<ul className="flex justify-start px-1">
								<li className={`py-4 md:py-1 text-xl pl-2 ${item.favorite === true ? "italic text-2xl" : ""}`}>
									{item?.title}
								</li>
								{/*<li className="flex items-center animate-ping pl-4 ">*/}
								{/*	{item?.favorite === true ? <AiFillHeart color="#ff0a0a"/> : " "}*/}
								{/*</li>*/}
							</ul>
							<div className="text-sm px-1 flex">
							</div>
							<div className=" md:mb-2 px-1">
								<ul className="flex  justify-between py-4 md:py-1 px-2">
									<li className="underline py-1">
										<Link href={`/Phones/${item.id}`}>
											<a>
												Info
											</a>
										</Link>
									</li>
									<li className="py-1 text-lg lg:text-base font-bold md:font-thin">{item.price} &euro;</li>
								</ul>

							</div>
							<div className=" flex justify-center items-center bg-blue-400">
								<Button onClick={() => onAdd(item)}>Add to cart</Button>
								{/*<button onClick={() => onAdd(item)} className='w-full'>Add to cart</button>*/}
							</div>
						</div>

					</div>
				</li>;
			})}
		</ul>
	</div>;
};

export default HomeFavorites;
// export const getStaticProps = async () => {
// 	const res = await fetch(`https://electronis-api.herokuapp.com/api/phones`);
// 	const products = await res.json();
//
// 	return {
// 		props: {
// 			products,
// 		},
// 	};
// };
