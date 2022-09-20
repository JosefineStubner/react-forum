import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/`)
      .then(res => setPosts(res.data))
  }, [])

  return (
    <>
    <h2>React Forum</h2>

      {posts ? posts.map((post, i) => {
        return(
          <div id={post.id} key={i}>
          {<Link to={`/post/${post.id}`} state={post}>
          <h2>{post.title}</h2>
          </Link>}
          </div>
        ) 
      }) : <h3>...loading</h3>}
    </>
  )
}

export default Home;