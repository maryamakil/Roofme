import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import PieceBien from "../Components/PieceBien";
import Caracteristiques from "../Components/Caracteristiques";
import Consommation from "../Components/Consommation";
import Carte from "../Components/Carte";

class Bien extends React.Component {

    render() {
        return (
            <div>
                <div className="d-flex justify-content-between">
                    <h2>
                        Saint-Sulpice-la-Forêt(35250)
                    </h2>
                    <h2>
                        5A rue Raoul de la Futaye
                    </h2>
                </div>

                <div className="d-flex justify-content-between">
                    <h2>
                        Maison - 87 m² - 4 pièces
                    </h2>

                    <h2 className="text-danger">
                        217 200 € <small>(dont 4 344€ d'honoraires)</small>
                    </h2>
                </div>
                <hr />
                <h1>Pièces du bien</h1>
                <PieceBien />
















                <h1>Caractéristiques</h1>
                <Caracteristiques />







                <Consommation />



                <Carte />








            </div>


        );
    };
}

export default Bien;

