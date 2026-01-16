'use client';

interface ScrollToExploreProps {
    targetId?: string;
}

export default function ScrollToExplore({ targetId = '#stats' }: ScrollToExploreProps) {
    const handleClick = () => {
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button
            className="scroll-indicator"
            onClick={handleClick}
            aria-label="Scroll to explore"
        >
            <span className="scroll-indicator__text">Scroll to Explore</span>
            <span className="scroll-indicator__arrow">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </span>
        </button>
    );
}
