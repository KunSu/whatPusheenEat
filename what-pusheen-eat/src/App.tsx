import React from "react";
import image from "./images/1.png"; // Tell webpack this JS file uses this image
import "./App.css";
import AlertDialog from "./AlertDialog";

function App() {
  const foodlisttest = ["肉酱意粉", "干炒牛河", "椒盐鸡翅", "海南鸡饭","肉骨茶","Chipotle","Subway","In n Out","日式咖喱","拉面","干锅","Pizza","Pho","炸鸡"];
  const restlisttest = ["Cheesecake Factory", "Chipotle", "Subway", "In n Out"];
  const cuisinelisttest = ["japanese", "Burger/Bread", "茶餐厅", "Thai","早茶","Korean","川辣菜"];
  return (
    <div className="App">
      <h1>What Pusheen Eats</h1>
      <img
        src={image}
        // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt="pusheen"
      />
      <p>Click to feed the hungry pusheen</p>

      {AlertDialog("get specific food", foodlisttest)}
      <br></br>
      {AlertDialog("get Restaurant Idea", restlisttest)}
      <br></br>
      {AlertDialog("get Cuisine Think", cuisinelisttest)}
    </div>
  );
}

export default App;
