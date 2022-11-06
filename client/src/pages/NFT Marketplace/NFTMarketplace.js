import "./NFTMarketplace.css";
import rectangle44 from "../../assets/MarketPlace/rectangle44.png";
import frame9 from "../../assets/MarketPlace/frame9.svg";
import frame94 from "../../assets/MarketPlace/frame94.svg";
import frame91 from "../../assets/MarketPlace/frame91.svg";
import rectangle52 from "../../assets/MarketPlace/rectangle52.png";
import frame93 from "../../assets/MarketPlace/frame93.svg";
import logo from "../../assets/MarketPlace/logo.png";
import frame97 from "../../assets/MarketPlace/frame97.svg";
import rectangle43 from "../../assets/MarketPlace/rectangle43.png";
import rectangle51 from "../../assets/MarketPlace/rectangle51.png";
import frame95 from "../../assets/MarketPlace/frame95.svg";
import socialMediaInstag from "../../assets/MarketPlace/socialMediaInstag.svg";
import frame96 from "../../assets/MarketPlace/frame96.svg";
import rectangle45 from "../../assets/MarketPlace/rectangle45.png";
import rectangle5 from "../../assets/MarketPlace/rectangle5.png";
import frame98 from "../../assets/MarketPlace/frame98.svg";
import frame92 from "../../assets/MarketPlace/frame92.svg";
import socialMediaDiscor from "../../assets/MarketPlace/socialMediaDiscor.svg";
import rectangle41 from "../../assets/MarketPlace/rectangle41.png";
import rectangle42 from "../../assets/MarketPlace/rectangle42.png";
import rectangle4 from "../../assets/MarketPlace/rectangle4.png";
import socialMediaTwitte from "../../assets/MarketPlace/socialMediaTwitte.svg";

const NftMarketplace = () => {
  return (
    <div className="marketplace">
      <div className="michael-lechner-ih-7-a">
        <div className="flex-container">
        <a href="/"><img className="logo" src={logo} alt='logo'/></a>
          <span className="paramo">Paramo</span>
          <span className="marketplace"><a href="/nft-marketplace" style={{color: 'white', textDecoration: 'none'}}>Marketplace</a></span>
          <span className="sign-up"><a href="/signup" style={{ color: 'white', textDecoration: 'none', fontSize: '40px'}}>Sign Up</a></span>
          <span className="contact">Contact</span>
        </div>
        <span className="title">Collect your regenerative NFTs</span>
        <div className="flex-container-1">
          <div className="rectangle-4">
            <img className="rectangle-4-1" src={rectangle44} alt="rect44"/>
            <div className="flex-container-2">
              <span>Cannamix Boyaca, Colombia 1 Ton CO2 offset</span>
              <span className="num-006">0.06</span>
              <img className="frame-9" src={frame96} alt="frm96"/>
            </div>
          </div>
          <div className="rectangle-4-2">
            <img className="rectangle-4-3" src={rectangle45} alt="rect45"/>
            <div className="flex-container-3">
              <span className="crecer-project-meta">
                Crecer Project Meta, Colombia 1 Ton CO2 offset
              </span>
              <span className="num-008">0.08</span>
              <img className="frame-9-1" src={frame97} alt="frm97"/>
            </div>
          </div>
          <div className="rectangle-5">
          <a href="/nft-details"><img className="rectangle-5-1" src={rectangle52} alt='rectangle-5-1'/></a>
            <div className="flex-container-4">
              <span className="verde-y-nativo-bogot">
                Verde y Nativo Bogota, Colombia 1 Ton CO2 offset
              </span>
              <span className="num-007">0,07</span>
              <img className="frame-9-2" src={frame98} alt="frm98"/>
            </div>
          </div>
        </div>
        <div className="flex-container-5">
          <div className="rectangle-4-4">
            <img className="rectangle-4-5" src={rectangle4} alt="rect4"/>
            <div className="flex-container-6">
              <span className="local-2-local-sopo-col">
                Local2Local Sopo, Colombia 1 Ton CO2 offset
              </span>
              <span className="num-006-1">0.06</span>
              <img className="frame-9-3" src={frame9} alt='frm9'/>
            </div>
          </div>
          <div className="rectangle-4-6">
            <img className="rectangle-4-7" src={rectangle41} alt="rect41"/>
            <div className="flex-container-7">
              <span className="sop-zipa-colombia-1">
                SOP Zipa, Colombia 1 Ton CO2 offset
              </span>
              <span className="num-008-1">0.08</span>
              <img className="frame-9-4" src={frame91} alt="frm91"/>
            </div>
          </div>
          <div className="rectangle-5-2">
            <img className="rectangle-5-3" src={rectangle5} alt="rect5"/>
            <div className="flex-container-8">
              <span className="lands-for-life-meta">
                Lands for Life Meta, Colombia 1 Ton CO2 offset
              </span>
              <span className="num-007-1">0,07</span>
              <img className="frame-9-5" src={frame92} alt="frm92"/>
            </div>
          </div>
        </div>
        <div className="flex-container-9">
          <div className="rectangle-4-8">
            <img className="rectangle-4-9" src={rectangle42} alt="rect42"/>
            <div className="flex-container-10">
              <span className="artisan-coffee-valle">
                Artisan Coffee Valle, Colombia 1 Ton CO2 offset
              </span>
              <span className="num-006-2">0.06</span>
              <img className="frame-9-6" src={frame93} alt="frm93"/>
            </div>
          </div>
          <div className="rectangle-4-10">
            <img className="rectangle-4-11" src={rectangle43} alt="rect43"/>
            <div className="flex-container-11">
              <span className="jaguares-valle-colom">
                Jaguares Valle, Colombia 1 Ton CO2 offset
              </span>
              <span className="num-008-2">0.08</span>
              <img className="frame-9-7" src={frame94} alt="frm94"/>
            </div>
          </div>
          <div className="rectangle-5-4">
            <img className="rectangle-5-5" src={rectangle51} alt="rect51"/>
            <div className="flex-container-12">
              <span className="ayahuasca-leticia-co">
                Ayahuasca Leticia, Colombia 1 Ton CO2 offset
              </span>
              <span className="num-007-2">0,07</span>
              <img className="frame-9-8" src={frame95} alt="frm95"/>
            </div>
          </div>
        </div>
        <div className="flex-container-13">
          <img className="social-media-twitte" src={socialMediaTwitte} alt="twitter"/>
          <img className="social-media-discor" src={socialMediaDiscor} alt="discord"/>
          <img className="social-media-instag" src={socialMediaInstag} alt="instagram"/>
        </div>
      </div>
    </div>
  );
};
export default NftMarketplace;