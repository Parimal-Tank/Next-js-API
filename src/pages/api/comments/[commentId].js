import { comments } from "../../../../data/comments";

const handler = ( req, res ) => { 

    const { commentId } =  req.query;
    if(req.method === 'GET'){

        const comment = comments.find( (c) => c.id === parseInt(commentId));
        res.status(200).json(comment);
    } else if( req.method === 'DELETE'){

        // Find The Value Of Id
        const deleteComment = comments.find( (comment) => comment.id ===  parseInt(commentId));
        
        // Find Index Of The Value
        const index = comments.findIndex( (c) => c.id === parseInt(commentId));

       // Delete the Comment 
        comments.splice(index , 1);

        // Response State
        res.status(200).json(deleteComment);
    }

}

export default handler;