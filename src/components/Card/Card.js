import React from 'react'
import { img_300, unavailable } from "../../config/config";
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({
    poster,
    title,
    date,
    media_type,
    vote_average,
    fulldata

}) => {
    
    return (
        <>
            <div className="col-md-3 col-6 mt-3 mb-3">
                <Link to={{ pathname: `/movies-detail/${title}`, state: { mydata: fulldata } }}>
                    <div className="card">
                        <img className="card-img-top" src={poster ? `${img_300}${poster}` : unavailable} alt={title} />
                        <div className="card-body">
                            <h3 className="card-title ">{title}</h3>
                            <h5 className="card-text text-center">{media_type === "tv" ? "TV Series" : "Movie"} <span className="badge badge-dark">{date}</span> </h5>
                            <h5 className="card-text text-center">Rating : <span className="badge badge-light" style={{ background: 'red', color: '#fff' }}>{vote_average}</span></h5>


                        </div>

                    </div>
                </Link>

            </div>
        </>
    )
}

export default Card
