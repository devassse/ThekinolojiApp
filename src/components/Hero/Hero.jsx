import './Hero.css'
import main_new_img from '../../assets/imgs/news/iphone-15.jpeg'
import ps5_fat from '../../assets/imgs/news/ps5-pro.jpeg'

const Hero = () => {
    return (
        <>
            <section className="hero-section">
                <article className="main-new">
                    <div className="main-new-container">
                        <div className="main-new-content">
                            <h2>Apple lança sua mais recente linha de iPhone: 17 Pro & 17 Air</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
                                voluptas nostrum facere architecto dolorum nemo, maiores optio sunt
                                necessitatibus deserunt magnam at ex neque vel delectus molestias dicta.
                            </p>
                            <a href="#">Ler mais...</a>
                        </div>
                        <img src={main_new_img} alt="iPhone 17 Air" />
                    </div>
                </article>
                <article className="hero-news">
                    <div className="hero-new">
                        <div className="hero-new-content">
                            <h3>Sony PS5 Pro 30th Anniversary</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nam 
                                quia beatae quas ex culpa, rerum ipsam nostrum modi vel voluptatem.
                            </p>
                            <a href="#">Ler mais...</a>
                        </div>
                        <img src={ps5_fat} alt="PS5 Fat" />
                    </div>
                    <div className="hero-new">
                        <div className="hero-new-content">
                            <h3>Sony PS5 Pro 30th Anniversary</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nam 
                                quia beatae quas ex culpa, rerum ipsam nostrum modi vel voluptatem.
                            </p>
                            <a href="#">Ler mais...</a>
                        </div>
                        <img src={ps5_fat} alt="PS5 Fat" />
                    </div>
                    <div className="hero-new">
                        <div className="hero-new-content">
                            <h3>Sony PS5 Pro 30th Anniversary</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nam 
                                quia beatae quas ex culpa, rerum ipsam nostrum modi vel voluptatem.
                            </p>
                            <a href="#">Ler mais...</a>
                        </div>
                        <img src={ps5_fat} alt="PS5 Fat" />
                    </div>
                    <div className="hero-new">
                        <div className="hero-new-content">
                            <h3>Sony PS5 Pro 30th Anniversary</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nam 
                                quia beatae quas ex culpa, rerum ipsam nostrum modi vel voluptatem.
                            </p>
                            <a href="#">Ler mais...</a>
                        </div>
                        <img src={ps5_fat} alt="PS5 Fat" />
                    </div>
                    
                </article>
            </section>
            <section className="adds-on-hero">
                <div className="adds">
                    <h4>Adds Here</h4>
                </div>
            </section>
        </>
    )
}

export default Hero