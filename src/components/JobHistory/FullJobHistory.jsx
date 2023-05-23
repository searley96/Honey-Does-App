import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

function showJobs({ job_status }) {
  if (
    job_status === "active" ||
    job_status === "approved" ||
    job_status === "request" ||
    job_status === "submitted"
  ) {
    toggleActiveJobs();
  } else if (
    job_status === "completed" ||
    job_status === "cancelled" ||
    job_status === "rejected"
  ) {
    togglePastJobs();
  }

  function FullJobHistory() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const [showFullDescription, setShowDescription] = useState(true);
    const clientJobsData = useSelector((store) => store.clientJobsReducer);
    const user = useSelector((store) => store.user);

    const getAllJobs = () => {
      dispatch({
        type: "FETCH_CLIENT_JOB",
        payload: Number(user.id),
      });
    };

    useEffect(() => {
      getAllJobs();
    }, []);
  }
}
export default FullJobHistory;
