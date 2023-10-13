import { Link } from "react-router-dom";

function ContactCard() {
  return (
    <div className="mx-auto align-middle items-center list-group-item">
      <div className="text-white font-bold text-4xl overflow-hiden">
        <div>Contact Me</div>
        <div className="text-sm text-slate-500 font-normal my-3">
          You can reach me through email at liu.kevi@northeastern.edu or through
          call at (703)388-6774. Feel free to reach out through any of the other
          links below as well!
        </div>
        <div className="text-xl">
          <ul className="">
            <li className="list-item">
              <Link to="https://www.linkedin.com/in/kliu0932">
                <i className="fa-brands fa-linkedin"></i> Kevin Liu
              </Link>
            </li>
            <li>
              <Link to="https://www.github.com/faosldkjfhf">
                <i className="fa-brands fa-github"></i> faosldkjfhf
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
