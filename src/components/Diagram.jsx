import communities from "../assets/images/icon-communities.svg";
import messages from "../assets/images/icon-messages.svg";

export const Diagram = () => {
  return (
    <section className="diagram">
      <div className="container">
        <div className="communities">
          <img src={communities} alt="communities icon" />
          <h2>1.4k+</h2>
          <p>Communities Formed</p>
        </div>
        <div className="messages">
          <img src={messages} alt="messages icon" />
          <h2>2.7m+</h2>
          <p>Messages Sent</p>
        </div>
      </div>
    </section>
  );
};
