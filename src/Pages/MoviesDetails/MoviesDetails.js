import React from 'react'
import { img_300, unavailable } from "../../config/config";

const MoviesDetails = (props) => {
    console.log(props)
    const { original_title, overview, poster_path, title } = props.location.state.mydata
    return (
        <div>
            <h1>Movies Detail</h1>
            <img src={poster_path ? `${img_300}${poster_path}` : unavailable} alt={title} />
            <h2>{original_title}</h2>
            <p>{overview}</p>

        </div>
    )
}

export default MoviesDetails
