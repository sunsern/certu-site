import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="hero" id="home">
            <div className="hero__background">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80" alt="Supply chain logistics" />
                <div className="hero__overlay"></div>
            </div>

            <div className="container hero__grid">
                <div className="hero__content">
                    <h1 className="hero__title">The Beginning<br />of Certainty</h1>
                    <p className="hero__subtitle">
                        AI-Powered Automation that Pays for Itself from Start to Finish.
                        Take charge of every order, every exception, and every delivery insight – in real time, without the
                        firefighting.
                    </p>

                    <div className="hero__tags">
                        <Link href="#services" className="hero__tag">AI Planning +</Link>
                        <Link href="#services" className="hero__tag">Automated Execution +</Link>
                        <Link href="#services" className="hero__tag">Proactive Optimization +</Link>
                        <Link href="#services" className="hero__tag">Real-Time Monitoring +</Link>
                    </div>
                </div>

                {/* Featured Card */}
                <div className="hero__featured">
                    <div className="hero__featured-image">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80" alt="AI logistics dashboard" />
                    </div>
                    <div className="hero__featured-content">
                        <span className="label hero__featured-label">MEET CERTU</span>
                        <h3 className="hero__featured-title">The AI Engine for Seamless Logistics</h3>
                        <p className="hero__featured-desc">Predictable Logistics, Powered by AI. A single Platform. Infinite Control.</p>
                        <Link href="#platform" className="hero__featured-link">
                            Explore Platform
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
