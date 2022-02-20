import Button from "./UI/Button";
import { BsStarFill } from 'react-icons/bs';
import Link from "next/link";


export default function Product(props) {
	const { product, onAdd } = props;

	return (
		<div className='flex flex-col justify-around bg-slate-50 w-full md:w-80 md:ml-2 lg:w-64  items-center
		rounded-sm shadow-md  mt-16 md:mt-20  h-96 md:h-80 lg:h-96 drop-shadow-md hover:drop-shadow-2xl ease-in duration-300
		font-dosis'>
			<img className="object-cover h-48 lg:h-36 w-full rounded-tl rounded-tr" src={product?.main_img.link}
				 loading='lazy'	 alt={product?.title} />
			<ul className='flex justify-around'>
				<li className={`px-1 py-4 md:py-1 text-xl ${product.favorite === true ? "italic text-2xl":""}`}>
					{product.title}
				</li>
				<li className='flex items-center animate-bounce' >
					{product.favorite === true ? <BsStarFill    color="#ffda0a"/> : " "}
				</li>
			</ul>

			<div className=' px-4 md:mb-2'>
				<ul className='flex  py-4 md:py-1'>
					<li className='mx-8'>
						<Link href={`/Phones/${product.id}`}>
						<a>
							info
						</a>
						</Link>
					</li>
					<li className='mx-8'>{product.price} &euro;</li>
				</ul>

			</div>
			<div className='p-1  flex justify-center items-center'>
				<Button onClick={() => onAdd(product)}>Add to cart</Button>
			</div>
		</div>
	);
}
