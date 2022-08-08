import React, { useState } from "react";
import ErrorModal from "./ErrorModal";

const AddLists = (props) => {
  const [productTitle, setProductTitle] = useState("");
  const [spendPrice, setSpendPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      productTitle.trim().length === 0 ||
      spendPrice.trim().length === 0 ||
      productDescription.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter asking details(non-empty values).",
      });
      return;
    }
    if (parseFloat(props.totalBudget) - parseFloat(spendPrice) <= 0) {
      setError({
        title: "Your Balance is not sufficient.",
        message: "Please add balance in your budgte.",
      });
      return;
    }
    console.log(parseFloat(props.totalBudget) - parseFloat(spendPrice),"Error data..",error);
    props.listAdded(productTitle, spendPrice, productDescription);
    props.addBudgetAmount(spendPrice)
    setProductTitle("");
    setSpendPrice("");
    setProductDescription("");
  };

  const productName = (event) => {
    setProductTitle(event.target.value);
  };

  const price = (event) => {
    setSpendPrice(event.target.value);
  };

  const productDesc = (event) => {
    setProductDescription(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };


  return (
    <>
    {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <h1>Add your purchase List from here....</h1>
      <form onSubmit={addUserHandler}>
        <div class=" mb-3">
          <label class="form-label" htmlFor="purchaseItem">
            Purchase item
          </label>
          {/* <div class="col-sm-10"> */}
            <input
              id="purchaseItem"
              type="text"
              value={productTitle}
              onChange={productName}
            />
          </div>
        {/* </div> */}
        <div class=" mb-3">
          <label class="form-label" htmlFor="price">
            Price
          </label>
          {/* <div class="col-sm-10"> */}
            <input
              id="price"
              type="number"
              value={spendPrice}
              onChange={price}
            />
          </div>
        {/* </div> */}
        <div class=" mb-3">
          <label class="form-label" htmlFor="desc">
            Description
          </label>
          {/* <div class="col-sm-10"> */}
            <textarea
              rows="3"
              id="desc"
              type="text"
              value={productDescription}
              onChange={productDesc}
            />
          </div>
        {/* </div> */}
        <button disabled={props.totalBudget <= 0 ? true : false} type="submit">Add List</button>
      </form>
    </>
  );
};
export default AddLists;
