import React, { useState, useEffect } from 'react'
import Card from '../../components/Card/Card'

function Trending() {

    const [data, setData] = useState([])

    const getData = async () => {

        const res = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=b278160cf43c03c878828e19e9e271b0')
        const res1 = await res.json();
        console.log(res1.results);
        setData(res1.results)

    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <>
            <h1>Trending Lists</h1>

            <div className="row">

                {
                    data.map((items) => {
                        return <Card key={items.id}
                            id={items.id}
                            poster={items.poster_path}
                            title={items.title || items.name}
                            date={items.first_air_date || items.release_date}
                            media_type={items.media_type}
                            vote_average={items.vote_average}

                        />
                    })
                }
            </div>
        </>
    )
}

export default Trending
