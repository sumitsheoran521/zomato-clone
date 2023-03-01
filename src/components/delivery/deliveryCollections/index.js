import React from "react";
import Slider from "react-slick";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import "./deliveryCollections.css";
import DeliveryItem from "./deliveryItem";

const deliveryItems = [
  {
    id: 1,
    title: "Pizza",
    cover:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emElMjB0b3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    title: "Burger",
    cover:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    title: "Biryani",
    cover:
      "https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmlyeWFuaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    title: "Rolls",
    cover:
      "https://images.unsplash.com/photo-1562059390-a761a084768e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHdyYXBzJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    title: "Chicken",
    cover:
      "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaWNrZW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    title: "Thali",
    cover:
      "https://images.unsplash.com/photo-1576846806147-8065a16f89b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGhhbGklMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 7,
    title: "Paneer",
    cover:
      "https://images.unsplash.com/photo-1631452180539-96aca7d48617?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 8,
    title: "Cake",
    cover:
      "https://images.unsplash.com/photo-1668887461930-44237b5eb558?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGNha2UlMjB3aGl0ZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 9,
    title: "Noodles",
    cover:
      "https://images.unsplash.com/photo-1626075166666-e8b5e079dc0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG5vb2RsZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 10,
    title: "Fried Rice",
    cover:
      "https://images.unsplash.com/photo-1626266798999-aa2b0c520cc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyaWVkJTIwcmljZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 11,
    title: "Ice Cream",
    cover:
      "https://images.unsplash.com/photo-1602296751259-edfb8274b682?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGljZSUyMGNyZWFtfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 12,
    title: "Shake",
    cover:
      "https://images.unsplash.com/photo-1645516957558-c165fd13be62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNoYWtlJTIwZHJpbmt8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const DeliveryCollections = () => {
  return (
    <div className="delivery-collection">
      <div className="max-width">
        <div className="collection-title">Eat what makes you happy</div>
        <Slider {...settings}>
          {deliveryItems.map((item) => {
            return <DeliveryItem item={item} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default DeliveryCollections;
