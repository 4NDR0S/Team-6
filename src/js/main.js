import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductListing.mjs";

const dataSource = new ProductData("tents");
const element = document.querySelector('.productList');
const listing = new ProductListing('tent',dataSource,element)

