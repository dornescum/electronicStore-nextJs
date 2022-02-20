import React, {useContext} from 'react';
import {ProductContext} from "../../context/ProductContext";
import Button from "../../components/UI/Button";
import { BsCircle} from 'react-icons/bs';
import SingleProduct from "../../components/SingleProduct";
import Product from "../../components/Product";


const PhoneId = ({itemId}) => {
	const {onAdd,  cartItems} = useContext(ProductContext);
	// console.log(onAdd);


	console.log(itemId);
	const title = itemId.message.title;
	const price = itemId.message.price;
	const id = itemId.message.id;
	const desc = itemId.message.description;
	const subtitle = itemId.message.subtitle;
	const mainImg = itemId.message.main_img.link;
	const short_desc = itemId.message.short_description;
	const colors = itemId.message.specs.colors;

	// console.log(colors);
	return (
		<div className="flex flex-col md:flex-row pt-40 pb-32 font-dosis">
			<div className="basis-1/2 flex justify-center items-center">
				<div className="flex flex-col justify-center items-center  w-full md:w-80 md:ml-2 lg:w-64
		  h-96 md:h-80 lg:h-96 drop-shadow-md hover:drop-shadow-2xl ease-in duration-300">
					<img src={mainImg} alt={title} className="object-cover h-96 w-96"/>
				</div>
			</div>
			<div className="basis-1/2 flex flex-col items-start justify-center h-96">
				{!itemId && <div className='mt-20 text-red-700 text-3xl'>Loading...</div> }
				<SingleProduct title={title} price={price} subtitle={subtitle} short_desc={short_desc} onAdd={onAdd}
				colors={colors}
				/>

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