import React from "react";
import Slider from "react-slick";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import "./topBrands.css";

const topBrandList = [
  {
    id: 1,
    time: "27 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png",
  },
  {
    id: 2,
    time: "40 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/72093a8b7046c690006fab2a9e269bde_1630661078.png",
  },
  {
    id: 3,
    time: "35 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/cdcfec38a53a7edd76e282bee953e44f_1664867311.png",
  },
  {
    id: 4,
    time: "23 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/2f03f8299adfedcc5b038433b948e11a_1584120081.png",
  },
  {
    id: 5,
    time: "26 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/05142cf68ce04384bb185659e1bfe450_1625160307.png",
  },
  {
    id: 6,
    time: "27 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/49d76f93284031e7c08bfa3a64c18a17_1589177216.png",
  },
  {
    id: 7,
    time: "20 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471786.png",
  },
  {
    id: 8,
    time: "41 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/3a58b67479fd290ff96996002438736e_1672389206.png",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const TopBrands = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {topBrandList.map((brand) => {
          return (
            <div className="top-brands-cover">
              <img
                src={brand.cover}
                alt={brand.time}
                className="top-brands-image"
              />
            </div>
            
          );
        })}
      </Slider>
    </div>
  );
};

export default TopBrands;
