import React from "react";

const Records = ({ data }) => {
  return (
    <table className="table" border='1'>
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Tel</th>
          <th scope="col">Address</th>
          <th scope="col">City</th>
          <th scope="col">State</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item,i) => (
          <tr key ={i}>
            <td>{item.fname} </td>
            <td>{item.lname} </td>
            <td>{item.tel} </td>
            <td>{item.address} </td>
            <td>{item.city} </td>
            <td>{item.state} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Records;
