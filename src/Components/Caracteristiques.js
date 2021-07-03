import React, { Component } from 'react';

function Caracteristiques() {
    return (
        <div>

            <div className="card">
                <div className="card-header bg-transparent">
                    <h3>Informations essentielles</h3>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto fw-bold">
                                        Superficie du terrain
                                    </div>
                                    <span className="text-sm">250 m²</span>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto fw-bold">
                                        Chauffage
                                    </div>
                                    <span className="text-sm">Poêle à bois et électrique</span>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto fw-bold">
                                        Mitoyenneté
                                    </div>
                                    <span className="text-sm">1/2</span>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto fw-bold">
                                        Arrivées d'énergie
                                    </div>
                                    <span className="text-sm">Électricité, Gaz</span>
                                </li>


                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto fw-bold">
                                        Sécurité
                                    </div>
                                    <span className="text-sm">Porte 3 point</span>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto fw-bold">
                                        Diagnostic PE <span className="badge bg-secondary rounded-pill ml-3">?</span>
                                    </div>
                                    <span className="text-sm">Non renseigné</span>
                                </li>


                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto fw-bold">
                                        Servitude
                                    </div>
                                    <span className="text-sm">Non</span>
                                </li>

                            </ul>
                        </div>

                        <div className="col-md-6">
                            <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto fw-bold">
                                        Nombre d'étages du bien
                                    </div>
                                    <span className="text-sm">1</span>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto fw-bold">
                                        Année de construction
                                    </div>
                                    <span className="text-sm">2004</span>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto fw-bold">
                                        Toiture
                                    </div>
                                    <span className="text-sm">Ardoise</span>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto fw-bold">
                                        Accès à internet
                                    </div>
                                    <span className="text-sm">ADSL</span>
                                </li>


                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto fw-bold">
                                        Accès PMR <span className="badge bg-secondary rounded-pill ml-3">?</span>
                                    </div>
                                    <span className="text-sm">Oui (rez-de-chaussée seulement)</span>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto fw-bold">
                                        Diagnostic GES <span className="badge bg-secondary rounded-pill ml-3">?</span>
                                    </div>
                                    <span className="text-sm">Non renseigné</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Caracteristiques;
