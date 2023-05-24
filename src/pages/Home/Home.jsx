import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Web3 from 'web3';
import NftCard from '../../components/Cards/NftCard';
import NftPlaceholderCard from '../../components/Cards/NftPlaceholderCard';
import Intro from '../../components/Home/Intro';
import ABI from '../../utils/ABI.json';
import LocalNFTs from '../../utils/NFTs.json';
// const ContractAddress = '0xd774557b647330C91Bf44cfEAB205095f7E6c367';
// const ContractABI = ABI;
// const web3Instance = new Web3('https://mainnet.infura.io/v3/1a4e0b16869a40c4bc63f0d86384b197');

export default function Home() {
    // const [nftList, setNFTList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [itemsToShow, setItemsToShow] = useState(10);
    // const loadNFTs = async () => {
    //     try {
    //         setIsLoading(true);
    //         // Connect to the Ethereum network using web3Instance
    //         if (window.ethereum) {
    //             await window.ethereum.enable();

    //             // Get the contract instance
    //             const contract = new web3Instance.eth.Contract(ContractABI, ContractAddress);

    //             // Get the total number of NFTs
    //             //   const totalNFTs = await contract.methods.totalSupply().call();

    //             // Retrieve each NFT by its token ID
    //             const nftArray = [];
    //             for (let i = 0; i < itemsToShow; i++) {
    //                 const tokenId = i + 1;
    //                 const tokenURI = await contract.methods.tokenURI(tokenId).call();

    //                 // Replace the image URL prefix
    //                 const imageURL = tokenURI.replace('ipfs://', 'https://ipfs.io/ipfs/');

    //                 // Fetch the metadata from the complete URL
    //                 const response = await fetch(imageURL);
    //                 const metadata = await response.json();
    //                 const nftImage = metadata.image.replace('ipfs://', 'https://ipfs.io/ipfs/');
    //                 const nft = {
    //                     id: tokenId,
    //                     name: metadata.name,
    //                     image: nftImage,
    //                     attributes: metadata.attributes,
    //                 };
    //                 nftArray.push(nft);
    //             }

    //             setNFTList(nftArray);
    //             setIsLoading(false);
    //         }
    //     } catch (error) {
    //         console.error('Error fetching NFTs:', error);
    //         setIsLoading(false);
    //     }
    // };

    // const loadMoreItems = () => {
    //     const newItemsToShow = itemsToShow + 10;
    //     setItemsToShow(newItemsToShow);
    // };

    // useEffect(() => {
    //     loadNFTs();
    //     //eslint-disable-next-line
    // }, [itemsToShow]);

    return (
        <div className='container-fluid py-4 bg-light'>
            <Intro />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h4 className='ms-1'>E-Book Gallery</h4>
                        {/* {isLoading && (
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        )} */}
                    </div>
                </div>
                <div className="row row-cols-sm-1 row-cols-md-3 row-cols-lg-5 row-cols-xl-5 mb-5">
                    {/* {nftList.slice(0, itemsToShow).map((nft, index) => (
                        <div className="col p-2" key={index}>
                            <NftCard nft={nft} />
                        </div>
                    ))} */}
                    {LocalNFTs.slice(0, itemsToShow).map((nft, index) => (
                        <div className="col p-2" key={index}>
                            <NftCard nft={nft} />
                        </div>
                    ))}
                    {/* {isLoading &&
                        Array.from(Array(itemsToShow - nftList.length).keys()).map((index) => (
                            <div className="col-2" key={index + nftList.length}>
                                <NftPlaceholderCard />
                            </div>
                        ))} */}
                    {isLoading &&
                        Array.from(Array(itemsToShow - LocalNFTs.length).keys()).map((index) => (
                            <div className="col-2" key={index + LocalNFTs.length}>
                                <NftPlaceholderCard />
                            </div>
                        ))}
                </div>
                {/* <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        {LocalNFTs.length > 0 && !isLoading && (
                            <div>
                                <button className="btn btn-primary mt-3" onClick={loadMoreItems}>
                                    Load More
                                </button>
                            </div>
                        )}
                    </div>
                </div> */}
            </div>
        </div>
    )
}
