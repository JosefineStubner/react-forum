import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";


const Post = () => {
  const {id} = useParams();
  const [entry, setEntry] = useState(null)
  const [comment, setComment] = useState(null)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => setEntry(res.data))

    axios.get(`https://jsonplaceholder.typicode.com/comments/`)
    .then(res => setComment(res.data))
  }, [])

  return(
    <>
    <br/><br/>
    <Link to="/">
    <button>Back to home please.</button>
    </Link>

    <div>
      <h1><b>Title of post:</b><br/> {entry?.title}</h1>
      <p><b>Body of post:</b><br/> {entry?.body}</p>

      <div>
      <h2>Kommentarer:</h2>
        {comment && comment.map((user) => {
          if(user.postId == id){
            return (
              <>
              <h3>Namn: {user.name}</h3>
              <h3>E-mail: {user.email}</h3>
              <p>Kommentar: {user.body}</p>
              <h5>ID: #{user.id}</h5>
              </>
            )
          }
        })}
      </div>

    </div>
    
    </>
  )
}

export default Post;