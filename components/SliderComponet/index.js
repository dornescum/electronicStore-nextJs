import React from 'react';
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import Iphone  from '../../assets/iphone_12.webp';
import Samsung  from '../../assets/samsung_note.webp';
import SamsungNote  from '../../assets/samsung.webp';
import Sony  from '../../assets/sony.webp';
import Motorola  from '../../assets/motorola.webp';
import Blackberry  from '../../assets/blackberry.webp';
import Nokia  from '../../assets/nokia.webp';

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
		<div className='my-4'>
			<p className='text-lg py-4 pl-6'> Flash deals</p>
			<Slider {...settings}>
				<div className="p-1" >
					<Link href="/Phones">
						<a>
							<div className="flex items-center justify-center">
								<Image src={Iphone} alt='iphone' width="200" height="100"
									   className="rounded-sm m-1 md:m-0 h-48 w-48 "/>
							</div>
						</a>
					</Link>
				</div>
				<div className="p-1">
					<Link href="/Phones">
						<a>
							<div className="flex items-center justify-center">
								<Image src={Samsung} alt='samsung' width="200" height="100"
									   className="rounded-sm m-1 md:m-0 object-cover h-48 w-48"/>
							</div>
						</a>
					</Link>
				</div>
				<div className="p-1">
					<Link href="/Phones">
						<a>
							<div className="flex items-center justify-center">
								<Image src={SamsungNote} alt="samsung note" width="200" height="100"
									   className="rounded-sm m-1 md:m-0 object-cover h-48 w-48"/>
							</div>
						</a>
					</Link>
				</div>
				<div className="p-1">
					<Link href="/Phones">
						<a>
							<div className="flex items-center justify-center">
								<Image src={Sony} alt='sony' width="200" height="100"
									   className="rounded-sm m-1 md:m-0 object-cover h-48 w-48"/>
							</div>
						</a>
					</Link>
				</div>
				<div className="p-1">
					<Link href="/Phones">
						<a>
							<div className="flex items-center justify-center">
								<Image src={Nokia} alt='nokia' width="200" height="100"
									   className="rounded-sm m-1 md:m-0 object-cover h-48 w-48"/>
							</div>
						</a>
					</Link>
				</div>
				<div className="p-1">
					<Link href="/Phones">
						<a>
							<div className="flex items-center justify-center">
								<Image src={Blackberry} alt="blackberry" width="200" height="100"
									   className="rounded-sm m-1 md:m-0 object-cover h-48 w-48"/>
							</div>
						</a>
					</Link>
				</div>
				<div className="p-1">
					<Link href="/Phones">
						<a>
							<div className="flex items-center justify-center">
								<Image src={Motorola} alt="motorola" width="200" height="100"
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
