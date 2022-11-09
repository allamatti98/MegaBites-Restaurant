import React from "react";
import { NavBar } from "../components/NavBar";
import { Banner } from "../components/Banner";
import { Offers } from "../components/Offers";
import { Menu } from "../components/Menu";
import { Locations } from "../components/Locations";
import { Careers } from "../components/Careers";
import { Feedback } from "../components/Feedback";
import { Footer } from "../components/Footer";
import { Fin } from "../components/Fin";

class Home extends React.PureComponent{
    render(){
        return(
            <div>
            <NavBar />
            <Banner />
            <Offers/>
            <Menu />
            <Locations/>
            <Careers/>
            <Feedback />
            <Footer />
            <Fin/>
            </div>
        )
    }
}
export default Home