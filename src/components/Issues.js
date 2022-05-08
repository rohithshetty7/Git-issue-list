import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Issues(props) {
  // console.log(props);
  const params = useParams();
  console.log(params);

  const [post, setpost] = useState({});
  console.log(post);
  const fetchDetails = async () => {
    const url = `https://api.github.com/repos/facebook/create-react-app/issues`;
    try {
      const res = await axios.get(url);
      setpost(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return <div>Issues</div>;
}

export default Issues;
