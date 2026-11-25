
import { useState } from "react";
import useFetchAPI from "../hooks/useFetchAPI";

export default function MyPetRandom() {

    const [pokemonId, setPokemonId] = useState(
        () => Math.floor(Math.random() * 1025) + 1
    );

    const { loading, error, ret } = useFetchAPI(
        "https://pokeapi.co/api/v2/pokemon/",
        String(pokemonId)
    );

    function gerarPokemon() {
        let novoId;

        do {
            novoId = Math.floor(Math.random() * 1025) + 1;
        } while (novoId === pokemonId);

        setPokemonId(novoId);
    }

    if (loading) {
        return <div>Carregando Pokémon...</div>;
    }

    if (error) {
        return <div>Ocorreu um erro ao buscar o Pokémon!</div>;
    }

    if (!ret || !ret.sprites) {
        return <div>Pokémon não encontrado!</div>;
    }

    return (
        <div id="social">
            <h2>Pokémon aleatório</h2>

            <h3>{ret.name}</h3>

            <img
                src={ret.sprites.front_default}
                width="250"
                height="250"
                alt={ret.name}
            />

            <p>Tipo: {ret.types?.[0]?.type?.name}</p>

            <p>Número: {ret.id}</p>

            <button onClick={gerarPokemon}>
                Sortear outro Pokémon
            </button>
        </div>
    );
}
