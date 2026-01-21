import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { faBellSlash } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";
import styled from "styled-components";
// import MyButton from "../MyButton";

const H1 = styled.h1`
  color: #5b211b6;
  text-align: center;
`;

export default function Footer() {
  return (
    <>
      {/* <H1>This is my styled component</H1> */}

      <div className="footer">
        Built with
        <FontAwesomeIcon
          icon={faHeart}
          className="footer-icon"
          aria-hidden="true"
        />
        by
        <a href="https://newsit.gr" target="_blank">
          Dimitra Nteka
        </a>
      </div>
      {/* <MyButton $primary>This is my Button</MyButton> */}
    </>
  );
}
