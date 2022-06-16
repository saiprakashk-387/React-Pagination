import React, { useState, useEffect } from "react";
import axios from "axios";
import Records from "./Records";
import Tablepagination from "./Tablepagination";

const Table = () => {
  // To hold the actual data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);

  useEffect(() => {
    axios
      .get(
        "http://www.filltext.com/?rows=50&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => {
        alert("There was an error while retrieving the data");
      });
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage; 
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage; 
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  return (
    <div>
      <h4>React Pagination -Filltext</h4>
      <Records data={currentRecords} />
      <Tablepagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Table;
