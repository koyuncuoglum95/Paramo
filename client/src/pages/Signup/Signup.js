import "./Signup.css";
import rectangle23 from "../../assets/Signup/rectangle23.svg";
import socialMediaInstag from "../../assets/Signup/socialMediaInstag.svg";
import socialMediaTwitte from "../../assets/Signup/socialMediaTwitte.svg";
import rectangle21 from "../../assets/Signup/rectangle21.svg";
import rectangle22 from "../../assets/Signup/rectangle22.svg";
import rectangle25 from "../../assets/Signup/rectangle25.svg";
import socialMediaDiscor from "../../assets/Signup/socialMediaDiscor.svg";
import rectangle41 from "../../assets/Signup/rectangle41.png";
import rectangle5 from "../../assets/Signup/rectangle5.png";
import logo from "../../assets/Signup/logo.png";
import rectangle2 from "../../assets/Signup/rectangle2.svg";
import rectangle24 from "../../assets/Signup/rectangle24.svg";
import rectangle4 from "../../assets/Signup/rectangle4.png";

const Signup = () => {
  return (
    <div className="sign-up">
      <div className="michael-lechner-ih-7-a">
        <div className="flex-container">
        <a href="/"><img className="logo" src={logo} alt='logo'/></a>
          <span className="paramo">Paramo</span>
          <span className="marketplace">Marketplace</span>
          <span className="sign-up-1"><a href="/signup" style={{ color: 'white', textDecoration: 'none', fontSize: '40px'}}>Sign Up</a></span>
          <span className="contact">Contact</span>
        </div>
        <span className="title">
          Sell NFTs globally and offset carbon emissions{" "}
        </span>
        <span className="set-up-your-account">
          Set up your account, get verified and we will monitor and update the
          status of your project’s NFTs using drone photography of the
          ecosystems and collaborate with the Gold Standard Organization (GSO)
          to certify the carbon credit offset globally. In addition, by issuing
          the governance token along the performance of project, we will
          motivate you to fulfill your responsibility to grow and regenerate
          nature for offestting effectively.
        </span>
        <div className="flex-container-1">
          <div className="rectangle-4">
            <span>Get Verified with GSO</span>
            <img className="rectangle-4-1" src={rectangle4} alt="rectangle4"/>
          </div>
          <div className="rectangle-4-2">
            <span className="mint-and-sell-nf-ts">Mint and sell NFTs</span>
            <img className="rectangle-4-3" src={rectangle41} alt='rect41'/>
          </div>
          <div className="rectangle-5">
            <span className="earn-governance-toke">Earn Governance Token</span>
            <img className="rectangle-5-1" src={rectangle5} alt="rect5"/>
          </div>
        </div>
        <div className="rectangle-3">
          <span className="sign-up-for-free">Sign Up for Free</span>
        </div>
        <div className="flex-container-2">
          <span>Name</span>
          <span>Company</span>
        </div>
        <div className="flex-container-3">
          <img className="rectangle-2" src={rectangle22} alt="rect22"/>
          <img className="rectangle-2-1" src={rectangle21} alt="rect21"/>
        </div>
        <div className="flex-container-4">
          <span>Location</span>
          <span>Phone</span>
        </div>
        <div className="flex-container-5">
          <img className="rectangle-2-2" src={rectangle23} alt="rect23"/>
          <img className="rectangle-2-3" src={rectangle2} alt="rect2"/>
        </div>
        <div className="flex-container-6">
          <span>Email</span>
          <span className="current-certificatio">Current Certifications</span>
        </div>
        <div className="flex-container-7">
          <img className="rectangle-2-4" src={rectangle24} alt="rect24"/>
          <img className="rectangle-2-5" src={rectangle25} alt="rect25"/>
        </div>
        <div className="rectangle-2-6">Send Request</div>
        <div className="flex-container-8">
          <img className="social-media-twitte" src={socialMediaTwitte} alt="twitter"/>
          <img className="social-media-discor" src={socialMediaDiscor} alt="discord"/>
          <img className="social-media-instag" src={socialMediaInstag} alt="instagram"/>
        </div>
      </div>
    </div>
  );
};
export default Signup;