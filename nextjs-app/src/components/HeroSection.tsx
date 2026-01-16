'use client';

import Link from 'next/link';
import { useParallax } from '@/hooks/useParallax';
import ScrollToExplore from '@/components/ScrollToExplore';

export default function HeroSection() {
    const {
        contentOpacity,
        contentScale,
        contentTranslateY,
        backgroundTranslateY,
        indicatorOpacity,
    } = useParallax();

    return (
        <section className="hero" id="home">
            {/* Video Background */}
            <div
                className="hero__background"
                style={{
                    transform: `translateY(${backgroundTranslateY}px)`,
                }}
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hero__video"
                >
                    <source src="./hero-video.mp4" type="video/mp4" />
                </video>
            </div>
            {/* Dark Overlay */}
            <div className="hero__overlay" />

            <div className="container">
                <div
                    className="hero__content"
                    style={{
                        opacity: contentOpacity,
                        transform: `translateY(${contentTranslateY}px) scale(${contentScale})`,
                    }}
                >
                    <h1 className="hero__title">
                        AI-Powered Automation<br />
                        <span className="hero__title-highlight">for Every Decision</span>
                    </h1>
                    <p className="hero__subtitle">
                        Our platform powers real-time, AI-driven decisions in logistics operations,
                        from the warehouse floor to the delivery network.
                    </p>
                    <Link href="#platform" className="hero__cta">
                        Get Started
                    </Link>
                </div>
            </div>

            <ScrollToExplore targetId="#stats" />
        </section>
    );
}
