import React from 'react'
import { img_300, unavailable } from "../../config/config";
import './Card.css'

const Card = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
  }) => {
    return (
        <>
            <div className="col-md-3 mt-3 mb-3">

                <div className="card">
                    <img className="card-img-top" src={poster ? `${img_300}${poster}` : unavailable} alt={title} />
                    <div className="card-body">
                    <h4 className="card-text">{media_type === "tv" ? "TV Series" : "Movie"} <span className="badge badge-dark">{date}</span> </h4>
                        <span className="card-title">{title}</span> 
                        
                        
                        
                        
                    </div>
                </div>

            </div>
        </>
    )
}

export default Card
