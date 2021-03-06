import React
	from 'react';
import Link from "next/link";
import Button from "../UI/Button";
import Image from "next/image";



const HomeFavorites = (props) => {
	const {product, onAdd} = props;

	return <div className=" flex flex-col justify-center items-center w-full md:w-80 lg:w-48  h-96 md:h-80 lg:h-60" id={product.id}>
		<div className=' flex justify-center items-center'>
			<Link href={`/${product.tag}/${product.id}`}>
				<a>
					<Image className="object-cover h-48 lg:h-36 w-full md:w-48  z-10 bg-zinc-100"
						 src={product?.main_img.link}
						 loading="lazy" alt={product?.title} height='250' width='400' />
				</a>
			</Link>
		</div>
		<div className='w-full'>
			<ul className='flex justify-start px-1'>
				<li className={`py-4 md:py-1 text-base pl-2 ${product.favorite === true ? "italic text-2xl":""}`}>
					{product.title}
				</li>
				<li className='flex items-center animate-ping pl-4 ' >
					{/*{product.favorite === true ? <AiFillHeart    color="#ff0a0a"/> : " "}*/}
					{product.favorite}
				</li>
			</ul>

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
			</div>
		</div>
	</div>
};

export default HomeFavorites;
