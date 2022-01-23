import React from "react";
import styled from "styled-components";
import Section from "./Section";
import Fade from "react-reveal/Fade";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="Model-S.jpg"
        lftBtnTxt="custom order"
        rghtBtnTxt="existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="Model-y.jpg"
        lftBtnTxt="custom order"
        rghtBtnTxt="existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="Model-3.jpg"
        lftBtnTxt="custom order"
        rghtBtnTxt="existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="Model-x.jpg"
        lftBtnTxt="custom order"
        rghtBtnTxt="existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panel in America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        lftBtnTxt="Order now"
        rghtBtnTxt="Learn more"
      />
      <Section
        title="Solar for New Roof"
        description="Solar Roof Cost Less Than New Roof Plus Solar Panel "
        backgroundImg="solar-roof.jpg"
        lftBtnTxt="Order now"
        rghtBtnTxt="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        lftBtnTxt="Shop now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
  color: red;
`;
