import React from 'react';
import Image from "next/image";
import { FaStar } from 'react-icons/fa';

const picture ='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80';


const Review = ({id, name, date, rating, review, user_img, title_review}) => {
	// console.log(rating);
	return (
		<div className="flex font-dosis mx-2 my-4 flex-col md:flex-row specs border-b-4">
			<div className=" basis-1 lg:basis-1/5" id={id}>
				<div className='pb-2 flex flex-col items-start pl-6 md:pl-0 md:items-center md:justify-center '>
					{/*todo add img to user*/}
					<Image src={user_img ? user_img: picture } alt={name} height='50' width='50'
						   className='h-12 w-12 py-2 rounded-full'/>
					<p className='py-1'>{name ? name : "N/A"}</p>
					<p className='py-1'>{date ? date : "N/A"}</p>
				</div>
			</div>
			<div className="lg:basis-4/5">
				<div className='pl-6 pt-2'>
					<p className='font-bold py-1'>{title_review? title_review : "N/A"}</p>
					{/*<p>{rating ? rating : "N/A" }</p>*/}
					{/*{product.rating} &#9733;*/}
					<div className='flex py-1'>
						{[...Array(rating)].map((star, index)=>{
							return <div key={index} className='flex flex-row'>
								<FaStar color='#ffda0a'/>
							</div>
						})}
					</div>

					<p className='py-1'>{review ? review: "N/A"}</p>
				</div>


			</div>
		</div>
	);
};

export default Review;
