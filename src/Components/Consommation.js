import React, { Component } from 'react';

function Consommation() {
    return (
        <div>

            <div className="card mt-3">
                <div className="card-header bg-transparent">
                    <h3>Consommation</h3>
                </div>
                <div className="card-body">
                    <h4>Dépenses énergétiques 148 € / mois</h4>
                    <div className="mt-3">
                        <span className="bg-warning rounded-pill ml-3 h5 py-1 px-3 text-white">Électricité 100€</span>
                        <span className="bg-primary rounded-pill ml-3 h5 py-1 px-3 text-white">Eau 20€</span>
                        <span className="bg-danger rounded-pill ml-3 h5 py-1 px-3 text-white">Poêle à bois 25€</span>
                        <span className="bg-success rounded-pill ml-3 h5 py-1 px-3 text-white">Gaz 3€</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Consommation;
