import React from 'react'

function Card({ title, description, imageUrl }) {
    const cardStyle = {
    width: "300px",
    marginLeft:"30px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
    background: "#fff",
  };

  const imgStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "8px",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "10px",
  };

  const descStyle = {
    fontSize: "14px",
    color: "#555",
    marginTop: "5px",
  };

  return (
     <div style={cardStyle}>
      <img src={imageUrl} alt="img" style={imgStyle} />
      <div style={titleStyle}>{title}</div>
      <div style={descStyle}>{description}</div>
    </div>
  )
}

export default Card;