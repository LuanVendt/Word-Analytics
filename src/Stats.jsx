export default function Stats({ numberOfWords = 0, numberOfCharacters = 0 }) {
  return (
    <section className="stats">
      <Stat number={numberOfWords} label={"Words"} />
      <Stat number={numberOfCharacters} label={"Characters"} />
      <Stat number={280 - numberOfCharacters} label={"Instagram"} />
      <Stat number={2200 - numberOfCharacters} label={"Facebook"} />
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <section className="stat">
      <span
        className="stat__number"
        style={{ color: number < 0 ? "red" : "inherit" }}
      >
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
