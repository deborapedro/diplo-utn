import'../stylo/home.css';

import React from 'react';
const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="imag/img/home/img01.jpg" alt="avion" />
            </div>
            <div className="columnas">
                <div classename="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>Lorem mvbjujfjjfjgfnmbnmgnmbn
                        fhffbnnffjjkfvmfbigbmbmbmbbfbfbffgf

                    </p>



                </div>
                <div className="testimonio right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente excelente

                        </span>
                        <span className="autor">Juan Perez</span>

                    </div>

                </div>

            </div>

        </main>

    );
}
export default HomePage;