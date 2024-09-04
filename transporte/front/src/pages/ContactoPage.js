import'../stylo/contacto.css';


import React from 'react';
const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rapido</h2>
                <form className="formulario" action="" method="">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="texto" />

                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="texto" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="texto" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea></textarea>
                    </p>
                    <p className="acciones"><input type="submit" value="Enviar" />

                    </p>

                </form>
            </div>
            <div className="datos">
                <h2>Otras vias de comunicacion</h2>
                <p>Tambien puedes contactarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li>Telefono: 43242388</li>
                    <li>Email : contactos@transportex.com.ar</li>
                    <li>Facebook:</li>
                    <li>Twitter:</li>
                    <li>Skype:</li>
                </ul>

            </div>

        </main>
    );
}
export default ContactoPage;