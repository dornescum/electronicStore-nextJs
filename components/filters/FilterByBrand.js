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
					<p>Filter by Price : </p>
				</li>
				<li className='py-1 hover:bg-zinc-300 w-full transition duration-150 ease-out'>
					<Link href={`/${link}/brands/${brands[0]}`}>
						<a>Apple</a>
					</Link>
				</li>
				<li className='py-1 hover:bg-zinc-300 w-full transition duration-150 ease-out'>
					<Link href={`/${link}/brands/${brands[1]}`}>
						<a>Samsung</a>
					</Link>
				</li>
				<li className='py-1 hover:bg-zinc-300 w-full transition duration-150 ease-out'>
					<Link href={`/${link}/brands/${brands[2]}`}>
						<a>Sony</a>
					</Link>
				</li>
				<li className='py-1 hover:bg-zinc-300 w-full transition duration-150 ease-out'>
					<Link href={`/${link}/brands/${brands[3]}`}>
						<a>Motorola</a>
					</Link>
				</li>
				<li className='py-1 hover:bg-zinc-300 w-full transition duration-150 ease-out'>
					<Link href={`/${link}/brands/${brands[4]}`}>
						<a>Nokia</a>
					</Link>
				</li>
				<li className='py-1 hover:bg-zinc-300 w-full transition duration-150 ease-out'>
					<Link href={`/${link}/brands/${brands[5]}`}>
						<a>BlackBerry</a>
					</Link>
				</li>

			</ul>

		</div>
	);
};

export default FilterByBrand;
