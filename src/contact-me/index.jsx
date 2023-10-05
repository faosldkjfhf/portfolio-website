import { Link } from "react-router-dom";

function ContactCard() {
    return (
        <div className="mx-auto align-middle items-center list-group-item">
            <div className="text-white font-bold text-4xl overflow-hiden">
                <div>Contact Me</div>
                <div className="text-xl">
                    <Link to="https://www.linkedin.com/in/kliu0932">
                        <i className="fa-brands fa-linkedin"></i> Kevin Liu
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;
