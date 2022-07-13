import React from "react";

export type PaginationProps = {
  setCurrPage: React.Dispatch<React.SetStateAction<number>>
  pagesArr: number[];
};
