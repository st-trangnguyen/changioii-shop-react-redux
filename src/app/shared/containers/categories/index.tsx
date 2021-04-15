import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { getListCategories } from "./categories.actions";

export const Categories = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state: any) => state.categories);
  useEffect(() => {
    if (!categories.data) {
      dispatch(getListCategories());
    }
  }, []);

  return(
    <></>
  );
};
