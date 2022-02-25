import React from 'react';
import Link from "next/link";

const FilterByBrand = ({link,brands}) => {
	return (
		<div className='flex justify-center items-start pl-6 flex-col lg:mt-6  bg-zinc-50 rounded-sm '>
			<Link href="/Phones">
				<a className='mt-0  bg-zinc-50 font-bold'>Remove filters by brand</a>
			</Link>
			<ul className='py-1 w-full'>
				<li>
					<p>Filter by Brand : </p>
				</li>
				<li className='py-1 hover:bg-zinc-300 w-full transition duration-150 ease-out'>
					<Link href={`/${link}/brands/${brands[0]}`}>
						<a className='capitalize'>{brands[0]}</a>
					</Link>
				</li>
				<li className='py-1 hover:bg-zinc-300 w-full transition duration-150 ease-out'>
					<Link href={`/${link}/brands/${brands[1]}`}>
						<a className='capitalize'>{brands[1]}</a>
					</Link>
				</li>
				<li className='py-1 hover:bg-zinc-300 w-full transition duration-150 ease-out'>
					<Link href={`/${link}/brands/${brands[2]}`}>
						<a className='capitalize'>{brands[2]}</a>
					</Link>
				</li>
				<li className='py-1 hover:bg-zinc-300 w-full transition duration-150 ease-out'>
					<Link href={`/${link}/brands/${brands[3]}`}>
						<a className='capitalize'>{brands[3]}</a>
					</Link>
				</li>
				<li className='py-1 hover:bg-zinc-300 w-full transition duration-150 ease-out'>
					<Link href={`/${link}/brands/${brands[4]}`}>
						<a className='capitalize'>{brands[4]}</a>
					</Link>
				</li>
				<li className='py-1 hover:bg-zinc-300 w-full transition duration-150 ease-out'>
					<Link href={`/${link}/brands/${brands[5]}`}>
						<a className='capitalize'>{brands[5]}</a>
					</Link>
				</li>

			</ul>

		</div>
	);
};

export default FilterByBrand;
