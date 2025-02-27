// Navbar.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow top-0">
            <div className="container">
                <a className="navbar-brand" href="#">
                    Filevista
                </a>
                <button className="navbar-toggler"
                    type="button" data-toggle="collapse"
                    data-target="#navbarNav" aria-controls="navbarNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link">Documents</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/AddDocument">
                                <a className="nav-link">Add New Document</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
