import React from "react";
import { useParams } from "react-router-dom";
import { productData } from "../content/files/dummyData";

const MarketplaceDetail = () => {
  const { id } = useParams();
  const thisProduct = productData.find((prod) => prod.id === id);
  return <>{thisProduct.name}</>;
};

export default MarketplaceDetail;
