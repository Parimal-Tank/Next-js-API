import axios from 'axios';
import React, { useState } from 'react'

const index = () => {

    // For Data Fetch
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ comments , setComments] = useState([]);

    // For Add Comments
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ comment , setComment ] = useState('');
   
    const fetchData = async () => { 
        const result = await axios('http://localhost:3000/api/comments/');
        setComments(result.data);
    } 

    const submitComments  = async () => {
       const response = await axios('http://localhost:3000/api/comments' , { 
          method : 'POST',
          data : { comment },
          headers  : {
             'Content-Type' : 'application/json'
          },
       });
    }

    const deleteComment = async ( commentId ) => { 
        const response = axios(`http://localhost:3000/api/comments/${commentId}` , {
           method : 'DELETE'
        })

        fetchData()
    }

  return (
    <div>

         <input type='text' value={comment} onChange={e =>  setComment(e.target.value)}  ></input>
         <button onClick={submitComments} >Submit Comments</button>


         <button onClick={fetchData}>Load Data</button>
         {
            comments.map((result) => { 
                return(
                    <div key={result.id}>
                       { result.id} {result.text}
                       <button  onClick={() => deleteComment(result.id)} >Delete Comment</button>
                    </div>
                )
            })
         }
    </div>
  )
}

export default index
