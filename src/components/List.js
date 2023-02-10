import React, { useEffect, useState } from "react";
import axios from "axios";
import "./List.css";
import { Link } from "react-router-dom";

function List() {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((res) => setData(res.data));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="content">
      <ul className="list-data">
        {data.map((item, index) => (
          <li key={index}>
            <div className="list">
              <h1>{item.username}</h1>
              <h1>{item.email}</h1>
              <h1>{item.name.firstname}</h1>
              <h1>{item.name.lastname}</h1>
              <button className="btn">Update Form</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
