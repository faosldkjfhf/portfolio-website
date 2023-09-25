import { Link } from "react-router-dom";
import Footer from "../footer";
import AboutMe from "../about-me";
import Projects from "../projects";

function Home() {
    return (
        <div className="flex flex-col">
            <div className="text-white text-9xl font-bold flex-auto">
                <div>Hello!</div>
                <div className="text-white text-9xl font-bold">
                    I'm Kevin Liu
                </div>
            </div>
            <div className="flex-auto text-center">
                <ul className="container mx-auto">
                    <li>
                        <AboutMe />
                    </li>
                    <li>
                        <Projects />
                    </li>
                    <li className="text-white text-6xl font-bold">
                        Previous Experiences
                    </li>
                    <li className="text-white text-6xl font-bold">Interests</li>
                </ul>
            </div>
            <div className="fixed bottom-0">
                <Footer />
            </div>
        </div>
    );
}

export default Home;
