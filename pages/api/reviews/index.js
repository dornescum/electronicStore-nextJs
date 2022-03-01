
export default function handler(req, res){
    const comments =[];
    if (req.method ==="GET"){
        res.status(200).json({message:"no comments yet"})
    } else if(req.method === "POST") {
        // const comment = req.body.comment;
        const {comment, name, rating} = req.body;
        const newComment ={
            id: Date.now(),
            text: comment,
            name, rating
        }
        comments.push(comment, name, rating);
        res.status(201).json(newComment)
    }

}