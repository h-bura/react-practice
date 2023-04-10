import React from "react";
import "../styles/About.css";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique
          senectus et netus et malesuada fames ac. Eget nunc lobortis mattis
          aliquam faucibus purus in. Consectetur purus ut faucibus pulvinar
          elementum integer. Aliquet risus feugiat in ante metus dictum at
          tempor. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor.
          Interdum consectetur libero id faucibus nisl tincidunt. Volutpat sed
          cras ornare arcu dui vivamus arcu. Tincidunt arcu non sodales neque
          sodales ut. Sed arcu non odio euismod lacinia at quis risus sed. Donec
          et odio pellentesque diam volutpat. Pellentesque massa placerat duis
          ultricies. In metus vulputate eu scelerisque felis imperdiet. Arcu non
          sodales neque sodales ut etiam sit amet.
        </p>
      </div>
    </div>
  );
}

export default About;
