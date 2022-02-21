import React from 'react';
import Link from "next/link";
import {MdClose, MdFormatAlignRight, MdChevronLeft, MdChevronRight, MdOutlineMenuOpen} from "react-icons/md";


const FilterByPrice = ({link,value}) => {

	// const values ='';
	return (
		<div className="flex justify-center items-start pl-6 flex-col lg:mt-6  bg-zinc-50 rounded-sm shadow-sm
		hover:shadow-md transition ease-out duration-100">
			<div>
				<Link href={`/${link}`}>
						<a  className='font-bold mr-16 py-1'>Remove filters by price</a>
				</Link>
			</div>
			<ul className='py-1'>
				<li>
					<p>Filter by Price : </p>
				</li>
				<li className='py-1'>
					<Link href={`/${link}/${value[0]}`}>
						<a>1000</a>
					</Link>
				</li>
				<li className='py-1'>
					<Link href={`/${link}/${value[1]}`}>
						<a>700</a>
					</Link>
				</li>
				<li className='py-1'>
					<Link href={`/${link}/${value[2]}`}>
						<a>450</a>
					</Link>
				</li>
				<li className='py-1'>
					<Link href={`/${link}/${value[3]}`}>
						<a>350</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default FilterByPrice;
