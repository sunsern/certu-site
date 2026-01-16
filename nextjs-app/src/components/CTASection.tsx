'use client';

import { useEffect, useRef } from 'react';

export default function CTASection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll('.fade-in');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="cta-section" id="contact" ref={sectionRef}>
            <div className="container">
                <h2 className="cta-section__title fade-in">Ready to transform<br />your logistics?</h2>
                <p className="cta-section__desc fade-in">
                    Contact us today to learn more about our innovative solutions and expert services.
                </p>
                <a href="mailto:sales@certusystems.com" className="cta-section__btn fade-in">Get Started</a>
            </div>
        </section>
    );
}
