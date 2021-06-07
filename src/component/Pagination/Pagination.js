import React, { useState, useEffect } from "react";

import "./Pagination.css";

// <a class="active" href="#">2</a>
const Pagination = ({pages}) => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    let arr = [];
    arr.push(<a className="active" key="1" href="#">1</a>);
    for (let index = 2; index < pages + 1; index++) {
      arr.push(<a key={index} href="#">{index}</a>);
    }
    setLinks(arr);
  }, [pages])

  return (
    <div className="Pagination">
      <a href="#">&laquo;</a>
      {links}
      <a href="#">&raquo;</a>
    </div>
  )
}

export default Pagination;