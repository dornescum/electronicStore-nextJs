import React from 'react';

const Button = (props) => {
	return (
		<div>
			<button   className={`rounded bg-gray-300 text-white text-md hover:bg-gray-500 hover:shadow-2xl 
			transition ease-out shadow-md px-8 py-1	w-full `}
					  onClick={props.onClick}>
				{props.children}
			</button>
		</div>
	);
};

export default Button;
