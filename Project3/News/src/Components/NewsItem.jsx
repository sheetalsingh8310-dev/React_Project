import React from "react";
import image from "../assets/image.png";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card mb-4 mx-3 bg-dark text-light d-inline-block"
      style={{ maxWidth: "360px" }}
    >
      {src && (
        <img
          src={src ? src : image}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
          alt="News"
        />
      )}
      <div className="card-body">
        <h5 className="card-title">
          {title ? title.slice(0, 60) : "No Title Available"}
        </h5>
        <p className="card-text">
          {description
            ? description.slice(0, 100)
            : "News is a current event — information about something that has just happened."}
        </p>
        {url && (
          <a
            href={url}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Read More
          </a>
        )}
      </div>
    </div>
  );
};

export default NewsItem;
