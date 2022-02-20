import React from 'react';
import {BsCircle} from "react-icons/bs";
import Button from "./UI/Button";

const SingleProduct = (props) => {
	const { product, onAdd } = props;
	return (
		<div className=" pl-8 pr-4 py-4 mx-1">
			<p className='py-2 text-2xl'>{props.title}</p>
			<p className='py-2 text-3xl first-letter:capitalize'>{props.short_desc}</p>
			<ul className='flex'>
				{props.colors.map((col)=>{
					return <li key={col} className=' py-2'>
						<div>
							<BsCircle color={col} />
							<p className='px-2'>{col}</p>
						</div>
					</li>
				})}
			</ul>
			<p className='py-2'>${props.price}</p>
			<p className='py-2'>{props.subtitle}</p>
			{/*<p>{desc}</p>*/}
			<Button onClick={() => onAdd(props)}>Add to cart</Button>
		</div>
	);
};

export default SingleProduct;
