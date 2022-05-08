import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

function Fetch(props) {
  const navigate=useNavigate()
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);



  const fetchData = async () => {
    try {
      let res = await axios.get(
        "https://api.github.com/repos/facebook/create-react-app/issues"
      );

      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  let issueId = "Empty";
  const DisplayIssue = (id) => {
    issueId = id;
    console.log(issueId);

    navigate(`/issues/${issueId}`)
  };
  return (
    <div>
      <table class=" container table m-5 border primary">
        <thead class="thead-dark"></thead>
        <tbody>
          <tr>
            {data.map((issue, id) => {
              return (
                <div key={issue.id} onClick={() => DisplayIssue(issue.id)}>
                  <div>
                    {issue.title  } <br />
                    {issue.id} <br />
                    {`Update date ${issue.updated_at}`} <br/>
                    {`User Detail- login ${issue.user.login} id-${issue.user.id} `}
                  </div>
                </div>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Fetch;
