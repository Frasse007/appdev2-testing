import './Hero.css';
import { Link } from 'react-router-dom'

function Hero ({ title, subtitle, heroImage, callToAction, ctaLink = '/products' }) {
    return (
        <section className='hero' style={{ backgroundImage: `url(${heroImage})` }}>
            <div className='hero-overlay'>
                <h1 className='title'>{title}</h1>
                <p className='subtitle'>{subtitle}</p>
                <Link to={ctaLink} className='cta-button'>{callToAction}</Link>
            </div>
        </section>
    );
}

export default Hero;