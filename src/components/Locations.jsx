import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Locations = () => {

  return (
    <section className="project" id="locations">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h1 style={{textAlign:"center", fontSize:"6em"}}>Locations</h1><br/>
                <h2>Acacia Mall</h2>
                <p>We have a branch at Acacia Mall and the service there is as good as usual, we have good food and there is ample parking space, Please feel free to come with your whole family and you will all have a good time, that one I guarantee</p><br/>
                <h2>Oasis Mall</h2>
                <p>We have a branch at Oasis Mall and the service there is as good as usual, we have good food and there is ample parking space, Please feel free to come with your whole family and you will all have a good time, that one I guarantee</p><br/>
                <h2>Forest Mall</h2>
                <p>We have a branch at Forest Mall and the service there is as good as usual, we have good food and there is ample parking space, Please feel free to come with your whole family and you will all have a good time, that one I guarantee</p><br/>
                <h2>Village Mall</h2>
                <p>We have a branch at Village Mall and the service there is as good as usual, we have good food and there is ample parking space, Please feel free to come with your whole family and you will all have a good time, that one I guarantee</p><br/>
                <h2>Garden City</h2>
                <p>We have a branch at Garden City and the service there is as good as usual, we have good food and there is ample parking space, Please feel free to come with your whole family and you will all have a good time, that one I guarantee</p><br/>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}