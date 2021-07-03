import React, { Component } from 'react';
import './logo.css';

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
                        href="index.html">
                        <img src="Images/logo.svg" className="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-flex align-items-center">
                        <form className="w-100 me-3">
                            <input type="search" className="form-control" placeholder="Rechercher annance" aria-label="Search" />
                        </form>

                        <div className="flex-shrink-0 dropdown">
                            <a href="" className="btn btn-dark">VENDRE UN BIEN</a>
                            <a href="" className="btn btn-link text-decoration-none fw-bold text-dark">
                                LES ANNONCES
                            </a>

                            <a href="" className="btn btn-link text-decoration-none text-dark">
                                ESPACE PERSONNEL
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
