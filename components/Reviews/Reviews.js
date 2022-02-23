import React, {useState} from 'react';
import Link from "next/link";
import Image from 'next/image';
import Product from "../Product";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import Review from "./Review";
const picture ='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80';

const Reviews = ({reviews, img, review, rating, name, date, id}) => {
	const [showReview, setShowReview] = useState(false);

	return (
		<div className="border-gray-300 border-t-2">
			<div className={`flex justify-between my-2 mx-1 transition duration-700 ease-out hover:ease-in 
			${showReview ? 'bg-zinc-200': ""}
			`}>
				<p>Reviews</p>
				<div onClick={() => setShowReview(!showReview)} className='flex items-center bg-gray-600 rounded-full px-1 text-white'>
					{showReview ? <AiOutlineMinus/> : <AiOutlinePlus/>}
				</div>
			</div>


			{showReview && <Review  key={id} id={id} review={review} img={img} rating={rating} name={name} date={date}/>}
			{/*{reviews.map((item)=>{*/}
			{/*	return <Review key={id} id={id} review={review} img={img} rating={rating} name={name} date={date}/>*/}
			{/*})}*/}
		</div>



	);
};

export default Reviews;
