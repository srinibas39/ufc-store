import { useNavigate } from "react-router-dom";
import { useFilter } from "../../context/FilterContext/FilterContext";
import { AddToCartButton } from "../AddToCartButton/AddToCartButton";
import { AddToWishList } from "../AddToWishList/AddToWishList";
import { useEffect, useState } from "react";
import { Pagination } from "../Pagination/Pagination";
import { AllProductProps } from "./AllProducts.types";
import { allProductType } from "../../context/ProductContext/ProductContext.types";
import { useMode } from "../../context/ModeContext/ModeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useProduct } from "../../context/ProductContext/ProductContext";
import { handleToastError } from "../../utils/ToastUtils";
// @ts-ignore
import { ReactComponent as ProductNotFound } from "../../images/noitems.svg";

export const AllProducts = ({ allProducts }: AllProductProps) => {
  const { mode } = useMode();
  const { error,currPage,setCurrPage } = useProduct();
  const { state } = useFilter();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (error) {
      handleToastError(error);
    }
  }, [error]);

  useEffect(() => {
    window.scrollTo(0,500);
  }, [currPage]);
  

  const discountPrice = (price: string, discount: string) => {
    const newD = Number(discount.split("%")[0]);
    const nPrice = Number(price) * (newD / 100);
    return Number(nPrice) + Number(price);
  };

  const getCategoryData = () => {
    if (state.filterCategory.length !== 0) {
      const newProducts = allProducts.filter((el) => {
        if (state.filterCategory.includes(el.categoryName)) {
          return el;
        }
      });
      return newProducts;
    } else {
      return allProducts;
    }
  };

  const categoryData = getCategoryData();

  const getSortedData = () => {
    if (state.sort === "LOW_TO_HIGH") {
      return categoryData.sort(
        (a: allProductType, b: allProductType) =>
          Number(a.price) - Number(b.price)
      );
    }
    if (state.sort === "HIGH_TO_LOW") {
      return categoryData.sort(
        (a: allProductType, b: allProductType) =>
          Number(b.price) - Number(a.price)
      );
    }
    return categoryData;
  };
  const sortedData = getSortedData();

  const getStarData = () => {
    const starNumber = state.stars?.split(" ")[0];
    if (state.stars !== null) {
      return sortedData.filter((el) => Number(el.rating) >= Number(starNumber));
    }
    return sortedData;
  };
  const starData = getStarData();

  const getRangeData = () => {
    if (state.range !== null) {
      return starData.filter((el) => Number(el.price) <= Number(state.range));
    }
    return starData;
  };
  const rangeData = getRangeData();

  // Implementation of pagination.
  let pagesArr = [];
  let limit = 10;

  let noOfPages = rangeData.length / limit;

  for (let i = 1; i <= noOfPages; i++) {
    pagesArr.push(i);
  }

  let si = (currPage - 1) * limit;
  let ei = si + limit;

  const getPageData = () => {
    return rangeData.slice(si, ei);
  };
  const pageData = getPageData();

  return (
    <>
      <div className="all-products" id={mode ? `dark` : ""}>
        {rangeData.length && (
          <h1 style={{ margin: "1rem" }}>
            Showing all products
            <small className="lighter">
              (showing {rangeData.length} products)
            </small>
          </h1>
        )}

        <div className="all-products-div">
          {pageData.length ? (
            pageData.map((el, idx) => {
              return (
                <div key={idx} className="item-container">
                  <div className="item-img">
                    <img src={el.image} alt="loading" />
                    <AddToWishList el={el} />
                  </div>
                  <div className="item-list">
                    <p>{el.title}</p>
                    <div className="price">
                      <h2 style={{ marginRight: "1rem" }}>
                        &#8377; {el.price}
                      </h2>
                      <h3>
                        <del>
                          &#8377; {discountPrice(el.price, el.discount)}
                        </del>
                      </h3>
                    </div>
                    <h4>{el.discount}</h4>
                    <div className="item-buttons">
                      <button
                        className="background"
                        onClick={() => navigate(`/preview/${el._id}`)}
                      >
                        PREVIEW
                      </button>
                      <AddToCartButton el={el} />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="no-items">
              <p>No products found</p>
              <ProductNotFound />
            </div>
          )}
        </div>
        <Pagination setCurrPage={setCurrPage} pagesArr={pagesArr} />
      </div>

      <ToastContainer />
    </>
  );
};
