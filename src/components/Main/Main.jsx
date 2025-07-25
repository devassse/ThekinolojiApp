import "./Main.css"
import new_logo from "../../assets/imgs/news/ai-notes.jpeg"

const Main = () => {
    return (
        <>
            <main className='main-container'>

                <section className="main-news-container">
                    <article className="news-container">
                        <header>
                            <h4>Notícias</h4>
                        </header>
                        <a href="#">
                            <article className="main-new new-one">
                                <div className="new-header">
                                    <img src={new_logo} alt="Logo New" />
                                </div>
                                <div className="new-content">
                                    <h5>Nova Tendecia do Mercado</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, orem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <a href="#">Ler mais ...</a>
                                </div>
                            </article>
                        </a>
                        <a href="#">
                            <article className="main-new new-one">
                                <div className="new-header">
                                    <img src={new_logo} alt="Logo New" />
                                </div>
                                <div className="new-content">
                                    <h5>Nova Tendecia do Mercado</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, orem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <a href="#">Ler mais ...</a>
                                </div>
                            </article>
                        </a>
                        <a href="#">
                            <article className="main-new new-one">
                                <div className="new-header">
                                    <img src={new_logo} alt="Logo New" />
                                </div>
                                <div className="new-content">
                                    <h5>Nova Tendecia do Mercado</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, orem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <a href="#">Ler mais ...</a>
                                </div>
                            </article>
                        </a>
                        <a href="#">
                            <article className="main-new new-one">
                                <div className="new-header">
                                    <img src={new_logo} alt="Logo New" />
                                </div>
                                <div className="new-content">
                                    <h5>Nova Tendecia do Mercado</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, orem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <a href="#">Ler mais ...</a>
                                </div>
                            </article>
                        </a>
                        <a href="#">
                            <article className="main-new new-one">
                                <div className="new-header">
                                    <img src={new_logo} alt="Logo New" />
                                </div>
                                <div className="new-content">
                                    <h5>Nova Tendecia do Mercado</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, orem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <a href="#">Ler mais ...</a>
                                </div>
                            </article>
                        </a>
                        <a href="#">
                            <article className="main-new new-one">
                                <div className="new-header">
                                    <img src={new_logo} alt="Logo New" />
                                </div>
                                <div className="new-content">
                                    <h5>Nova Tendecia do Mercado</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, orem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <a href="#">Ler mais ...</a>
                                </div>
                            </article>
                        </a>
                    </article>
                    <article className="analyses-container">
                        <header>
                            <h4>Análises</h4>
                        </header>
                        <a href="#" className="analyze-one">
                            <article className="main-new ">
                                <div className="new-header">
                                    <img src={new_logo} alt="Logo New" />
                                </div>
                                <div className="new-content">
                                    <h5>Nova Tendecia do Mercado</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, orem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit, orem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, orem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <a href="#">Ler mais ...</a>
                                </div>
                            </article>
                        </a>
                        <a href="#" className="analyze-two">
                            <article className="main-new new-one">
                                <div className="new-header">
                                    <img src={new_logo} alt="Logo New" />
                                </div>
                                <div className="new-content">
                                    <h5>Nova Tendecia do Mercado</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    <a href="#">Ler mais ...</a>
                                </div>
                            </article>
                        </a>
                        <a href="#" className="analyze-three">
                            <article className="main-new new-one">
                                <div className="new-header">
                                    <img src={new_logo} alt="Logo New" />
                                </div>
                                <div className="new-content">
                                    <h5>Nova Tendecia do Mercado</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    <a href="#">Ler mais ...</a>
                                </div>
                            </article>
                        </a>
                    </article>


                </section>
                <section className="main-articles-and-tags">

                </section>

            </main>
        </>
    )
}

export default Main