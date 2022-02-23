import React from 'react';

const Layout = ({children}) => {
	return (
		<div className='pt-16 m-1 md:pt-20 relative overflow-hidden'>
			{children}
		</div>
	);
};

export default Layout;
