import Button from "./UI/Button";
import { BsStarFill } from 'react-icons/bs';
import Link from "next/link";
import {FaStar} from "react-icons/fa";


export default function Product(props) {
	const { product, onAdd } = props;

	return (
		<div className='flex flex-col bg-slate-50 w-full md:w-80 lg:w-48 md:ml-2
		rounded-sm shadow-md mx-2  mt-2 md:mt-6  h-96 md:h-80 lg:h-80 drop-shadow-md hover:drop-shadow-2xl ease-in duration-300
		font-dosis relative'>
			<Link href={`/Phones/${product.id}`}>
				<a>
					<img className="object-cover h-48 lg:h-36 w-full absolute top-0" src={product?.main_img.link}
						 loading='lazy'	 alt={product?.title} />
				</a>
			</Link>

			<div className='absolute top-0 left-0'>
				<p className={`${product.flash_sale ? 'bg-red-500 rounded-sm text-white text-sm': ''} z-10 p-1`}> {product.flash_sale ? `- ${product.discount[0]} %` : ""}</p>
			</div>
			<div className='absolute bottom-0  w-full'>
				<ul className='flex justify-start px-1'>
					<li className={`py-4 md:py-1 text-xl ${product.favorite === true ? "italic text-2xl":""}`}>
						{product.title}
					</li>
					<li className='flex items-center animate-ping px-1 ' >
						{product.favorite === true ? <BsStarFill    color="#ffda0a"/> : " "}
					</li>
				</ul>
				<div className='text-sm px-1 flex'>
					{/*{product.rating} &#9733;*/}
					{[...Array(product.rating)].map((star, index)=>{
						return <div key={index} className='flex'>
							<FaStar color='#ffda0a'/>
						</div>
					})}
				</div>
				<div className=' md:mb-2 px-1'>
					<ul className='flex  justify-between py-4 md:py-1'>
						<li className='underline py-1'>
							<Link href={`/Phones/${product.id}`}>
								<a>
									Info
								</a>
							</Link>
						</li>
						<li className='py-1'>{product.price} &euro;</li>
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
