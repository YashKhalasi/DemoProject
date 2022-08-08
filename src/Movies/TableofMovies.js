import React from "react";

const TableofMovies = (props) => {
  console.log("TableofList..", props.lists);
  return (
    <>
      {props.lists.length > 0 && (
        <table class="table table-primary table-striped">
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Movie Name</th>
              <th scope="col">Release Date</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {props.lists.map((list, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{list.title}</td>
                  <td>{list.releaseDate || list.release_date}</td>
                  <td>{list.openingText || list.opening_crawl}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};
export default TableofMovies;
