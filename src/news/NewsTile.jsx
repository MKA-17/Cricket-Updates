import React from 'react'

export default function NewsTile({id, url, title, urlToImage, content, publishedAt }) {
    return (
        // <a href={url} target="_blank" rel="noopener noreferrer" className="news-tile">

        <div id={id} className="news-tile" onClick={() => {
            window.open(url, "_blank");
        }}>
            <img className="news-image" src={urlToImage} alt="News" />
            <div className="news-content">
                <div className="news-title">{title}</div>
                <div className="news-description">{content}</div>
                <br />
                <div>{publishedAt}</div>
            </div>

        </div>
        // </a>
    )
}
