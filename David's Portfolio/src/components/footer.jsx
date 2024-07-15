import '../footer.css'

function Footer() {
    return(
        <footer id="footer">
        <div className="background">
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="100%"
                height="100%"
                viewBox="0 0 1600 900"
            >
                <defs>
                    <path id="wave" fill="#d8f8e4" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"/>
                </defs>
                <g>
                    <use xlinkHref="#wave" opacity=".4">
                        <animateTransform
                            attributeName="transform"
                            attributeType="XML"
                            type="translate"
                            dur="8s"
                            calcMode="spline"
                            values="270 230; -334 180; 270 230"
                            keyTimes="0; .5; 1"
                            keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                            repeatCount="indefinite"
                        />
                    </use>
                    <use xlinkHref="#wave" opacity=".6">
                        <animateTransform
                            attributeName="transform"
                            attributeType="XML"
                            type="translate"
                            dur="6s"
                            calcMode="spline"
                            values="-270 230;243 220;-270 230"
                            keyTimes="0; .6; 1"
                            keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                            repeatCount="indefinite"
                        />
                    </use>
                    <use xlinkHref="#wave" opacity=".9">
                        <animateTransform
                            attributeName="transform"
                            attributeType="XML"
                            type="translate"
                            dur="4s"
                            calcMode="spline"
                            values="0 230;-140 200;0 230"
                            keyTimes="0; .4; 1"
                            keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                            repeatCount="indefinite"
                        />
                    </use>
                </g>
            </svg>
        </div>
        <section>
            <div className="row align-items-bottom">
                <div className="col-auto my-4">
                    <ul className="links mb-1">
                        <li>
                            <a href="./index.html">Home</a>
                        </li>
                        <li>
                            <a href="developers.html">Developers</a>
                        </li>
                    </ul>
                    <p className="legal">© 2024 All rights reserved</p>
                    </div>
            </div>
        </section>
    </footer>
    )
}

export default Footer;