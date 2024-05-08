import { useState } from "react";

const DomainsByAlpha = () => {
  const letters = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  const [activeLetter, setActiveLetter] = useState<string | null>("H");

  const handleLetterClick = (letter: string) => {
    setActiveLetter(letter);
  };

  return (
    <div className="row d-flex justify-content-center domain-alpha">
      {letters.map((letter, index) => (
        <div key={index} className="col-2 px-1 mb-2">
          <a
            href={`#${letter}`}
            className={`py-1 text-decoration-none text-gravel d-flex justify-content-center rounded-3 rounded border bg-white ${
              activeLetter === letter ? "active" : ""
            }`}
            onClick={() => handleLetterClick(letter)}
          >
            <span className="f-size-16">{letter}</span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default DomainsByAlpha;
