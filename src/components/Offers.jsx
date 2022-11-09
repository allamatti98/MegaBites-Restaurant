import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import breakfast from "../assets/img/fooddishes.jpg";
import lunch1 from "../assets/img/instant.jpg";
import lunch2 from "../assets/img/salad.jpg";
import vegan from "../assets/img/vegan.jpg";
import healthy from "../assets/img/healthy.jpg";
import date from "../assets/img/datefood.webp";
import food2 from "../assets/img/food2.jfif";
import food4 from "../assets/img/food4.jpg";
import berry from "../assets/img/berryblack.jfif";
import food3 from "../assets/img/food3.jfif";
import cake2 from "../assets/img/cake2.jfif";
import cake1 from "../assets/img/cake1.jpg";
import spaghetti from "../assets/img/spaghetti.jfif";
import cake5 from "../assets/img/cake5.jpg";
import drink2 from "../assets/img/drink2.jfif";
import cake3 from "../assets/img/cake3.jfif";
import cake4 from "../assets/img/cake4.jfif";
import drinks from "../assets/img/drinks.png";


import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Offers = () => {

  const projects = [
    {
      title: "Appetizers",
      description: "Salads & Apple",
      imgUrl: breakfast,
    },
    {
      title: "Breakfast",
      description: "Spaghetti",
      imgUrl: lunch1,
    },
    {
      title: "Appetizer",
      description: "Salads",
      imgUrl: lunch2,
    },
    {
      title: "Lunch",
      description: "Sushi & Veggies",
      imgUrl: food2,
    },
    {
      title: "Appetizer",
      description: "Red & Black Berries",
      imgUrl: berry,
    },
    {
      title: "Lunch",
      description: "Meat & Fries",
      imgUrl: food4,
    },
    {
        title: "Lunch",
        description: "Meat & Veggies",
        imgUrl: cake1,
      },
      {
        title: "Lunch",
        description: "Fish & Salads",
        imgUrl: food3,
      },
      {
        title: "Dessert",
        description: "Tasty Cake",
        imgUrl: cake2,
      },

      {
        title: "Dessert",
        description: "Chocolate Muffins",
        imgUrl: cake3,
      },
      {
        title: "Drinks",
        description: "Vanilla & Chocolate Smoothies",
        imgUrl: drinks,
      },
      {
        title: "Dessert",
        description: "Bread, Berries & Juice",
        imgUrl: healthy,
      },
  ];

  return (
    <section className="offers" id="offers">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 style={{color:"black"}}>Welcome to MegaBites Restaunt!!!</h2>
                <p style={{color:"black"}}>Welcome to MegaBites Restaunt's delicious universe. Everything from our Big on Breakfast, Perfected Drinks, Decadent to your Generous Big Meals Right here at your fingertips. ORDER NOW.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}