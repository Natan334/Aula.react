
import MyPet from "../component/myPet";
import MyName from "../component/MyName";
import NavigateButton from "../component/navigateButton";
import MyPetRandom from "../component/myPetRandom";
import "../App.css";

export default function Pokemon() {
    return (
        <section id="center">
            <div className="hero">

                <NavigateButton path="/pokemon" nome="Pet" />
                <NavigateButton path="/filme" nome="Filme" />
                <NavigateButton path="/" nome="DBZ" />
                <MyName />
                <MyPet />
                <MyPetRandom />

            </div>
        </section>
    );
}
