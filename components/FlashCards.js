import { useState } from "react";
import styles from "../styles/FlashCard.module.css"; // Create this CSS file for flashcard styling

function FlashCard({ frontContent, backContent }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={`${styles.flashcard} ${flipped ? styles.flipped : ""}`}
      onClick={handleClick}
    >
      <div className={`${styles.flashcardInner}`}>
        <div className={`${styles.flashcardFront}`}>
          <p>{frontContent}</p>
        </div>
        <div className={`${styles.flashcardBack}`}>
          <p>{backContent}</p>
        </div>
      </div>
    </div>
  );
}

export default FlashCard;
