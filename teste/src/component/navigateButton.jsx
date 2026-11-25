
import { Link } from "react-router-dom";

function NavigateButton({ path, nome }) {
    return (
        <Link to={path} className="navigate-button">
            {nome}
        </Link>
    );
}

export default NavigateButton;
