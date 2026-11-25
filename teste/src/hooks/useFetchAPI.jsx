
import axios from "axios";
import { useState, useEffect } from "react";

export default function useFetchAPI(url, char = "") {
    const [ret, setRet] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                setError(false);

                const resposta = await axios.get(`${url}${char}`);

                setRet(resposta.data);
            } catch (error) {
                setError(true);
                console.error("Erro ao carregar API", error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [url, char]);

    return { loading, error, ret };
}
