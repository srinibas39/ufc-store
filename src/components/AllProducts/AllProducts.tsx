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

export const AllProducts = ({ allProducts }: AllProductProps) => {
  const { mode } = useMode();
  const { error } = useProduct();
  const { state } = useFilter();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (error) {
      handleToastError(error);
    }
  }, [error]);

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
    if (state.stars !== null) {
      return sortedData.filter((el) => el.rating === state.stars);
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

  const [currPage, setCurrPage] = useState(1);

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
        <h1 style={{ margin: "1rem" }}>
          Showing all products
          <small className="lighter">
            (showing {rangeData && rangeData.length} products)
          </small>
        </h1>
        <div className="all-products-div">
          {pageData &&
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
            })}
        </div>
        <Pagination setCurrPage={setCurrPage} pagesArr={pagesArr} />
      </div>

      <ToastContainer />
    </>
  );
};
