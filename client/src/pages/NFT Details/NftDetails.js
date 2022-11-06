import "./NftDetails.css";
import rectangle5 from "../../assets/NFTDetails/rectangle5.png";
import socialMediaDiscor from "../../assets/NFTDetails/socialMediaDiscor.svg";
import socialMediaTwitte from "../../assets/NFTDetails/socialMediaTwitte.svg";
import socialMediaInstag from "../../assets/NFTDetails/socialMediaInstag.svg";
import frame9 from "../../assets/NFTDetails/frame9.svg";
import logo from "../../assets/NFTDetails/logo.png";
import { useNFTMarketContext } from "../../context/NFTMarketPlace";


const dummyData = [
  {
      "tokenId": 0,
      "address": "0xEB55398D2E9067E76AE0DCB1FF89D5624AE2DC95",
      "price": 0.005,
      "image": "https://gateway.pinata.cloud/ipfs/QmZ5QnrLLgANcDj9wQ5DHzgVerskR2vQzC3RqFC8ZPhReJ",
      "symbol": "MATIC"
  },
  {
      "tokenId": 1,
      "address": "0x61E370FD9525510B9A698D5EAD7925DC66E54A5F",
      "price": 0.16,
      "symbol": "MATIC"
  },
  {
      "tokenId": 2,
      "address": "msz3JVjeKN6YbLndgEP52cpM77yz8pq588",
      "price": 0.03,
      "symbol": "MATIC"
  },
  {
      "tokenId": 3,
      "address": "msz3JVjeKN6YbLndgEP52cpM77yz8pq588",
      "price": 0.0012,
      "symbol": "MATIC"
  }
  
]

const NftDetails = () => {
  const { buyNFT } = useNFTMarketContext();

  
  return (
    <div className="nft-details">
      <div className="michael-lechner-ih-7-a">
        <div className="flex-container">
        <a href="/"><img className="logo" src={logo} alt='logo'/></a>
          <span className="paramo">Paramo</span>
          <span className="marketplace"><a href="/nft-marketplace" style={{color: 'white', textDecoration: 'none'}}>Marketplace</a></span>
          <span className="sign-up"><a href="/signup" style={{ color: 'white', textDecoration: 'none', fontSize: '40px'}}>Sign Up</a></span>
          <span className="contact">Contact</span>
        </div>
        <span className="verde-y-nativo-nft-00">Verde y Nativo NFT#001</span>
        <div className="flex-container-1">
          <div className="rectangle-5">
            <img className="rectangle-5-1" src={rectangle5} alt="rect5" />
            <div className="flex-container-2">
              <span className="verde-y-nativo-bogot">
                Verde y Nativo Bogota, Colombia 1 Ton CO2 offset
              </span>
              <span className="num-007">0.07</span>
              <img className="frame-9" src={frame9} alt="frm9"/>
            </div>
          </div>
          <div className="flex-container-3">
            <div className="rectangle-7">
              <span className="location-47110-n-740">
                Location: 4.7110° N, 74.0721° W Info: Verde y Nativo is a
                Colombian Non-Profit Carbon Sequestering: 1 Ton CO2 offset
              </span>
            </div>
            <div className="rectangle-1" onClick={() => buyNFT(dummyData[0].address, dummyData[0].tokenId)}>Buy it!</div>
          </div>
        </div>
        <div className="flex-container-4">
          <img className="social-media-twitte" src={socialMediaTwitte} alt="twitter" />
          <img className="social-media-discor" src={socialMediaDiscor} alt="discord"/>
          <img className="social-media-instag" src={socialMediaInstag} alt="instagram"/>
        </div>
      </div>
    </div>
  );
};
export default NftDetails;