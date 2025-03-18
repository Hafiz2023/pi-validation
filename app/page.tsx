import NetworkLanding from "./NetworkLanding/page";
import MiningSection from "./MiningSection/page";

import MiningSectionTwo from "./MiningSectionTwo/page";
import FooterOne from "./Footer/page";
import Footer from "./Footer/page";

export default function Home() {
  return (
    <div>
      <NetworkLanding />
      <MiningSection />
      <MiningSectionTwo />
      <Footer />
    </div>
  );
}
