
import useFetchAPI from "../hooks/useFetchAPI";

export default function MyFilme() {
    const { loading, error, ret } = useFetchAPI(
        "https://www.omdbapi.com/?t=Batman&apikey=8f5b701b"
    );

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Ocorreu um erro!</div>;
    }

    if (!ret) {
        return <div>Nenhum filme encontrado.</div>;
    }

    const filme = ret;

    return (
        <div id="docs">
            <h2>Filme que gostei</h2>

            <p>{filme.Title}</p>

            <img
                src={filme.Poster}
                width="170"
                alt={filme.Title}
            />

            <p>{filme.Ratings?.[1]?.Source}</p>

            <p>{filme.Ratings?.[1]?.Value}</p>
        </div>
    );
}
