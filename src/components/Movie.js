import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
    const [movie, setMovie] = useState({});
    let { id } = useParams();

    useEffect(() => {
        let myMovie = {
            id: 2,
            title: "Raiders of the Lost Ark",
            release_date: "1981-06-12",
            runtime: 115,
            mpaa_rating: "PG-13",
            description: "Some long description",
        };
        setMovie(myMovie);
    }, [id])
    return (
        <div>
            <h2>Movie: {movie.title}</h2>
            <small><em>{movie.release_date}, {movie.runtime} minutes, Rated {movie.mpaa_rating}</em></small>
            <hr />
            <p>{movie.description}</p>
        </div >
    )
}

export default Movie;