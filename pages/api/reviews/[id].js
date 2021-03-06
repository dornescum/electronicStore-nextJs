import {reviews} from '../../../data/reviews';

export default function handler(req, res){

    if (req.method ==="GET"){
        res.status(200).json(reviews)
    } else if(req.method === "POST") {
        // const comment = req.body.comment;
        const {comment, name, rating} = req.body;
        const newReview ={
            id: Date.now(),
            comment, name, rating
        }
        reviews.push(newReview);
        res.status(201).json(newReview)
    }

}

