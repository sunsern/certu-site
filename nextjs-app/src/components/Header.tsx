'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const headerHeight = 80;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
        document.body.style.overflow = '';
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
    };

    const navLinks = [
        { href: '#platform', label: 'Platform' },
        { href: '#why-ai', label: 'Why AI' },
        { href: '#services', label: 'Services' },
        { href: '#results', label: 'Results' },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
            <div className="container header__inner">
                <Link href="#" className="logo">
                    <Image src="/logo.png" alt="Certu Systems" className="logo__image" width={120} height={40} />
                </Link>

                <nav className="nav">
                    <ul className="nav__list">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="nav__link" onClick={(e) => handleNavClick(e, link.href)}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href="#contact" className="nav__cta" onClick={(e) => handleNavClick(e, '#contact')}>
                        Request Demo
                    </a>
                </nav>

                <button
                    className="menu-toggle"
                    id="menuToggle"
                    aria-label="Toggle menu"
                    onClick={toggleMobileMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Navigation */}
            <nav className={`nav--mobile ${isMobileMenuOpen ? 'open' : ''}`} id="mobileNav">
                <ul className="nav__list">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="nav__link" onClick={(e) => handleNavClick(e, link.href)}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <a href="#contact" className="nav__cta" onClick={(e) => handleNavClick(e, '#contact')}>
                    Request Demo
                </a>
            </nav>
        </header>
    );
}
