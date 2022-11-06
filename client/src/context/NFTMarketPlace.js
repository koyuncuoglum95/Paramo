import React, { createContext, useContext, useState } from 'react'
import { ethers } from 'ethers';
import { nftABI, ADDRESS } from '../contract/index';

const NFTMarket = createContext();

const { ethereum } = window;


const nftMarketPlaceContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const nftMarketContract = new ethers.Contract(ADDRESS, nftABI, signer);

    return nftMarketContract;
}


export const NFTMarketProvider = ({ children }) => {
    const [nftItem, setNftItem] = useState([]);

    const listNftItem = async(currentAccount, tokenId, price) => {
        try {
            if (ethereum) {
                const nftList = nftMarketPlaceContract();
                const nftItem = await nftList.listItem(currentAccount, tokenId, price);
                setNftItem(nftItem);
            }
    
        } catch (error) {
            console.log(error);
        }
    };
    
    const cancelNftItem = async(currentAccount, tokenId) => {
        try {
            if (ethereum) {
                const nftList = nftMarketPlaceContract();
                const cancelNftItem = await nftList.cancelListing(currentAccount, tokenId);
                return cancelNftItem;
            } 
    
        } catch (error) {
            console.log(error);
        }
    };
    
    const buyNFT = async ( currentAccount, tokenId ) => {
        try {
            if (ethereum) {
                const nftList = nftMarketPlaceContract();
                const buy = await nftList.buyItem(currentAccount, tokenId);
                return buy;
            }
    
        } catch (error) {
            console.log(error);
        }
    };
    
    const updateNFT = async (currentAccount, tokenId, newPrice) => {
        try {
            if (ethereum) {
                const nftList = nftMarketPlaceContract();
                const updateNft = await nftList.updateListing(currentAccount, tokenId, newPrice);
                return updateNft;
            }
        } catch (error) {
            console.log(error);
        }
    };
    
    const withdraw = async () => {
        try {
            if (ethereum) {
                const nftList = nftMarketPlaceContract();
                const withdraw = await nftList.withdrawProceeds();
                return withdraw;
            }
        } catch (error) {
            console.log(error);
        }
    };
    
    /*
    const getNftList = async () => {
        try {
            if (ethereum) {
                const nftList = nftMarketPlaceContract();
                const getNft = nftList.getListing('0xEB55398D2E9067E76AE0DCB1FF89D5624AE2DC95',0);
                console.log(getNft);
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    */
    
    
    return (
        <NFTMarket.Provider value={{ 
            listNftItem, cancelNftItem, buyNFT, 
            updateNFT, withdraw, nftItem 
        }}>
            {children}
        </NFTMarket.Provider>
    )
};

export const useNFTMarketContext = () => useContext(NFTMarket);