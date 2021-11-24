import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);

        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <h1>
        <div>{post.title}</div>
      </h1>
      {/* <ul>
        {posts.map((posts) => (
          <h3>
            <li key={posts.id}>
              <br /> {posts.title}
            </li>
          </h3>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching;
