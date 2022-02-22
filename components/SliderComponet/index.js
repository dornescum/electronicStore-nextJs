import React from 'react';
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

const SliderComponent = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	};
	return (
		<div className=''>
			<p className='text-lg py-4 pl-6'> Flash deals</p>
			<Slider {...settings}>
				<div className="p-1" >
					<Link href="/">
						<a>
							<div className="flex items-center justify-center">
								<Image src='https://images.unsplash.com/photo-1645474906518-6542b42f9bef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' alt='' width="200" height="100"
									   className="rounded-sm m-1 md:m-0 h-48 w-48 "/>
							</div>
						</a>
					</Link>
				</div>
				<div className="p-1">
					<Link href="/Phones">
						<a>
							<div className="flex items-center justify-center">
								<Image src='https://images.unsplash.com/photo-1645359493337-f315e4fa9698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' alt='' width="200" height="100"
									   className="rounded-sm m-1 md:m-0 object-cover h-48 w-48"/>
							</div>
						</a>
					</Link>
				</div>
				<div className="p-1">
					<Link href="/pasta">
						<a>
							<div className="flex items-center justify-center">
								<Image src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" width="200" height="100"
									   className="rounded-sm m-1 md:m-0 object-cover h-48 w-48"/>
							</div>
						</a>
					</Link>
				</div>
				<div className="p-1">
					<Link href="/pork">
						<a>
							<div className="flex items-center justify-center">
								<Image src='https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='' width="200" height="100"
									   className="rounded-sm m-1 md:m-0 object-cover h-48 w-48"/>
							</div>
						</a>
					</Link>
				</div>
				<div className="p-1">
					<Link href="/salads">
						<a>
							<div className="flex items-center justify-center">
								<Image src='https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='' width="200" height="100"
									   className="rounded-sm m-1 md:m-0 object-cover h-48 w-48"/>
							</div>
						</a>
					</Link>
				</div>
				<div className="p-1">
					<Link href="/desert">
						<a>
							<div className="flex items-center justify-center">
								<Image src="https://images.unsplash.com/photo-1643861623906-e43d87970419?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8cVBZc0R6dkpPWWN8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" width="200" height="100"
									   className="rounded-sm m-1 md:m-0 object-cover h-48 w-48"/>
							</div>
						</a>
					</Link>
				</div>
			</Slider>
		</div>
	);
};

export default SliderComponent;
