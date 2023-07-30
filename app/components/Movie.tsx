import React from 'react'
import Image from 'next/image'
type Props = {
    title: string;
    poster_path: string;
    overview: string;
    vote_average: number;
}

function Movie({ title, poster_path, overview, vote_average }: Props) {
    const ImagesApi = "https://image.tmdb.org/t/p/w1280";
    const setVoteClass = (vote: number) => {
        if (vote >= 8) {
            return "green";
        } else if (vote >= 6) {
            return "orange";
        } else {
            return "red";
        }
    };

    return (
        <div className="movie">
            <img
                src={
                    poster_path
                        ? ImagesApi + poster_path
                        : "https://indianfolk.com/wp-content/uploads/2018/10/Movie.jpg"
                }
                alt={title}
            />
            <div className="movie-info font-bold text-white">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>
                    {vote_average}
                </span>
            </div>
            <div className="movie-over">
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Movie