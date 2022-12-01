import React, { useState } from "react";
import "./Homepage.css";
import axios from "axios";

const Homepage = () => {
  const [subs, setSubs] = useState([]);
  const [names, setNames] = useState([]);
  const [ids, setIds] = useState([]);
  const [id, setId] = useState([]);

  // fetch multiple users 
  const fetchDataSub = async () => {
    let { data } = await axios.get("https://youtube-subscribers-backend.vercel.app/subscribers");
    setSubs(data);
    console.log(data);
  };

  // fetch multiple users 
  const fetchDataNames = async () => {
    let { data } = await axios.get("https://youtube-subscribers-backend.vercel.app/subscribers/names");
    setNames(data);
  };

  // fetch single users 
  const fetchDataIds = async () => {
    if(id.length > 0){
      await axios.get(`https://youtube-subscribers-backend.vercel.app/subscribers/${id}`)
      .then(({data})=> setIds(data))
      .catch((err)=>alert("404! Data not found"));
    }else{
      alert("Please Enter ID and Search");
    }
  };

  const showDataSub = () => {
    fetchDataSub();
  };

  const showNames = () => {
    fetchDataNames();
  };

  const showIds = () => {
    fetchDataIds();
  };

  return (
    <div>
      <div className="header px-2 py-3">
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand align-middle" href="/">
              <i className="fa-brands fa-youtube px-1"></i>
              Youtube
            </a>
          </div>
        </nav>
      </div>
      <div className="container text-center text-light">
        <div className="row">
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              onClick={showDataSub}
            >
              All Subscribers Data
            </button>
            {subs.map((item) => (
              <div
                className="card bg-dark m-3 p-1"
                style={{ width: "22rem" }}
                key={item._id}
              >
                <p className="text-success text-start p-2">
                  ID : {item._id}
                  <br />
                  Name : {item.name}
                  <br />
                  Subscribed Channel : {item.subscribedChannel}
                  <br />
                  Subscribed Date : {item.subscribedDate}
                </p>
              </div>
            ))}
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-danger"
              onClick={showNames}
            >
              Subscribers Name & Channel
            </button>
            {names.map((item) => (
              <div
                className="card bg-dark m-3 p-1"
                style={{ width: "19.5rem" }}
                key={item.name}
              >
                <p className="text-success text-start p-2">
                  Name : {item.name}
                  <br />
                  Subscribed Channel : {item.subscribedChannel}
                </p>
              </div>
            ))}
          </div>
          <div className="col">
            <input
              type="text"
              className="mx-2 py-1 rounded"
              placeholder="Enter ID"
              aria-label="id"
              value={id}
              onChange={(event) => setId(event.target.value)}
              style={{heigth:"1rem"}}
            />
            <button type="submit" className="btn btn-warning" onClick={showIds}>
              Search
            </button>
            {ids.map((item) => (
              <div
                className="card bg-dark m-3 p-1"
                style={{ width: "19rem" }}
                key={item.subscribedChannel}
              >
                <p className="text-success text-start p-2">
                  ID : {item._id}
                  <br />
                  Name : {item.name}
                  <br />
                  Subscribed Channel : {item.subscribedChannel}
                  <br />
                  Subscribed Date : {item.subscribedDate}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
