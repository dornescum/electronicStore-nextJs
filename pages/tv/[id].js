import React, {useContext, useState} from 'react';
import {ProductContext} from "../../context/ProductContext";
import SingleProduct from "../../components/SingleProduct";
import Link from "next/link";
import Specs from "../../components/Specs/Specs";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import Review from "../../components/Reviews/Review";
import Image from 'next/image';



const PhoneId = ({itemId}) => {
	const {onAdd} = useContext(ProductContext);
	const [showReview, setShowReview] = useState(false);
	const { title, price, id, desc, subtitle, main_img, short_description, battery_size, adaptor,bluetooth,
		manufacturer, os, seller, reviews, tag} =itemId;
	const mainImg = itemId.main_img.link;
	const colors = itemId.specs.colors;
	const storage = itemId.specs.storage;
	const individualStorage =storage.map((el)=> <span key={el}>{el}/</span>);


	return (
		<div className='font-dosis mb-20' id={id}>
			<div className="flex flex-col md:flex-row pt-12 lg:pt-8 pb-8">
				<div className="basis-1/2 flex justify-center items-center">
					{/*{!data && <div>Loading...</div>}*/}
					{itemId &&
						<div className="flex flex-col justify-center items-center  w-full md:w-80  md:ml-2 lg:ml-60 lg:w-64
		  h-96 md:h-80 lg:h-96 drop-shadow-md hover:drop-shadow-2xl ease-in duration-300">
							<Image src={mainImg} alt={title} width='1400' height='1400' className="object-cover h-96 w-96 cursor-wait"/>
						</div>
					}
				</div>
				<div className="basis-1/2 flex flex-col items-start justify-center h-96">
					<div className='pl-0 ml-0 md:pl-6 lg:mr-60'>
						<div className=''>
							<Link href="/tv">
								<a className='mt-0 ml-8 bg-zinc-100 px-4'>Tv</a>
							</Link>
						</div>

						{!itemId && <div className='mt-20 text-red-700 text-3xl'>Loading...</div> }
						<SingleProduct title={title} price={price} subtitle={subtitle} short_desc={short_description} onAdd={onAdd}
									   colors={colors} tag={tag}/>
					</div>
				</div>
			</div>
			{/*?description*/}
			<div className="mx-2 lg:mx-60 pt-2 lg:pt-12 pb-4">
				<p className='text-2xl pb-2'>{title}</p>
				<div className='leading-7'>
					<p>{desc}</p>
				</div>
			</div>
			{/*?specs*/}
			<div className=" mx-2 lg:mx-60 pt-2 lg:pt-12 pb-4">
				<Specs battery={battery_size} title={title} adaptor={adaptor} bluetooth={bluetooth}
					   storage={individualStorage} manufacturer={manufacturer} os={os} seller={seller}/>
			</div>
			{/*?reviews*/}
			<div className="mx-2 lg:mx-60 pt-2 lg:pt-12 pb-4">
				<div className="border-gray-300 border-t-2">
					<div className={`flex justify-between my-2 mx-1 transition duration-700 ease-out hover:ease-in
			${showReview ? 'bg-zinc-200': ""}
			`}>
						<p>Reviews</p>
						<div onClick={() => setShowReview(!showReview)} className='flex items-center
						bg-gray-600 rounded-full px-1 text-white cursor-pointer'>
							{showReview ? <AiOutlineMinus/> : <AiOutlinePlus/>}
						</div>
					</div>
					{showReview && <div className='py-2'>
						{reviews.map((el)=>{
							// console.log(el.rating);
							return <Review key={el.id} name={el.name} rating={el.rating} user_img={el.user_img}
										   date={el.date} review={el.review} title_review={el?.title_review} id={el.id}/>
						})}
					</div>}
				</div>
			</div>
		</div>

	);
};

export default PhoneId;

let url = 'https://electronis-api.herokuapp.com/api/tv/';
export const getStaticPaths = async () => {
	const res = await fetch(url);
	const data = await res.json();
	const paths = data.map((el) => {
		return {
			params: {id: el.id.toString()}
		};
	});
	return {
		paths: paths,
		fallback: false
	};
};
//  info individual
export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch(`${url}${id}`);
	const itemId = await res.json();
	// console.log(itemId);
	return {
		props: {
			itemId:itemId.message
		},
		revalidate: 60
	};
};
