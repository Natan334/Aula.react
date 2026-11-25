
import useFetchAPI from "../hooks/useFetchAPI";

export default function MyPet() {
    const { loading, error, ret } = useFetchAPI(
        "https://pokeapi.co/api/v2/pokemon/",
        "gengar"
    );

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Ocorreu um erro!</div>;
    }

    if (!ret || !ret.sprites) {
        return <div>Pokémon não encontrado!</div>;
    }

    return (
        <div id="social">
            <h2>Meu pet</h2>

            <p>{ret.name}</p>

            <img
                src={ret.sprites.front_default}
                width="300"
                height="300"
                alt={ret.name}
            />

            <p>{ret.types?.[0]?.type?.name}</p>
        </div>
    );
}
