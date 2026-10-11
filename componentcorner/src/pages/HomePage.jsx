import Hero from '../components/Hero'

function HomePage({}) {
    return(
        <main>
            <div className='hero-section'>
                <Hero title="Welcome to Component Corner!" subtitle="Your one stop shop for all your phone needs" heroImage="https://placehold.co/1200x400/8b00b8/ffffff?text=Phone+Shop" callToAction="Shop Now" ctaLink='/products'></Hero>
            </div>
            <section className="about-us-section" style={{ padding: '2rem', textAlign: 'center' }}>
                <h2>Why Shop With Us?</h2>
                <p>We source top-tier tech accessories and custom hardware components with fast shipping and 24/7 customer support.</p>
            </section>
        </main>
    )
};

export default HomePage;