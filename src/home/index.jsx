import { Link } from "react-router-dom";
import Footer from "../footer";
import AboutMe from "../about-me";
import Projects from "../projects";
import WorkExperience from "../work-experience";
import Interests from "../interests";
import NavBar from "../nav-bar";
import ContactCard from "../contact-me";

function Home() {
    return (
        <div className="flex flex-col flex-1">
            <NavBar />
            <div className="text-white text-9xl font-bold flex-auto">
                <div className="overflow-hidden">Hello!</div>
                <div className="overflow-hidden">I'm Kevin Liu</div>
            </div>
            <div className="flex-auto text-center container mx-auto">
                <AboutMe />
                <WorkExperience />
                <Projects />
                <Interests />
                <ContactCard />
            </div>
            <div className="fixed bottom-0">
                <Footer />
            </div>
        </div>
    );
}

export default Home;
