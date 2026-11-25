
import React from "react";
import useFetchAPI from "../hooks/useFetchAPI";

export default function MyMovie() {
    const { loading, error, ret } = useFetchAPI(
        "https://www.omdbapi.com/?t=Avengers&apikey=8f5b701b"
    );

    if (loading) {
        return <div>Carregando filme...</div>;
    }

    if (error) {
        return <div>Ocorreu um erro ao buscar o filme!</div>;
    }

    if (!ret || ret.Response === "False") {
        return <div>Filme não encontrado.</div>;
    }

    const filme = ret;

    return (
        <div id="movie">
            <h2>Outro filme que gostei</h2>

            <h3>{filme.Title}</h3>

            <img
                src={filme.Poster}
                width="170"
                alt={filme.Title}
            />
        </div>
    );
}
