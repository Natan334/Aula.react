
import CharDBZ from "../component/charDBZ";
import MyName from "../component/MyName";
import NavigateButton from "../component/navigateButton";
import "../App.css";

function Dragonball() {
    return (
        <section id="center">
            <div className="center">

                <NavigateButton path="/pokemon" nome="Pet" />
                <NavigateButton path="/filme" nome="Filme" />
                <NavigateButton path="/" nome="DBZ" />

                <MyName />
                <CharDBZ />

            </div>
        </section>
    );
}

export default Dragonball;
