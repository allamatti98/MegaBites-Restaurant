import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import logo from '../assets/img/logo2bg.png';


export const Fin = () => {

  return (
    <section className="project" id="locations">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <img src={logo} style={{height:"100px", width:"100px", display:"block", marginLeft:"auto", marginRight:"auto"}} alt="logo"/>
                <h2>MegaBites Restaurant</h2>
                <p>Thank you so much for visiting our website. Don't forget to subscribe to our newsletter. We would to hear from you. And we hope to see you yet again.</p><br/>
                <p>Copyright 2022. All Rights Reserved</p>
                <p>Designed by Dayan Allamatti</p>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}