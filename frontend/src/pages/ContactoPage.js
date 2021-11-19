import '../styles/components/pages/Contacto.css'

const ContactoPage = (props) => {
    return (
        <main>

            <div className="contacto">
                <h1>Contacto</h1>
                <form className="row g-3 p-3">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <input type="text" className="form-control" placeholder="Nombre" aria-label="First name"/>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <input type="text" className="form-control" placeholder="Apellido" aria-label="Last name"/>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <input type="text" className="form-control" placeholder="Teléfono" aria-label="Last name"/>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <button type="submit" className="btn btn-success">Enviar</button>
                    </div>
                </form>
            </div>
        </main>
    )
}
export default ContactoPage;