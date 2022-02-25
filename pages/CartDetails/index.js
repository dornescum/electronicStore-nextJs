import React, {useContext} from 'react';
import {ProductContext} from "../../context/ProductContext";
import Link from 'next/link';

const Index = () => {
	const {onAdd, onRemove, products, cartItems} = useContext(ProductContext);
	// todo add discount over 2000
	const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
	const taxPrice = itemsPrice * 0.09;
	const shippingPrice = itemsPrice > 1000 ? 0 : 20;
	const totalPrice = itemsPrice + taxPrice + shippingPrice;


	return (
		<div className="pt-20 flex justify-center items-center">

			<div className="mt-12 mx-1 md:mx-12 rounded-md bg-stone-100 py-4 px-2 w-full md:w-3/5">
				<h2 className="my-4 text-2xl font-bold">Cart Items</h2>
				<div className="" id="cart">
					{cartItems.length === 0 && <div>Cart is empty</div>}
					{cartItems.map((item) => (
						<div key={item.id} className="flex justify-between flex-col md:flex-row">

							<div className="flex md:justify-center md:items-center">

								<span className="text-lg pl-1 md:pl-2  w-48 flex justify-start items-center md:justify-start ">{item.title}</span>
								<div className="py-2 pl-8 md:py-4 flex flex-row">
									<button onClick={() => onRemove(item)} className="bg-slate-100
													 px-2 py-1 hover:bg-gray-300 hover:shadow-2xl
									transition ease-out shadow-md mx-4 rounded-sm">
										-
									</button>
									<button onClick={() => onAdd(item)} className="bg-slate-100
													 px-2 py-1 hover:bg-gray-300 hover:shadow-2xl
									transition ease-out shadow-md mx-4 rounded-sm">
										+
									</button>
								</div>
							</div>
							<div className="flex justify-end items-center md:justify-center md:items-center">
								<div className="flex justify-start items-start md:justify-center md:items-center my-2 mx-2 text-lg">
									{item.qty} x {item.price} &euro;</div>
							</div>

							{/*				<div className="text-md">{item.title}</div>*/}
							{/*				<div className="flex justify-between">*/}
							{/*					/!*<div className="text-md">{item.title}</div>*!/*/}
							{/*					<div className='py-4'>*/}
							{/*						<button onClick={() => onRemove(item)} className="bg-slate-100*/}
							{/*				 px-2 py-1 hover:bg-gray-300 hover:shadow-2xl*/}
							{/*transition ease-out shadow-md mx-4 rounded-sm">*/}
							{/*							-*/}
							{/*						</button>*/}
							{/*						<button onClick={() => onAdd(item)} className="bg-slate-100*/}
							{/*				 px-2 py-1 hover:bg-gray-300 hover:shadow-2xl*/}
							{/*transition ease-out shadow-md mx-4 rounded-sm">*/}
							{/*							+*/}
							{/*						</button>*/}
							{/*					</div>*/}
							{/*					<div className="flex justify-center items-center mx-2 text-2xl">*/}
							{/*						{item.qty} x {item.price} &euro;*/}
							{/*					</div>*/}
							{/*				</div>*/}
						</div>
					))}

					{cartItems.length !== 0 && (
						<div className="">
							<hr></hr>
							<div className="flex justify-between my-4">
								<div className="text-lg">Items Price</div>
								<div className="text-lg"> {itemsPrice.toFixed(2)} &euro;</div>
							</div>
							<div className="flex justify-between my-4">
								<div className="text-lg">Tax Price</div>
								<div className="text-lg"> {taxPrice.toFixed(2)} &euro;</div>
							</div>
							<div className="flex justify-between my-4">
								<div className="text-lg">Shipping Price</div>
								<div className={`${shippingPrice ? 'text-red-900 font-bold' : "font-bold"}`}>
									{shippingPrice.toFixed(2)} &euro;
								</div>
							</div>


							<div className="flex justify-between my-4">
								<div className="text-lg">
									<strong>Total Price</strong>
								</div>
								<div className="text-lg">
									<strong> {totalPrice.toFixed(2)} &euro;</strong>
								</div>
							</div>
							<hr/>
							<div className="row py-4">
								<Link href="/SignIn" className="cursor-pointer"> Checkout</Link>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);


};

export default Index;
