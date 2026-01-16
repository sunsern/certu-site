'use client';

import { useEffect, useRef } from 'react';

export default function VideoSection() {
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
        <section className="section video-section" id="video" ref={sectionRef}>
            <div className="container">
                <div className="video-header fade-in">
                    <h2 className="video-title">See Certu in Action</h2>
                    <p className="video-subtitle">Watch how our AI-powered platform transforms logistics operations.</p>
                </div>
                <div className="video-container fade-in">
                    <video autoPlay loop muted playsInline className="video-player">
                        <source src="./video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
}
