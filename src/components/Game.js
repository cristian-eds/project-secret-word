import React from "react";
import "./Game.css";

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score
}) => {
  return (
    <div className="game">
      <p className="point">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p> Você ainda tem {guesses} tentativas </p>
      <div className="wordContainer">
        {letters.map((letter,index) => (
          guessedLetters.includes(letter) ? (
            <span key={index} className="letter">letter</span>
          ): (
            <span key={index} className="blankSquare"></span>
          )
        ))}
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra</p>
        <form>
          <input type="text" name="letter" maxLength={1} required />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLetterContainer">
        <p>Letras já utilizadas: </p>
        {wrongLetters.map((letter, index)=>(
          <span key={index}>{letter}, </span>
        ))}
      </div>
    </div>
  );
};

export default Game;
