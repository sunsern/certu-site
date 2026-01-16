'use client';

import { useEffect, useRef } from 'react';

const features = [
    {
        title: 'API-first. ERP-ready.',
        desc: 'Connect to your TMS, WMS, ERP, or custom tools in days — not months.',
    },
    {
        title: 'Real-time data sync',
        desc: 'Orders, routes, carriers, SLAs — always up to date.',
    },
    {
        title: 'Secure by design',
        desc: 'End-to-end encryption, role-based access, enterprise compliance.',
    },
    {
        title: 'No disruption. No retraining.',
        desc: 'Your team works where they already work. Certu runs behind the scenes.',
    },
];

export default function IntegrationSection() {
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
        <section className="section integration" id="integration" ref={sectionRef}>
            <div className="container">
                <div className="integration__content fade-in">
                    <h2 className="integration__title">Built To Fit. Engineered To Trust.</h2>
                    <p className="integration__subtitle">
                        It works with what you already use. No rip-and-replace. No custom dashboards. No delays.
                        Certu plugs into your stack — and gets to work.
                    </p>

                    <div className="integration__features">
                        {features.map((feature, index) => (
                            <div key={index} className="integration-feature">
                                <h4 className="integration-feature__title">{feature.title}</h4>
                                <p className="integration-feature__desc">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
