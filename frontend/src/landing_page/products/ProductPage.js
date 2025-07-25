import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imgSrc="media/images/kite.png"
        header="Kite"
        paragraph="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        link1="/dff"
        link2="/vjvjr"
        link3="/vdkls"
        link4="/hcbv"
        link1Text="Try demo →"
        link2Text="Learn more→"
      />
      <RightSection 
      imgSrc="media/images/console.png"
        header="Console"
        paragraph="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        link1="/dff"
        link2=""
        link1Text="Learn more →"
        link2Text=""
      />
      <LeftSection
        imgSrc="media/images/coin.png"
        header="Coin"
        paragraph="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        link1="/dff"
        link2=""
        link3="/vdkls"
        link4="/hcbv"
        link1Text="Coin  →"
        link2Text=""
      />
      <RightSection 
      imgSrc="media/images/kiteconnect.png"
        header="Kite Connect API"
        paragraph="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase"
        link1="/dff"
        link2=""
        link1Text="Kite Connect →"
        link2Text=""
      />
      <LeftSection
        imgSrc="media/images/varsity.png"
        header="Varsity mobile"
        paragraph="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        link1=""
        link2=""
        link3="/vdkls"
        link4="/hcbv"
        link1Text=""
        link2Text=""
      />
      <Universe />
    </>
  );
}

export default ProductPage;
