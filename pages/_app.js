import React, {useEffect, useReducer, useState} from "react";
import '../styles/globals.css';
// import {ProductsProvider} from "../context/ProductContext";
// import  {useProductsContext} from "../context/ProductContext";
import {ProductContext} from "../context/ProductContext";
import reducer from "../context/reducer";
import {REMOVE_FROM_CART, ADD_TO_CART} from "../context/actions";
import Header from "../components/UI/Header";
import Layout from "../components/UI/Layout";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import Footer from "../components/UI/Footer";

const phoneApi = 'https://electronis-api.herokuapp.com/api/phones';

function MyApp({Component, pageProps}) {
	const [products, setProducts] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [showSidebar, setShowSidebar] = useState(false);


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
		<Head>
			<title>Ecommerce Store</title>
			<meta name="description" content="Generated by create next app"/>
			<meta name="author" content="Mihai Dornescu"/>
			<meta name="description" content="React js, Next js"/>
			<meta name="keywords" content=" Next js"/>
			<meta name='viewport'
				  content='initial-scale=1, viewport-fit=cover, user-scalable=no'/>
			<link rel="icon" href="/favicon.ico"/>
		</Head>
		<Header countCartItems={cartItems.length}/>


		<Layout>
			<Component {...pageProps} />
			{/*<Footer />*/}
		</Layout>

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
