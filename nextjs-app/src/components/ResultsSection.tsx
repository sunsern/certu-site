'use client';

import { useEffect, useRef } from 'react';

const results = [
    {
        role: 'For Logistics Directors',
        desc: 'Plan in seconds. No spreadsheets. No load boards. Just shipments that build themselves.',
    },
    {
        role: 'For Supply Chain Leaders',
        desc: 'From fire drills to flow. One system to plan, execute, and optimize — across all regions, modes, and partners.',
    },
    {
        role: 'For CFOs & Ops Executives',
        desc: 'Lower cost-to-serve. Fewer people doing more. Full control over every mile, every cost, every SLA.',
    },
];

export default function ResultsSection() {
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
        <section className="section results" id="results" ref={sectionRef}>
            <div className="container">
                <div className="results__header fade-in">
                    <h2 className="results__title">Results. Delivered.</h2>
                    <p className="results__subtitle">
                        Certu is for teams who are done managing complexity — and ready to let go.
                    </p>
                </div>

                <div className="results-grid">
                    {results.map((result, index) => (
                        <div key={index} className="result-card fade-in" style={{ transitionDelay: `${index * 0.1}s` }}>
                            <h4 className="result-card__role">{result.role}</h4>
                            <p className="result-card__desc">{result.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
