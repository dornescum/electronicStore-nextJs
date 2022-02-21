import React, {useContext} from 'react';
import {ProductContext} from "../../context/ProductContext";
import Link from 'next/link';

const Index = () => {
	const {onAdd,onRemove, products, cartItems} = useContext(ProductContext);
	// todo change taxes to 0.08
	const taxes = products[0].taxes.shipping_fee;
	const vat =products[0].taxes.vat;


	const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
	const taxPrice = itemsPrice * 0.09;
	// const taxPrice = itemsPrice * taxes;
	const shippingPrice = itemsPrice > 1000 ? 0 : vat;
	const totalPrice = itemsPrice + taxPrice + shippingPrice;


	return (
		<div className='pt-20 flex justify-center items-center'>
			<div className='mt-12 mx-1 md:mx-12 rounded-md bg-stone-100 py-4 px-2 w-full md:w-3/5'>
				<h2 className='my-4 text-2xl font-bold'>Cart Items</h2>
				<div className='' id='cart'>
					{cartItems.length === 0 && <div>Cart is empty</div>}
					{cartItems.map((item) => (
						<div key={item.id} className="row">
							<div className="text-md">{item.title}</div>
							<div className="flex justify-between">
								<div className='py-4'>
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
								<div className="flex justify-center items-center mx-2 text-2xl">
									{item.qty} x {item.price} &euro;
								</div>
							</div>
						</div>
					))}

					{cartItems.length !== 0 && (
						<div className=''>
							<hr></hr>
							<div className="flex justify-between my-4">
								<div className="text-2xl">Items Price</div>
								<div className="text-2xl"> {itemsPrice.toFixed(2)} &euro;</div>
							</div>
							<div className="flex justify-between my-4">
								<div className="text-2xl">Tax Price</div>
								<div className="text-2xl"> {taxPrice.toFixed(2)} &euro;</div>
							</div>
							<div className="flex justify-between my-4">
								<div className="text-2xl">Shipping Price</div>
								<div className={`${shippingPrice ? 'text-red-900 font-bold':"font-bold"}`}>
									{shippingPrice.toFixed(2)} &euro;
								</div>
							</div>

							<div className="flex justify-between my-4">
								<div className="text-2xl">
									<strong>Total Price</strong>
								</div>
								<div className="text-2xl">
									<strong> {totalPrice.toFixed(2)} &euro;</strong>
								</div>
							</div>
							<hr />
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
