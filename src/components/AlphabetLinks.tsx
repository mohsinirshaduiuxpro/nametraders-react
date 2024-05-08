function AlphabetLinks() {
  const alphabets = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode(65 + index)
  );

  return (
    <>
      {alphabets.map((letter) => (
        <a
          href={`#${letter}`}
          className="cat-tile-style-2  border rounded rounded-3 "
        >
          {letter}
        </a>
      ))}
    </>
  );
}

export default AlphabetLinks;
