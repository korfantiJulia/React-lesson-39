import { useState } from "react";
import { Card } from "../StatelessComponent/Card";
import htmlLogo from "../../assets/HTML5-logo.jpg";
import cssLogo from "../../assets/CSS-logo.png";
import jsLogo from "../../assets/JS-logo.jpg";
import "./ButtonAddCard.css";

type CardProps = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export const ButtonAddCard = () => {
  const [cards, setCards] = useState<CardProps[]>([
    {
      id: 1,
      title: "HTML5",
      description: "Description 1",
      image: htmlLogo,
    },
    {
      id: 2,
      title: "CSS",
      description: "Description 2",
      image: cssLogo,
    },
    {
      id: 3,
      title: "JS",
      description: "Description 3",
      image: jsLogo,
    },
  ]);

  const [cardTitle, setCardTitle] = useState("");
  const [cardImage, setCardImage] = useState("");
  const [cardDescription, setCardDescription] = useState("");

  const addCard = () => {
    setCards([
      ...cards,
      {
        title: cardTitle,
        description: cardDescription,
        image: cardImage,
        id: Date.now(),
      },
    ]);
    setCardTitle("");
    setCardDescription("");
    setCardImage("");
  };

  return (
    <div>
      <div className="cards-container">
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter card title"
            value={cardTitle}
            onChange={(e) => setCardTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter card description"
            value={cardDescription}
            onChange={(e) => setCardDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter image url"
            value={cardImage}
            onChange={(e) => setCardImage(e.target.value)}
          />

          <button className="add-card" onClick={addCard}>
            Add card
          </button>
        </div>
      </div>
    </div>
  );
};
