'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const services = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
        ),
        title: 'AI-Powered Planning',
        desc: 'No spreadsheets. No guesswork. Dynamically plans shipments based on real-time constraints: cost, capacity, delivery windows, and service levels.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
        title: 'Automated Execution',
        desc: 'No firefighting. No micro-management. Auto-assigns carriers, builds optimal loads, and responds automatically to disruptions in real time.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
            </svg>
        ),
        title: 'Proactive Optimization',
        desc: 'Continuously monitors cost, route efficiency, and SLA performance. Benchmarks across regions, carriers, and customers.',
    },
];

export default function ServicesSection() {
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
        <section className="section services" id="services" ref={sectionRef}>
            <div className="container">
                <div className="services__header fade-in">
                    <h2 className="services__title">Core Services</h2>
                    <p className="services__subtitle">
                        From planning to delivery — Certu automates the complexity of logistics
                        across the globe, at scale, with local precision.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card fade-in" style={{ transitionDelay: `${index * 0.1}s` }}>
                            <div className="service-card__icon">{service.icon}</div>
                            <h3 className="service-card__title">{service.title}</h3>
                            <p className="service-card__desc">{service.desc}</p>
                            <Link href="#contact" className="service-card__link link-arrow">
                                Learn more
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
