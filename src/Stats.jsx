import { FACEBOOK_MAX_CHARACTERS, INSTAGRAM_MAX_CHARACTERS } from "./constants";

export default function Stats({ numberOfWords = 0, numberOfCharacters = 0 }) {
  return (
    <section className="stats">
      <Stat number={numberOfWords} label={"Words"} />
      <Stat number={numberOfCharacters} label={"Characters"} />
      <Stat
        number={INSTAGRAM_MAX_CHARACTERS - numberOfCharacters}
        label={"Instagram"}
      />
      <Stat
        number={FACEBOOK_MAX_CHARACTERS - numberOfCharacters}
        label={"Facebook"}
      />
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
