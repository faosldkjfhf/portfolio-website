import { Link } from "react-router-dom";
import Footer from "../footer";
import AboutMe from "../about-me";
import Projects from "../projects";
import WorkExperience from "../work-experience";
import Interests from "../interests";
import NavBar from "../nav-bar";

function Home() {
    return (
        <div className="flex flex-col flex-1">
            <NavBar />
            <div className="text-white text-9xl font-bold flex-auto">
                <div className="overflow-hidden">Hello!</div>
                <div className="overflow-hidden">I'm Kevin Liu</div>
            </div>
            <div className="flex-auto text-center">
                <ul className="container mx-auto">
                    <li>
                        <AboutMe />
                    </li>
                    <li>
                        <Projects />
                    </li>
                    <li>
                        <WorkExperience />
                    </li>
                    <li>
                        <Interests />
                    </li>
                </ul>
            </div>
            <div className="fixed bottom-0">
                <Footer />
            </div>
        </div>
    );
}

export default Home;
