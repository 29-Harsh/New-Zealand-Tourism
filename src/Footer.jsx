import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <a className="copyright">Copyright &copy; Akul Sharma 2022-2023</a>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                                <a href="#something">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#something">
                                    <i className="fa fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#something">
                                    <i className="fa fa-linkedin-in"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-inline quicklinks">
                            <li className="list-inline-item">
                                <a href="#something">Privacy Policy</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#something">Terms of Use</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;