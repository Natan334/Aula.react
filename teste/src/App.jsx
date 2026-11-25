
import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dragonball from "./pages/dragonboll";
import Pokemon from "./pages/pokemon";
import Filme from "./pages/filme";
import TheButton from "./component/theButton";
import "./index.css";
import "./App.css";

function App() {

    const [text, setText] = useState(() => {
        return localStorage.getItem("easy-input") || "";
    });

    const [dark, setDark] = useState(false);

    useEffect(() => {
        localStorage.setItem("easy-input", text);
    }, [text]);

    return (
        <BrowserRouter>
            <div className={dark ? "dark" : "light"}>

                <TheButton
                    dark={dark}
                    onToggle={() => setDark(!dark)}
                />

                <Routes>
                    <Route path="/" element={<Dragonball />} />
                    <Route path="/filme" element={<Filme />} />
                    <Route path="/pokemon" element={<Pokemon />} />
                </Routes>

                <section className="card">
                    <h2>UseEffect: LocalStorage</h2>

                    <p>
                        O que você digitar será salvo automaticamente.
                    </p>

                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Digite algo..."
                    />
                </section>

            </div>
        </BrowserRouter>
    );
}

export default App;
