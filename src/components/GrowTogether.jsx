import growTogetherIMG from "../assets/images/illustration-grow-together.svg";

export default function GrowTogether() {
  return (
    <section className="grow-together">
      <div className="container">
        <div className="text">
          <h2>Grow Together</h2>
          <p>
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </div>
        <div className="image">
          <img src={growTogetherIMG} alt="image of growing together" />
        </div>
      </div>
    </section>
  );
}
