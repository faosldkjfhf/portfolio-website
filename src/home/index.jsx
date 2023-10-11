import { Link } from "react-router-dom";
import Footer from "../footer";
import AboutMe from "../about-me";
import Projects from "../projects";
import WorkExperience from "../work-experience";
import Interests from "../interests";
import NavBar from "../nav-bar";
import ContactCard from "../contact-me";
import Visual from "./test";

function Home() {
    return (
        <div className="">
            <NavBar />
            <div className="md:grid md:grid-cols-12 md:grid-rows-6 mt-3">
                <div className="md:col-span-5 md:row-span-full">
                    <div className="text-white md:text-8xl lg:text-9xl font-bold">
                        <div className="px-3 fixed overflow-hidden">
                            Kevin Liu
                        </div>
                        <Visual />
                    </div>
                </div>
                <div className="text-center container mx-auto md:col-span-7 md:row-span-full md:px-3 md:overflow-hidden">
                    <AboutMe />
                    <WorkExperience />
                    <Projects />
                    <Interests />
                    <ContactCard />
                </div>
            </div>
            <div className="fixed bottom-0">
                <Footer />
            </div>
        </div>
    );
}

export default Home;
