import React, {useContext, useState} from 'react';
import {ProductContext} from "../../context/ProductContext";
import Button from "../../components/UI/Button";
import { BsCircle} from 'react-icons/bs';
import SingleProduct from "../../components/SingleProduct";
import Product from "../../components/Product";
import Link from "next/link";
import Specs from "../../components/Specs/Specs";
import Reviews from "../../components/Reviews/Reviews";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import Review from "../../components/Reviews/Review";


const PhoneId = ({itemId}) => {
	const {onAdd,  cartItems} = useContext(ProductContext);
	const [showReview, setShowReview] = useState(false);

	console.log(itemId);


	console.log(itemId);
	const title = itemId.message.title;
	const price = itemId.message.price;
	const id = itemId.message.id;
	const desc = itemId.message.description;
	const subtitle = itemId.message.subtitle;
	const mainImg = itemId.message.main_img.link;
	const short_desc = itemId.message.short_description;
	const colors = itemId.message.specs.colors;
	const storage = itemId.message.specs.storage;
	const batterySize = itemId.message.specs.battery_size;
	const adaptor = itemId.message.specs.adaptor;
	const bluetooth = itemId.message.specs.bluetooth;
	const manufacturer = itemId.message.specs.manufacturer;
	const os = itemId.message.specs.os;
	const seller = itemId.message.seller;
	const reviews = itemId.message.reviews;


	const individualStorage =storage.map((el)=> <span key={el}>{el}/</span>);

	console.log(reviews);
	return (
		<div className='font-dosis'>
			<div className="flex flex-col md:flex-row pt-40 pb-8">
				<div className="basis-1/2 flex justify-center items-center">
					<div className="flex flex-col justify-center items-center  w-full md:w-80 md:ml-2 lg:w-64
		  h-96 md:h-80 lg:h-96 drop-shadow-md hover:drop-shadow-2xl ease-in duration-300">
						<img src={mainImg} alt={title} className="object-cover h-96 w-96"/>
					</div>
				</div>
				<div className="basis-1/2 flex flex-col items-start justify-center h-96">
					<Link href="/Phones">
						<a className='mt-0 pl-6 bg-zinc-50'>Phones</a>
					</Link>

					{!itemId && <div className='mt-20 text-red-700 text-3xl'>Loading...</div> }
					<SingleProduct title={title} price={price} subtitle={subtitle} short_desc={short_desc} onAdd={onAdd}
								   colors={colors}
					/>

				</div>

			</div>

			<div className=" mx-80 pt-12 pb-12">
				<p className='text-2xl pb-2'>{title}</p>
					<div className='leading-7'>
						<p>{desc}</p>
					</div>
				{/*<div className='border-black border-t-2'>test</div>*/}
			</div>
			<div className=" mx-80 pt-12 pb-32">
					<Specs battery={batterySize} title={title} adaptor={adaptor} bluetooth={bluetooth}
						   storage={individualStorage} manufacturer={manufacturer} os={os} seller={seller}/>
			</div>
			<div className=" mx-80 pt-12 pb-32">
				<div className="border-gray-300 border-t-2">
					<div className={`flex justify-between my-2 mx-1 transition duration-700 ease-out hover:ease-in 
			${showReview ? 'bg-zinc-200': ""}
			`}>
						<p>Reviews</p>
						<div onClick={() => setShowReview(!showReview)} className='flex items-center bg-gray-600 rounded-full px-1 text-white'>
							{showReview ? <AiOutlineMinus/> : <AiOutlinePlus/>}
						</div>
					</div>


					{showReview && <div>
						{reviews.map((el)=>{
							return <Review key={el.id} name={el.name} rating={el.rating}/>
						})}
					</div>}
					{/*{reviews.map((item)=>{*/}
					{/*	return <Review key={id} id={id} review={review} img={img} rating={rating} name={name} date={date}/>*/}
					{/*})}*/}
				</div>



				{/*{reviews.map((el)=>{*/}
				{/*	return <Reviews key={el.id} name={el.name} review={el.review}*/}
				{/*					src={el.img} date={el.date} rating={el.rating}  reviews={reviews}/>*/}
				{/*})}*/}
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
