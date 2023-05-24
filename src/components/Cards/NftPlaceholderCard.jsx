import React from 'react'

export default function NftPlaceholderCard() {
    return (
        <div className="card shadow m-2">
            <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
            </p>
            <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
            </p>
            <svg
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="12rem"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
            >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96"></rect>
            </svg>
        </div>
    )
}
