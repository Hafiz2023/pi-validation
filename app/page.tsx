import NetworkLanding from "./NetworkLanding/page";
import MiningSection from "./MiningSection/page";
import Footer from "./Footer/page";
import MiningSectionTwo from "./MiningSectionTwo/page";
import FooterOne from "./FooterOne/page";

export default function Home() {
  return (
    <div>
      <NetworkLanding />
      <MiningSection />
      <MiningSectionTwo />
      <FooterOne />
    </div>
  );
}
