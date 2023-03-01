import React from "react";
import { diningOut } from "../../data/diningOut";
import Collection from "../common/collection";
import Filters from "../common/filters";
import ExploreSection from "../common/exploreSection";
import "./diningOut.css";

const collectionList = [
  {
    id: 1,
    title: "8 Great Buffets",
    cover:
      "https://b.zmtcdn.com/data/collections/038023025a7859881a3fa3b3b1c93416_1675240197.jpg",
    places: "8 Places",
  },
  {
    id: 2,
    title: "9 Places for Royal Dining",
    cover:
      "https://b.zmtcdn.com/data/collections/41be2951a517fc563297a65c4ad8f7a6_1675243777.jpg",
    places: "9 Places",
  },
  {
    id: 3,
    title: "16 Best Insta-worthy Places",
    cover:
      "https://b.zmtcdn.com/data/collections/072ec5cf5c95503ab503edcc099f6add_1675252827.jpg",
    places: "17 Places",
  },
  {
    id: 4,
    title: "17 Serene Rooftop Places",
    cover:
      "https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1675239897.jpg",
    places: "17 Places",
  },
  {
    id: 5,
    title: "16 Best Bars & Pubs",
    cover:
      "https://b.zmtcdn.com/data/collections/f141889a9c1564098ee6a9763a941d78_1675239778.jpg",
    places: "16 Places",
  },
  {
    id: 6,
    title: "8 Must-visit Legendary Places",
    cover:
      "https://b.zmtcdn.com/data/collections/706d897c97831fde7a470ab77e79808c_1675238991.jpg",
    places: "8 Places",
  },
  {
    id: 7,
    title: "6 Places for Bingeworthy Desserts",
    cover:
      "https://b.zmtcdn.com/data/collections/9a932395c725325ce63064700ef43b29_1675240012.jpg",
    places: "6 Places",
  },
  {
    id: 8,
    title: "6 Places for Authentic Laal Maas",
    cover:
      "https://b.zmtcdn.com/data/collections/70ec787f35051e28cf120e6d92379a1d_1675242329.jpg",
    places: "6 Places",
  },
];

const diningFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const diningList = diningOut;

const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterList={diningFilters}></Filters>
      </div>
      <ExploreSection list={diningList} collectionName="Dine-Out Restaurants in Jaipur"></ExploreSection>
    </div>
  );
};

export default DiningOut;
