import './Rodape.css'

const Rodape = () => {
    return(<footer className='footer'>

        <section>
        <ul>
                <li>
                    <a src="facebook.com" target="blank">
                        <img src="/imagens/facebook.png" alt="" />
                    </a>
                </li>
                <li>
                    <a src="twitter.com" target="_blank">
                        <img src="/imagens/twitter.jpeg" alt="" />
                    </a>
                </li>
                <li>
                    <a src="instagram.com" target="_blank">
                        <img src="/imagens/instagram.jpeg" alt="" />
                    </a>
                </li>
            </ul>
        </section>

        <section>
            <img src="/imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Alura.
            </p>
        </section>

    </footer>)
}
export default Rodape
