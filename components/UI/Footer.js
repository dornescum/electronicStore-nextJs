import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaBloggerB } from 'react-icons/fa';
import Link from "next/link";


const Footer = () => {
	const year = new Date().getFullYear();
	return (
		// todo temporary fix footer position
		<div className='w-32 md:w-96 mt-8 absolute bottom-0'>
			<ul className='flex py-2 pl-2 md:pl-2 lg:pl-0'>
				<li className='p-1 flex items-center justify-center'>
					<p className='flex items-center justify-center w-[60px]'>© {year}</p>
					</li>
				<li className="p-1 flex items-center">
					<Link href='https://github.com/dornescum'  rel="noopener" target="_blank">
						<a rel="noopener" target="_blank"><AiFillGithub /></a>
					</Link>

				</li>
				<li className="p-1 flex items-center">
					<Link href="https://www.linkedin.com/in/mihai-dornescu-21b35a94/" >
						<a rel="noopener" target="_blank"><AiFillLinkedin /></a>
					</Link>

				</li>
				<li className="p-1 flex items-center">
					<Link href="https://dornescu.ro/" itemProp="author" rel="noopener" target="_blank">
						<a rel="noopener" target="_blank">
							<FaBloggerB />
						</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};
export default Footer;
