import React from 'react'
import { Link } from 'react-router-dom'

export default function NftCard({ nft }) {
    return (
        <Link to={`/nft/${nft.id}`}>
            <div className="card shadow p-2">
                <img
                    src={nft.image}
                    alt={`NFT ${nft.id}`}
                    className="nft-image"
                />
                <p className='mb-0'>NFT ID: {nft.id}</p>
                <p className='mb-0'>NFT Name: {nft.name}</p>
            </div>
        </Link>
    )
}
