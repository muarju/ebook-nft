import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LocalNFTs from '../../utils/NFTs.json';
import { Viewer } from '@react-pdf-viewer/core';
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import axios from 'axios'; // Import Axios if not already imported

export default function NftDetails() {
    const params = useParams();
    const nftId = parseInt(params.id); // Convert nftId to number
    const [nft, setNFT] = useState(null);
    const [pdfBlobUrl, setPdfBlobUrl] = useState(null); // State to hold the Blob URL

    // Create new plugin instance
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const currentNFT = (nftId) => {
        const filteredNFT = LocalNFTs.find((item) => item.id === nftId);
        setNFT(filteredNFT);
    };

    useEffect(() => {
        if (nftId) {
            currentNFT(nftId);
        }
    }, [nftId]);

    useEffect(() => {
        if (nft?.pdf) {
            // Fetch the PDF file and create a Blob URL
            axios
                .get(nft.pdf, { responseType: 'blob' })
                .then((response) => {
                    const blobUrl = URL.createObjectURL(response.data);
                    setPdfBlobUrl(blobUrl);
                })
                .catch((error) => {
                    console.error('Error fetching PDF:', error);
                });
        }
    }, [nft]);

    return (
        <div className='container-fluid'>
            <div className="container">
                <div className='row py-5'>
                    <div className='col-md-6'>
                        {pdfBlobUrl ? (
                            <div
                                style={{
                                    height: '100%',
                                }}
                            >
                                <Viewer fileUrl={pdfBlobUrl} plugins={[defaultLayoutPluginInstance]} />
                            </div>


                        ) : (
                            <img src={nft?.image} alt={nft?.name} className='img-fluid' />
                        )}
                    </div>
                    <div className='col-md-6'>
                        <h3>{nft?.name}</h3>
                        <p>«Philip Roth e as personagens por ele concebidas numa cena histórica contemporânea surgem radicalmente ancoradas num espaço, Newark. Ali se reconhece a especificidade de tecidos sociais e étnicos — com óbvia incidência no microcosmo judaico — que, ao longo do tempo, foram (re)configurando o perfil daquele espaço. E, todavia, a sua obra transcende essas fronteiras geográficas, afirmando-se como uma alegoria crítica da sociedade americana do pós-guerra.» in Contracapa</p>

                    </div>
                </div>
            </div>
        </div>
    );
}
