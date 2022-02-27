const handlerReviews=(req, res)=>{

	const reviewId = req.query.id;
if (req.method==="POST"){
	const {email, name, text} =req.body;
	if(!email.includes("@" || !name || name.trim()=== "" || !text || text.trim()==="")){
		res.status(422).json({message:"Invalid input"});
		return;
	}
	// console.log(email, name, text);
	const newReview = {
		id: new Date().toISOString(),
		email, name, text
	}
	// res.status(201).json({message: "Added review"})
	console.log(newReview);
	res.status(201).json({message: newReview})
}
if (req.method==="GET"){
	const dummyList= [
		{id: "r-111", name: "gigi1", text:"some review1"},
		{id: "r-112", name: "gigi2", text:"some review2"},
		{id: "r-113", name: "gigi3", text:"some review3"},
	]
	res.status(200).json({reviews: dummyList})
}
}
export default handlerReviews;
