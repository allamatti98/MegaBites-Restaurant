import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import fooddishes from "../assets/img/fooddishes.jpg";
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

export const Menu = () => {

  const breakfast = [
    {
      title: "Drinks",
      description: "Vanilla & Chocolate Smoothies",
      imgUrl: drinks,
    },
    {
      title: "Dessert",
      description: "Chocolate Muffins",
      imgUrl: cake3,
    },
    {
      title: "Dessert",
      description: "Bread, Berries & Juice",
      imgUrl: healthy,
    },
    {
      title: "Breakfast",
      description: "Design & Development",
      imgUrl: cake2,
    },
    {
      title: "Appetizer",
      description: "Red & Black Berries",
      imgUrl: berry,
    },    {
      title: "Appetizer",
      description: "Salads",
      imgUrl: lunch2,
    },
  ];

  const lunch = [
    {
      title: "Appetizers",
      description: "Salads & Apple",
      imgUrl: fooddishes,
    },
    {
      title: "Lunch",
      description: "Sushi & Veggies",
      imgUrl: food2,
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
  ];

  const dinner = [
    {
      title: "Dinner",
      description: "Spaghetti",
      imgUrl: lunch1,
    },
    {
      title: "Dinner",
      description: "Salads",
      imgUrl: lunch2,
    },
    {
      title: "Dinner",
      description: "Meat & Veggies",
      imgUrl: cake1,
    },
    {
      title: "Dinner",
      description: "Salads",
      imgUrl: drink2,
    },
    {
      title: "Dinner",
      description: "Meat & Veggies",
      imgUrl: vegan,
    },
    {
      title: "Dinner",
      description: "Meat & Veggies",
      imgUrl: cake4,
    },
  ];

  return (
    <section className="project" id="menu">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h1 style={{textAlign:"center", fontSize:"6em"}}>Menu</h1>
                <p>At Megabites Restaurant we ensure the food and drinks we serve are prepared by Senior Chefs with great skills and experience. This enables us to provide you, our customers with a wide range of both local and intercontinental dishes.</p>
                <p>Here is the carefully curated Menu of our amazing food, ranging from drinks and appetizers to desserts and main courses. Feel free to order anything you see, if not everything.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Breakfast</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Lunch</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Dinner</Nav.Link>
                    </Nav.Item>                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          breakfast.map((project, index) => {
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
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          lunch.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          dinner.map((project, index) => {
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