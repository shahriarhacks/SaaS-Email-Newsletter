import Header from "@/shared/widgets/header/header";
import Banner from "./features/banner";
import Branding from "./features/branding";
import Benefits from "./features/benifits";
import Highlight from "./features/highlight";
import Pricing from "./features/pricing";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Branding />
      <Benefits />
      <Highlight />
      <Pricing />
    </div>
  );
};

export default Home;
