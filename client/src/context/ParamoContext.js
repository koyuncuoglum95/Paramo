import React, { useState, createContext, useContext } from 'react'
import { ethers } from 'ethers';

import { paramoABI, ADDRESS } from '../contract/index';

export const ParamoContext = createContext();

const { ethereum } = window;


const createPolygonContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const ParamoContract = new ethers.Contract(ADDRESS, paramoABI, signer);

    return ParamoContract;
}

export const ParamoContextProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState("");

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask.");
            const accounts = await ethereum.request({ method: "eth_requestAccounts", });
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object");
        }
    };

    const mintNFTHandler = async ( amount ) => {
        try {
            if (ethereum) {
                const mintNFT = createPolygonContract();
                const NFT = await mintNFT.mint(amount);
                console.log(NFT);
            }
        
        } catch (error) {
            console.log(error);
        }
    };
    

    return (
        <ParamoContext.Provider value={{ connectWallet, currentAccount, mintNFTHandler }}>
            {children}
        </ParamoContext.Provider>
    )
}

export const useParamoContext = () => useContext(ParamoContext);