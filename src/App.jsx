import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Diagram } from "./components/Diagram";
import GrowTogether from "./components/GrowTogether";
import FlowingConversations from "./components/FlowingConversations";
import YourUsers from "./components/YourUsers";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Diagram />
      <GrowTogether />
      <FlowingConversations />
      <YourUsers />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
