import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../constants";
export default function Stats(props) {
  const { text } = props;
  const wordsLength = text.split(/\s/).filter((word) => word !== "").length;
  const numberOfChars = text.length;
  const instagramCharsLeft = INSTAGRAM_MAX_CHARACTERS - numberOfChars;
  const facebookCharsLeft = FACEBOOK_MAX_CHARACTERS - numberOfChars;
  return (
    <section className="stats">
      <Stat label="Words" number={wordsLength} />
      <Stat label="Characters" number={numberOfChars} />
      <Stat label="Instagram" number={instagramCharsLeft} />
      <Stat label="Facebook" number={facebookCharsLeft} />
    </section>
  );
}

function Stat({ label, number }) {
  return (
    <section className="stat">
      <span
        className={`stat__number${number < 0 ? " stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
