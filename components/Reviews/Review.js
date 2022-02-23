import React from 'react';
import Image from "next/image";
const picture ='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80';


const Review = ({id, name, date, rating, review, img}) => {
	return (
		<div className="flex font-dosis md:mx-0 lg:mx-60 flex-col md:flex-row">
			<div className=" basis-1 lg:basis-1/5" id={id}>
				<div className='hidden lg:block'>
					{/*todo add img to user*/}
					<Image src={img ? img: picture } alt={name} height='50' width='50'/>
					<p>{name ? name : "N/A"}</p>
					<p>{date ? date : "N/A"}</p>
				</div>
			</div>
			<div className="lg:basis-4/5">
				<p>{rating ? rating : "N/A" }</p>
				<p>{review ? review: "N/A"}</p>

			</div>
		</div>
	);
};

export default Review;
