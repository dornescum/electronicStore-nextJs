import React from 'react';
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import Photo1 from '../../public/1.jpg'
import Photo2 from '../../public/2.jpg'

const SliderComponent = () => {
	const settings = {
		className: "h-96 w-96",
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true

		// dots: true,
		// // infinite: true,
		// slidesToShow: 2,
		// slidesToScroll: 1,
		// // autoplay: true,
		// // speed: 4000,
		// // autoplaySpeed: 3000,
		// // cssEase: "linear"
	};
	return (
		<div className='w-full'>
			<h2> Single Item</h2>
			<Slider {...settings}>
				<div>
					<h3>1</h3>
								<div className="">
									<Image src={Photo1} alt='' width="400" height="300"
										   className="rounded-md m-1 md:m-0 object-cover w-full"/>
								</div>
				</div>
				<div>
					<h3>2</h3>
					 					<div className="">
					 						<Image src={Photo2} alt='' width="400" height="300"
					 							   className="rounded-md m-1 md:m-0"/>
					 					</div>
				</div>
				<div>
					<h3>3</h3>
				</div>
				<div>
					<h3>4</h3>
				</div>
				<div>
					<h3>5</h3>
				</div>
				<div>
					<h3>6</h3>
				</div>
			</Slider>
		</div>

		// <div className='flex items-center justify-center h-96 w-96'>
		// 	<Slider {...settings}>
		// 		<div className="p-1">
		// 			<Link href="/">
		// 				<a>
		// 					<div className="">
		// 						<Image src={Photo1} alt='' width="400" height="300"
		// 							   className="rounded-md m-1 md:m-0"/>
		// 					</div>
		// 				</a>
		// 			</Link>
		// 		</div>
		// 		<div className="p-1">
		// 			<Link href="/phones">
		// 				<a>
		// 					<div className="">
		// 						<Image src={Photo2} alt='' width="400" height="300" className="rounded-md"/>
		// 					</div>
		// 				</a>
		// 			</Link>
		// 		</div>
		//
		// 		{/*<div className="p-1">*/}
		// 		{/*	<Link href="/phones">*/}
		// 		{/*		<a>*/}
		// 		{/*			<div className="">*/}
		// 		{/*				<Image src={Photo2} alt='' width="400" height="300" className="rounded-md"/>*/}
		// 		{/*			</div>*/}
		// 		{/*		</a>*/}
		// 		{/*	</Link>*/}
		// 		{/*</div>*/}
		//
		// 	</Slider>
		// </div>
	);
};

export default SliderComponent;
