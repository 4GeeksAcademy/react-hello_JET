import React from "react";

const Card = (props) => {
  return (
    <div className="card h-100">
      <img src={props.image} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href="#" className="btn btn-primary">
          {props.buttonLable}
        </a>
      </div>
    </div>
  );
};

export default Card;
