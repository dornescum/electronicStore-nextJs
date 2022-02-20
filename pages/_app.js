import React, {useEffect, useReducer, useState} from "react";
import '../styles/globals.css';
// import {ProductsProvider} from "../context/ProductContext";
// import  {useProductsContext} from "../context/ProductContext";
import {ProductContext} from "../context/ProductContext";
import reducer from "../context/reducer";
import {REMOVE_FROM_CART, ADD_TO_CART} from "../context/actions";
import Header from "../components/UI/Header";

const phoneApi = 'https://electronis-api.herokuapp.com/api/phones';

function MyApp({Component, pageProps}) {
	const [products, setProducts] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [showSidebar, setShowSidebar] = useState(false);


	useEffect(() => {
		const getData = async () => {
			const res = await fetch(phoneApi);
			const data = await res.json();
			setProducts(data);
		};
		getData();
	}, []);

	const onAdd = (product) => {
		const exist = cartItems.find((x) => x.id === product.id);
		if (exist) {
			setCartItems(
				cartItems.map((x) =>
					x.id === product.id ? {...exist, qty: exist.qty + 1} : x
				)
			);
		} else {
			setCartItems([...cartItems, {...product, qty: 1}]);
		}
	};
	const onRemove = (product) => {
		const exist = cartItems.find((x) => x.id === product.id);
		if (exist.qty === 1) {
			setCartItems(cartItems.filter((x) => x.id !== product.id));
		} else {
			setCartItems(
				cartItems.map((x) =>
					x.id === product.id ? {...exist, qty: exist.qty - 1} : x
				)
			);
		}
	};


	return <ProductContext.Provider value={{products, cartItems, onAdd, onRemove, showSidebar, setShowSidebar}}>
		<Header countCartItems={cartItems.length}/>
		<Component {...pageProps} />
	</ProductContext.Provider>;
}

export default MyApp;


// const [products, setProducts]=useState([]);
// console.log(products);
//
// const initialState = {
// 	cart: [],
// 	total_items: 0,
// 	total_amount: 0,
// 	shipping_fee: 542
// };
// const [state, dispatch] = useReducer(reducer, initialState);
//
// const addToCart = (id, amount, product) => {
// 	dispatch({
// 		type: ADD_TO_CART,
// 		payload:{
// 			id, amount, product
// 		}
// 	});
// };
// const removeToCart = () => {
// };
// const fetchInfo = async (url) => {
// 	const res = await fetch(url);
// 	const data = await res.json();
// 	setProducts(data)
// };
//
// useEffect(() => {
// 	// addToCart()
// 	fetchInfo(phoneApi);
// }, []);
