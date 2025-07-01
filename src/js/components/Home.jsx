import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import Footer from "./Footer";

const cardArray = [
  {
    title: "What is Lorem Ipsum?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: "https://picsum.photos/id/13/200",
    buttonLable: "Go Somewhere",
  },
  {
    title: "Where does it come from?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    image: "https://picsum.photos/id/27/200",
    buttonLable: "Go Somewhere",
  },
  {
    title: "Why do we use it?",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    image: "https://picsum.photos/id/15/200",
    buttonLable: "Go Somewhere",
  },
  {
    title: "Where can I get some?",
    description:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
    image: "https://picsum.photos/id/13/200",
    buttonLable: "Go Somewhere",
  },
];

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container my-5">
        <div className="row">
          {cardArray.map((card, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <Card
                title={card.title}
                description={card.description}
                image={card.image}
                buttonLable={card.buttonLable}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
