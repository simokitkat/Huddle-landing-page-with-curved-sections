/* eslint-disable react/no-unescaped-entities */
import flowingConversationsIMG from "../assets/images/illustration-flowing-conversation.svg";

export default function FlowingConversations() {
  return (
    <section className="flowing-conversations">
      <div className="container">
        <div className="image">
          <img
            src={flowingConversationsIMG}
            alt="flowing conversations image"
          />
        </div>
        <div className="text">
          <h2>Flowing Conversations</h2>
          <p>
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </div>
      </div>
    </section>
  );
}
