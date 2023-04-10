import { comments } from "../../../../data/comments";

const handler = async ( req, res ) => { 

    if(req.method === 'GET'){
        res.status(200).json(comments);
    }else if(req.method === 'POST'){
        const comment = await req.body.comment;

        const newComment = {
            id :  Date.now(),
            text : comment
        }

        comments.push(newComment);
        res.status(201).json(newComment)
    }
}

export default handler;
