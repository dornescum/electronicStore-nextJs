import React from 'react';

const PhoneId = ({itemId}) => {
	console.log(itemId);
		const title = itemId.message.title;
		const price = itemId.message.price;
		const id = itemId.message.id;
		const desc = itemId.message.description;
		const subtitle = itemId.message.subtitle;
	return (
		<div className='flex flex-col md:flex-row pt-20'>
			<div className='basis-1/2'>
				<div className='flex flex-col justify-around bg-slate-50 w-full md:w-80 md:ml-2 lg:w-64  items-center
		rounded-md shadow-md  h-96 md:h-80 lg:h-96 drop-shadow-md hover:drop-shadow-2xl ease-in duration-300'>
					{title}
					{/*{price}*/}
					{/*{id}*/}
				</div>
			</div>
			<div className='basis-1/2'>

				<div className='bg-zinc-200'>
					{price} br
					{id} <br/>
					{desc} <br/>
					{subtitle}
				</div>
			</div>

		</div>
	);
};

	export default PhoneId;

export async function getServerSideProps(context) {
	const res = await fetch(`https://electronis-api.herokuapp.com/api/phones/${context.params.id}`);
	console.log(res);
	const itemId = await res.json();

	return {
		props: {
			itemId
		}
	};
}
