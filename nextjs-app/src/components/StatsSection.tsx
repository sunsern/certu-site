'use client';

import { useEffect, useRef } from 'react';

const stats = [
    {
        number: '50-80%',
        label: 'Less Manual Work',
        desc: 'Free up your team from repetitive operations',
    },
    {
        number: '10-40%',
        label: 'Lower Transportation Costs',
        desc: 'Smarter planning. Fewer miles. Real savings.',
    },
    {
        number: '99%',
        label: 'Full Order Journey Visibility',
        desc: 'Real-time insight with context, timing and action',
    },
    {
        number: '20-60%',
        label: 'Less Inventory',
        desc: 'Powered by AI-driven Replenishment Predictions',
    },
];

export default function StatsSection() {
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
        <section className="section section--stats" id="stats" ref={sectionRef}>
            <div className="section__background">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" alt="" />
                <div className="section__overlay"></div>
            </div>
            <div className="container">
                <div className="stats-header fade-in">
                    <h2 className="stats-title">Built for Results. Proven in the Real World.</h2>
                    <p className="stats-subtitle">No fluff. Just numbers that move the needle.</p>
                </div>
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item fade-in" style={{ transitionDelay: `${index * 0.1}s` }}>
                            <span className="stat-number">{stat.number}</span>
                            <span className="stat-label">{stat.label}</span>
                            <span className="stat-desc">{stat.desc}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
