import { Facebook, Huddle, Instagram, Twitter } from "./SVGS";
import phone from "../assets/images/icon-phone.svg";
import email from "../assets/images/icon-email.svg";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="contacts">
          <Huddle fill="white" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
          </p>
          <div className="phone">
            <img src={phone} alt="phone icon" />
            <span>Phone: +1-543-123-4567</span>
          </div>
          <div className="email">
            <img src={email} alt="email logo" />
            <span>example@huddle.com</span>
          </div>
          <div className="socials">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
        </div>
        <div className="newsletter"></div>
      </div>
    </footer>
  );
}
