import { useEffect } from "react";
import { Link } from "react-router-dom";

const AboutMe = () => {
    useEffect(() => {
        document.title = "About Me"
    }, []);
    return (
        <div>
            <h1>About Me</h1>
            <div>
                Currently a second year student studying Computer Science and Game Development at Northeastern.
            </div>
            <h1>Contact Information</h1>
            <div>
                <div>
                    <Link className="no-text-decor" to="tel:7033886774"><i class="fa-solid fa-phone"></i> (703)388-6774</Link>
                </div>
                <div>
                    <Link className="no-text-decor" to="mailto:liu.kevi@northeastern.edu"><i class="fa-regular fa-envelope"></i> liu.kevi@northeastern.edu</Link>
                </div>
                <div>
                    <Link className="no-text-decor" to="https://github.com/faosldkjfhf"><i class="fa-brands fa-github"></i> faosldkjfhf</Link>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;