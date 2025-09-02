import React from "react";

const About = () => {
  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1>About Me</h1>
      <img
        src="https://via.placeholder.com/200"
        alt="My photo"
        style={{
          borderRadius: "50%",
          width: "200px",
          height: "200px",
          margin: "2rem auto",
        }}
      />
      <h2>Maxim Dubreil</h2>
      <p style={{ maxWidth: "600px", margin: "1rem auto" }}>
        Welcome to my portfolio
      </p>
    </div>
  );
};

export default About;
