import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaBloggerB } from 'react-icons/fa';


const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<div className='absolute bottom-0 left-0 bg-stone-50 w-full'>
			<ul className='flex py-2 pl-4'>
				<li className='p-1 '> © {year}</li>
				<li className="p-1 flex items-center">
					<a href="https://github.com/dornescum" rel="noopener" target="_blank">
						<AiFillGithub />
					</a>
				</li>
				<li className="p-1 flex items-center">
					<a href="https://www.linkedin.com/in/mihai-dornescu-21b35a94/" rel="noopener" target="_blank">
						<AiFillLinkedin />
					</a>
				</li>
				<li className="p-1 flex items-center">
					<a href="https://dornescu.ro/" itemProp="author" rel="noopener" target="_blank">
						<FaBloggerB />
					</a>
				</li>
			</ul>
		</div>
	);
};
export default Footer;
