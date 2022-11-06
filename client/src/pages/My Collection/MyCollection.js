import "./Collection.css";
import socialMediaInstag from "../../assets/MyCollection/socialMediaInstag.svg";
import frame91 from "../../assets/MyCollection/frame91.svg";
import rectangle5 from "../../assets/MyCollection/rectangle5.png";
import logo from "../../assets/MyCollection/logo.png";
import rectangle4 from "../../assets/MyCollection/rectangle4.png";
import frame9 from "../../assets/MyCollection/frame9.svg";
import frame92 from "../../assets/MyCollection/frame92.svg";
import socialMediaTwitte from "../../assets/MyCollection/socialMediaTwitte.svg";
import socialMediaDiscor from "../../assets/MyCollection/socialMediaDiscor.svg";
import rectangle41 from "../../assets/MyCollection/rectangle41.png";


const MyCollection = () => {

  return (
    <div className="my-collection">
      <div className="michael-lechner-ih-7-a">
        <div className="flex-container">
        <a href="/"><img className="logo" src={logo} alt='logo'/></a>
          <span className="paramo">Paramo</span>
          <span className="marketplace"><a href="/nft-marketplace" style={{color: 'white', textDecoration: 'none'}}>Marketplace</a></span>
          <span className="sign-up"><a href="/signup" style={{ color: 'white', textDecoration: 'none', fontSize: '40px'}}>Sign Up</a></span>
          <span className="contact">Contact</span>
        </div>
        <span className="title">My Regenerative NFTs</span>
        <div className="flex-container-1">
          <div className="rectangle-4">
            <img className="rectangle-4-1" src={rectangle4} alt='rec4'/>
            <div className="flex-container-2">
              <span>Cannamix Boyaca, Colombia 1 Ton CO2 offset</span>
              <span className="num-006">0.06</span>
              <img className="frame-9" src={frame9} alt='frame-9'/>
            </div>
          </div>
          <div className="rectangle-4-2">
            <img className="rectangle-4-3" src={rectangle41} alt='rec-4-3'/>
            <div className="flex-container-3">
              <span className="crecer-project-meta">
                Crecer Project Meta, Colombia 1 Ton CO2 offset
              </span>
              <span className="num-008">0.08</span>
              <img className="frame-9-1" src={frame91} alt='frm91'/>
            </div>
          </div>
          <div className="rectangle-5">
          <a href="/nft-details"><img className="rectangle-5-1" src={rectangle5} alt='rectangle-5-1'/></a>
            <div className="flex-container-4">
              <span className="verde-y-nativo-bogot">
                Verde y Nativo Bogota, Colombia 1 Ton CO2 offset
              </span>
              <span className="num-007">0,07</span>
              <img className="frame-9-2" src={frame92} alt="frm92"/>
            </div>
          </div>
        </div>
        <div className="flex-container-5">
          <img className="social-media-twitte" src={socialMediaTwitte} alt='twitter'/>
          <img className="social-media-discor" src={socialMediaDiscor} alt='discord'/>
          <img className="social-media-instag" src={socialMediaInstag} alt='instagram'/>
        </div>
      </div>
    </div>
  );
};
export default MyCollection;