import "./Home.css";
import rectangle41 from "../../assets/Home/rectangle41.png";
import frame92 from "../../assets/Home/frame92.svg";
import socialMediaDiscor from "../../assets/Home/socialMediaDiscor.svg";
import socialMediaInstag from "../../assets/Home/socialMediaInstag.svg";
import logo from "../../assets/Home/logo.png";
import rectangle4 from "../../assets/Home/rectangle4.png";
import rectangle5 from "../../assets/Home/rectangle5.png";
import frame9 from "../../assets/Home/frame9.svg";
import socialMediaTwitte from "../../assets/Home/socialMediaTwitte.svg";
import frame91 from "../../assets/Home/frame91.svg";
import { useParamoContext } from '../../context/ParamoContext';


const Home = () => {
  const { connectWallet, currentAccount } = useParamoContext();
  return (
    <div className="home-paramo">
      <div className="michael-lechner-ih-7-a">
        <div className="flex-container">
          <a href="/"><img className="logo" src={logo} alt='logo'/></a>
          <span className="paramo">Paramo</span>
          <span className="marketplace"><a href="/nft-marketplace" style={{color: 'white', textDecoration: 'none'}}>Marketplace</a></span>
          <span className="sign-up"><a href="/signup" style={{ color: 'white', textDecoration: 'none', fontSize: '40px'}}>Sign Up</a></span>
          <span className="contact">Contact</span>
          <div className="rectangle-1" onClick={connectWallet}>{currentAccount ? <p>{currentAccount}</p> : <p>Connect Wallet</p>}</div>
        </div>
        <span className="title">The first Regenerative NFT Marketplace</span>
        <span className="regenerating-ecosyst">
          Regenerating ecosystems through sustainable carbon offset projects in
          Colombia and Latin America.{" "}
        </span>
        <div className="flex-container-1">
          <div className="rectangle-4">
            <img className="rectangle-4-1" src={rectangle4} alt='rectangle-4-1'/>
            <div className="flex-container-2">
              <span>Cannamix Boyaca, Colombia 1 Ton CO2 offset</span>
              <span className="num-006">0.06</span>
              <img className="frame-9" src={frame9} alt='frame-9'/>
            </div>
          </div>
          <div className="rectangle-4-2">
            <img className="rectangle-4-3" src={rectangle41} alt='rectangle-4-3'/>
            <div className="flex-container-3">
              <span className="crecer-project-meta">
                Crecer Project Meta, Colombia 1 Ton CO2 offset
              </span>
              <span className="num-008">0.08</span>
              <img className="frame-9-1" src={frame91} alt='frame-9-1'/>
            </div>
          </div>
          <div className="rectangle-5">
            <a href="/nft-details"><img className="rectangle-5-1" src={rectangle5} alt='rectangle-5-1'/></a>
            <div className="flex-container-4">
              <span className="verde-y-nativo-bogot">
                Verde y Nativo Bogota, Colombia 1 Ton CO2 offset
              </span>
              <span className="num-007">0,07</span>
              <img className="frame-9-2" src={frame92} alt='frame-9-2'/>
            </div>
          </div>
        </div>
        <div className="rectangle-2">
          <span className="explore-collectibles"><a href="/collection" style={{textDecoration: 'none'}}>Explore Collectibles</a></span>
        </div>
        <span className="title-1">How Paramo works</span>
        <span className="we-connect-companies">
          We connect companies who want to offset their carbon emissions with
          regenerative carbon sequestering projects. Gold Standard partners
          monitor the offset effectiveness using drone photography and local
          communities to improve transparency by updating the NFT image.
        </span>
        <div className="flex-container-5">
          <img className="social-media-twitte" src={socialMediaTwitte} alt='Twitter'/>
          <img className="social-media-discor" src={socialMediaDiscor} alt='Discord'/>
          <img className="social-media-instag" src={socialMediaInstag} alt='Instagram'/>
        </div>
      </div>
    </div>
  );
};
export default Home;