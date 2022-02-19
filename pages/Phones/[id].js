import React, {useContext} from 'react';
import {ProductContext} from "../../context/ProductContext";
import Button from "../../components/UI/Button";
import { BsCircle} from 'react-icons/bs';


const PhoneId = ({itemId}) => {
	const {onAdd,  cartItems} = useContext(ProductContext);



	console.log(itemId);
	const title = itemId.message.title;
	const price = itemId.message.price;
	const id = itemId.message.id;
	const desc = itemId.message.description;
	const subtitle = itemId.message.subtitle;
	const mainImg = itemId.message.main_img.link;
	const short_desc = itemId.message.short_description;
	const colors = itemId.message.specs.colors;
	const product = itemId.message.title;

	console.log(price);
	return (
		<div className="flex flex-col md:flex-row pt-40 pb-32">
			<div className="basis-1/2 flex justify-center items-center">
				<div className="flex flex-col justify-center items-center  w-full md:w-80 md:ml-2 lg:w-64
		  h-96 md:h-80 lg:h-96 drop-shadow-md hover:drop-shadow-2xl ease-in duration-300">
					<img src={mainImg} alt={title} className="object-cover h-96 w-96"/>
				</div>
			</div>
			<div className="basis-1/2 flex flex-col items-start justify-center h-96">

				<div className=" pl-8 pr-4 py-4 mx-1">
					<p className='py-2 text-2xl'>{title}</p>
					<p className='py-2 text-3xl first-letter:capitalize'>{short_desc}</p>
					<ul className='flex'>
						{colors.map((col)=>{
							return <li key={col} className=' py-2'>
								<div>
									<BsCircle color={col} />
									<p className='px-2'>{col}</p>
								</div>

								</li>
						})}
					</ul>
					<p className='py-2'>${price}</p>
					<p className='py-2'>{subtitle}</p>
					{/*<p>{desc}</p>*/}
					<Button >Add to cart</Button>

				</div>
			</div>

		</div>
	);
};

export default PhoneId;

export async function getServerSideProps(context) {
	const res = await fetch(`https://electronis-api.herokuapp.com/api/phones/${context.params.id}`);
	console.log(res);
	const itemId = await res.json();

	return {
		props: {
			itemId
		}
	};
}
