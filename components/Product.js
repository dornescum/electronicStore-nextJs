import Button from "./UI/Button";
import { BsStarFill } from 'react-icons/bs';
import Link from "next/link";
import Image from "next/image";
import {AiFillHeart} from "react-icons/ai";


export default function Product(props) {
	const { product, onAdd } = props;



	return (
		<div className='flex flex-col bg-slate-50 w-full md:w-80 lg:w-48 md:ml-2
		rounded-sm shadow-md mx-2  mt-2 md:mt-6  h-96 md:h-80 lg:h-[300px] drop-shadow-sm hover:drop-shadow-md ease-in duration-300
		font-dosis relative' id={product.id}>
			<Link href={`/${product.tag}/${product.id}`}>
				<a>
					<Image className="object-cover h-48 lg:h-36 w-full absolute top-0" src={product?.main_img.link}
						 loading='lazy'	 alt={product?.title} width='400' height='250'/>
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
						{product.favorite === true ? <AiFillHeart    color="#ff0a0a"/> : " "}
					</li>
				</ul>
				<div className='text-sm px-1 flex'>
					{/*{product.rating} &#9733;*/}
					{/*{[...Array(product.rating)].map((star, index)=>{*/}
					{/*	return <div key={index} className='flex'>*/}
					{/*		<FaStar color='#ffda0a'/>*/}
					{/*	</div>*/}
					{/*})}*/}
					<p></p>
				</div>
				<div className=' md:mb-2 px-1'>
					<ul className='flex  justify-between py-4 md:py-1 px-2'>
						<li className='underline py-1'>
							<Link href={`/${product.tag}/${product.id}`}>
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
					{/*<button onClick={() => onAdd(product)} className='w-full'>Add to cart</button>*/}
				</div>
			</div>

		</div>
	);
}
