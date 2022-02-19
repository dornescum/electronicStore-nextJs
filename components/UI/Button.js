import React from 'react';

const Button = (props) => {
	return (
		<div>
			<button   className={`rounded-sm bg-white text-gray-600 border border-gray-600 
			text-md hover:bg-black hover:text-white hover:shadow-2xl 
			transition ease-out shadow-md px-8 py-1	w-full `}
					  onClick={props.onClick}>
				{props.children}
			</button>
		</div>
	);
};

export default Button;
