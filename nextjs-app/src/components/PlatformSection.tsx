'use client';

import { useEffect, useRef } from 'react';

const features = [
    {
        number: '1',
        title: 'AI Planning',
        desc: 'Fully automated AI-powered shipment planning that balances cost, priority, time, and constraints — in minutes, not hours.',
    },
    {
        number: '2',
        title: 'Automated Assignment',
        desc: 'Assign the right truck, carrier, or driver — instantly. With smart rules, fallback logic, and full transparency.',
    },
    {
        number: '3',
        title: 'Proactive Monitoring',
        desc: 'Real-time visibility across every order, shipment, fleet. One screen. No switching. No guesswork.',
    },
    {
        number: '4',
        title: 'Continuous Improvement',
        desc: 'See your cost to serve. Spot failure patterns. Optimize per region, product, and customer — proactively.',
    },
];

export default function PlatformSection() {
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
        <section className="section platform" id="platform" ref={sectionRef}>
            <div className="container">
                <div className="platform__header fade-in">
                    <h2 className="platform__title">Certu AI Platform</h2>
                    <p className="platform__subtitle">
                        Built Around the Order Journey. Not an ERP. Not a TMS. Not just visibility.
                        Certu solves the daily chaos that drains your team and erodes your margins.
                    </p>
                </div>

                <div className="platform-features">
                    {features.map((feature, index) => (
                        <div key={index} className="platform-feature fade-in" style={{ transitionDelay: `${index * 0.1}s` }}>
                            <span className="platform-feature__number">{feature.number}</span>
                            <h3 className="platform-feature__title">{feature.title}</h3>
                            <p className="platform-feature__desc">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
