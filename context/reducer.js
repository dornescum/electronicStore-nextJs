const reducer =(state, action)=>{
	if(action.type === "ADD_TO_CART"){
		console.log(action.type);
		return {...state, item: 1}
	}
	console.log(state);
	return state
}
export default reducer;
