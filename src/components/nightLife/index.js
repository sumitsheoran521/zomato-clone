import React from "react";
import { nightLife } from "../../data/nightLife";
import Collection from "../common/collection";
import ExploreSection from "../common/exploreSection";
import Filters from "../common/filters";
import "./nightLife.css";

const nightFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Pro Offers",
    icon: <i className="fi fi-rr-angle-down absolute-center"></i>,
  },
  {
    id: 3,
    title: "Distance",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 4,
    title: "Pubs & Bars",
  },
];

const collectionList = [
  {
    id: 1,
    title: "11 Romantic Dining Places",
    cover:
      "https://b.zmtcdn.com/data/collections/22e92920ef5452cf4d4b9e1f8309da1f_1674824128.jpg?output-format=webp",
    places: "11 Places",
  },
  {
    id: 2,
    title: "16 Best Insta-worthy Places",
    cover:
      "https://b.zmtcdn.com/data/collections/072ec5cf5c95503ab503edcc099f6add_1675252747.jpg?output-format=webp",
    places: "16 Places",
  },
  {
    id: 3,
    title: "16 Serene Rooftop Places",
    cover:
      "https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1674823998.jpg?output-format=webp",
    places: "16 Places",
  },
  {
    id: 4,
    title: "16 Newly Opened Restaurants",
    cover:
      "https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674824266.jpg?output-format=webp",
    places: "16 Places",
  },
  {
    id: 5,
    title: "15 Lit Party Places",
    cover:
      "https://b.zmtcdn.com/data/collections/d6c20926317f6753461c59af08d566f1_1674824942.jpg?output-format=webp",
    places: "15 Places",
  },
  {
    id: 6,
    title: "10 Trending Restaurants",
    cover:
      "https://b.zmtcdn.com/data/collections/edd5abbddd239a8cfb8099c63b1baaf0_1675247359.jpg?output-format=webp",
    places: "10 Places",
  },
  {
    id: 7,
    title: "16 Best Luxury Dining Places",
    cover:
      "https://b.zmtcdn.com/data/collections/1b191329f2c37a474c428131841d488b_1674826227.jpg?output-format=webp",
    places: "16 Places",
  },
  {
    id: 8,
    title: "6 Unique Dining Experiences",
    cover:
      "https://b.zmtcdn.com/data/collections/b90a3bc172dab4f5befb3389950ffcab_1674824072.jpg?output-format=webp",
    places: "6 Places",
  },
];
const nightList = nightLife;

const Nightlife = () => {
  return (
    <div>
      <Collection list={collectionList}></Collection>
      <div className="max-width">
        <Filters filterList={nightFilters}></Filters>
      </div>
      <ExploreSection
        list={nightList}
        collectionName="Nightlife Restaurants in Jaipur"
      ></ExploreSection>
    </div>
  );
};

export default Nightlife;
