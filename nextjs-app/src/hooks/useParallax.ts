'use client';

import { useState, useEffect, useCallback } from 'react';

interface ParallaxValues {
    scrollY: number;
    contentOpacity: number;
    contentScale: number;
    contentTranslateY: number;
    backgroundTranslateY: number;
    indicatorOpacity: number;
}

export function useParallax(): ParallaxValues {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = useCallback(() => {
        // Use requestAnimationFrame for smooth performance
        requestAnimationFrame(() => {
            setScrollY(window.scrollY);
        });
    }, []);

    useEffect(() => {
        // Set initial scroll position
        setScrollY(window.scrollY);

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // Calculate parallax values based on scroll position
    const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
    const scrollProgress = Math.min(scrollY / viewportHeight, 1);

    return {
        scrollY,
        // Content fades out as we scroll (fully faded at 60% of viewport)
        contentOpacity: Math.max(1 - scrollProgress * 1.6, 0),
        // Content scales down slightly (from 1 to 0.95)
        contentScale: 1 - scrollProgress * 0.05,
        // Content moves up slightly as we scroll
        contentTranslateY: -scrollY * 0.3,
        // Background moves slower than scroll (parallax effect)
        backgroundTranslateY: scrollY * 0.4,
        // Scroll indicator fades out quickly (gone after 100px)
        indicatorOpacity: Math.max(1 - scrollY / 100, 0),
    };
}
