/* eslint-disable react/no-unescaped-entities */
import YourUsersIMG from "../assets/images/illustration-your-users.svg";

export default function YourUsers() {
  return (
    <section className="your-users">
      <div className="container">
        <div className="text">
          <h2>Your Users</h2>
          <p>
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </p>
        </div>
        <div className="image">
          <img src={YourUsersIMG} alt="Your users SVG" />
        </div>
      </div>
    </section>
  );
}
