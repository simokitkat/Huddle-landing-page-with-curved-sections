import screenMockUps from "../assets/images/screen-mockups.svg";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button>Get Started For Free</button>
        <img src={screenMockUps} alt="main app image" />
      </div>
    </section>
  );
};
