import React from "react";

const TableofList = (props) => {
  console.log("TableofList..", props.lists);
  return (
    <>
      {props.lists?.length > 0 && (
        <table class="table table-primary table-striped">
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {props.lists.map((list, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{list.product}</td>
                  <td>₹{list.price}</td>
                  <td>{list.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};
export default TableofList;
