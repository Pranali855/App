import React from "react";

export default function Card({ title, description, imageurl }) {
  return (
    <div style={{
      width: "250px",
      border: "2px solid #C11C84",
      backgroundColor:"pink",
      borderRadius: "10px",
      padding: "10px",
      textAlign: "center"
    }}>
      <img src={imageurl} alt={title} style={{ width: "100%", borderRadius: "10px" }} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
