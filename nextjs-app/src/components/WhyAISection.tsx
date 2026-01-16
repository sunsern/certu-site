'use client';

import { useEffect, useRef } from 'react';

const todaysReality = [
    "Reactive tools that tell you what happened — after it happened",
    "Rely on rules, spreadsheets, and hours of human input",
    "Dashboards mistaken for control",
    "Manual work disguised as process",
];

const certuDifference = [
    "Predictive instead of reactive — act before problems hit",
    "Self-learning instead of rules-based — adapts in real time",
    "Execution, not just alerts — replans and reschedules automatically",
    "Scales without headcount — operations grow, not your planning team",
];

export default function WhyAISection() {
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
        <section className="section section--dark why-ai" id="why-ai" ref={sectionRef}>
            <div className="section__background">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80" alt="" />
                <div className="section__overlay section__overlay--dark"></div>
            </div>
            <div className="container">
                <div className="why-ai__header fade-in">
                    <h2 className="why-ai__title">Why AI-Driven Logistics</h2>
                    <p className="why-ai__subtitle">
                        Most platforms show you where your trucks are.
                        Certu shows you where and how they should go — and sends them there.
                    </p>
                </div>

                <div className="grid grid--2">
                    <div className="why-card fade-in">
                        <h3 className="why-card__title">Today&apos;s Reality</h3>
                        <ul className="why-card__list why-card__list--negative">
                            {todaysReality.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="why-card why-card--highlight fade-in">
                        <h3 className="why-card__title">Certu Difference</h3>
                        <ul className="why-card__list why-card__list--positive">
                            {certuDifference.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="testimonial fade-in">
                    <blockquote className="testimonial__quote">
                        &quot;We thought we needed better visibility. What we really needed was better decisions.&quot;
                    </blockquote>
                    <cite className="testimonial__cite">— VP of Logistics, Multinational Beverage Manufacturer</cite>
                </div>
            </div>
        </section>
    );
}
