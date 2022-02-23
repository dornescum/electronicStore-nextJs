import React, {useContext} from 'react';
import {ProductContext} from "../../context/ProductContext";
import Link from "next/link";
import {AiFillHeart} from "react-icons/ai";
import Button from "../UI/Button";


const HomeFavorites = (props) => {
	const {product, onAdd} = props;

	return <div className=" mx-0 ">
		<div className=''>
			<Link href={`/Phones/${product.id}`}>
				<a>
					<img className="object-cover h-48 lg:h-36 w-full md:w-48  z-10 bg-red-500"
						 src={product?.main_img.link}
						 loading="lazy" alt={product?.title}/>
				</a>
			</Link>
		</div>
		<div className='w-full '>
			<ul className='flex justify-start px-1'>
				<li className={`py-4 md:py-1 text-xl pl-2 ${product.favorite === true ? "italic text-2xl":""}`}>
					{product.title}
				</li>
				<li className='flex items-center animate-ping pl-4 ' >
					{product.favorite === true ? <AiFillHeart    color="#ff0a0a"/> : " "}
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
	</div>
};

export default HomeFavorites;
