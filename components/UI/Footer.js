import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaBloggerB } from 'react-icons/fa';
import Link from "next/link";


const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<div className='bg-stone-50 w-full pl-60'>
			<ul className='flex py-2 pl-4'>
				<li className='p-1 '> © {year}</li>
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
