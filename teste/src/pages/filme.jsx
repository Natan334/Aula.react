
import MyName from '../component/MyName';
import MovieTe from '../component/listMovie';
import MyFilme from '../component/myFilme';
import NavigateButton from '../component/navigateButton';
import '../App.css';

export default function Filme() {
    return (
        <section id="center">
            <div className="hero">

                <NavigateButton path="/pokemon" nome="Pet" />
                <NavigateButton path="/filme" nome="Filme" />
                <NavigateButton path="/" nome="DBZ" />

                <MyName />
                <MovieTe />
                <MyFilme />

            </div>
        </section>
    );
}
