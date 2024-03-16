import Header from "@/shared/widgets/header/header";

import Footer from "@/shared/widgets/footer/footer";
import Banner from "./elements/banner";
import Branding from "./elements/branding";
import Benefits from "./elements/benifits";
import Highlight from "./elements/highlight";
import Pricing from "./elements/pricing";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Branding />
      <Benefits />
      <Highlight />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
