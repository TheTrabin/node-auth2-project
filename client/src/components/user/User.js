import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useParams, useHistory } from "react-router-dom";
import UserCards from "./IssueCards";
import '../App.css';


function Issue(props) {
    const { push } = useHistory();
    const [issue, setIssue] = useState();
    const [post, setPost] = useState();
    const [issue_id, setIssue_id] = useState();
    console.log("props: ", props);
    const params = useParams();


  const fetchIssue = () => {
  
axiosWithAuth()
.get(`/api/users/${props.id}`)
      .then(res => {
        console.log("User.js info: ", res.data)
        setIssue(res.data)
      console.log("User.js info: ", res.data)
      }      )
      .catch(err => console.log(err.response));
  };

  
  const getNewList = () => {
    axiosWithAuth()
      .get("users")
      .then(res => 
        props.setIssueList(res.data)
        )
      .catch(err => console.log(err.response));
  };

  const handleDelete = e => {
    e.preventDefault();
    // axiosWithAuth()

    //   .delete(`Issue/${params.id}`)
    axios(delconfig)
      .then(function (response) {
        console.log(JSON.stringify(response.data));})
        
      
      .then(res => {
        console.log("delete", res.data);
        getNewList();
        push(`/dashboard`);})
        
     
      .catch(err =>
        console.error("Issue.js: handleDelete: err: ", err.message, err.response)
      );
  };


  if (!props.post) {
    return <div>Loading issue information...</div>;
  }

  return (
    <div className="save-wrapper">
       <IssueCards {...props} post={props} />
      
      <button
        className="md-button"
        onClick={() => push(`/update-issue/${props.id}`)}
      >
        Edit
      </button>
      <button onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Issue;