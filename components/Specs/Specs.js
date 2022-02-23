import React, {useState} from 'react';
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

const Specs = ({title, battery, adaptor, bluetooth, storage, manufacturer, os, seller}) => {
	const [showInfo, setShowInfo] = useState(false);
	return (
		<article className="border-gray-300 border-t-2">
			<div className={`flex justify-between my-2 mx-1 transition duration-700 ease-out hover:ease-in 
			${showInfo ? 'bg-zinc-200': ""}
			`}>
				<p>{title}</p>
				<div onClick={() => setShowInfo(!showInfo)} className='flex items-center bg-gray-600 rounded-full px-1 text-white'>
					{showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
				</div>
			</div>
			{/*todo odd:bg-gray-100*/}
			{showInfo && <div className=" mx-1 transition duration-700 ease-out hover:ease-in specs">
				<ul className="flex justify-between my-2">
					<li>Battery size :</li>
					<li>{battery}</li>
				</ul>
				<ul className="flex justify-between my-2">
					<li>Adaptor</li>
					<li className="capitalize">{adaptor}</li>
				</ul>
				<ul className="flex justify-between my-2">
					<li>Bluetooth</li>
					<li className="capitalize">{bluetooth}</li>
				</ul>
				<ul className="flex justify-between my-2">
					<li>Storage</li>
					<li> {storage}</li>
				</ul>
				<ul className="flex justify-between my-2">
					<li>Manufacturer</li>
					<li className="capitalize">{manufacturer}</li>
				</ul>
				<ul className="flex justify-between my-2">
					<li>Os</li>
					<li className="capitalize">{os}</li>
				</ul>
				<ul className="flex justify-between my-2">
					<li>Seller</li>
					<li className={`${seller === "EmagIa" ? "font-bold capitalize text-lg":"capitalize"}`}>{seller}</li>
				</ul>

			</div>}

		</article>
	);
};

export default Specs;
