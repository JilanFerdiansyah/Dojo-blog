import React, { useState } from "react";
import {useHistory} from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Naruto");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const bodyHandler = (event) => {
    setBody(event.target.value);

  };
  const authorHandler = (event) => {
    setAuthor(event.target.value);
   
  };

  const submitHandler = (event) => {
      event.preventDefault();
      const blogData ={ title, body, author};

      setIsLoading(true);

      fetch('http://localhost:8000/blogs', {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(blogData),
      }).then(() => {
          console.log('New blog added');
          setIsLoading(false);
        //   history.go(-1);
        history.push('/');
      })
  }


  return (
    <div className="create">
      <h2>Add new blog</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="">Blog Title : </label>
        <input type="text" required value={title} onChange={titleHandler} />
        <label htmlFor="">Blog Body : </label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          required
          value={body}
          onChange={bodyHandler}
        ></textarea>
        <label htmlFor="">Blog Author :</label>
        <select name="" id="" value={author} onChange={authorHandler}>
          <option value="Naruto">Naruto</option>
          <option value="Sasuke">Sasuke</option>
        </select>
        {! isLoading && <button>Add Blog</button>}
        { isLoading && <button disabled>Add Blog</button>}
      </form>
    </div>
  );
};

export default Create;
