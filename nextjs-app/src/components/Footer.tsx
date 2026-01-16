import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <Image src="/logo.png" alt="Certu Systems" className="logo__image" width={120} height={36} />
                        </div>
                        <p className="footer__desc">
                            Enabling optimized logistics that lowers operational costs,
                            cross-functional alignment, and balanced supply and demand.
                        </p>
                        <div className="footer__social">
                            <a href="#" className="footer__social-link" aria-label="LinkedIn">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer__column">
                        <h4 className="footer__column-title">Platform</h4>
                        <ul className="footer__links">
                            <li><Link href="#services" className="footer__link">AI Planning</Link></li>
                            <li><Link href="#services" className="footer__link">Automated Execution</Link></li>
                            <li><Link href="#services" className="footer__link">Proactive Optimization</Link></li>
                            <li><Link href="#platform" className="footer__link">Monitoring & Control</Link></li>
                        </ul>
                    </div>

                    <div className="footer__column">
                        <h4 className="footer__column-title">Company</h4>
                        <ul className="footer__links">
                            <li><Link href="#" className="footer__link">About Us</Link></li>
                            <li><Link href="#results" className="footer__link">Results</Link></li>
                            <li><Link href="#contact" className="footer__link">Contact</Link></li>
                            <li><Link href="#contact" className="footer__link">Request Demo</Link></li>
                        </ul>
                    </div>

                    <div className="footer__column">
                        <h4 className="footer__column-title">Contact</h4>
                        <ul className="footer__links">
                            <li><a href="mailto:sales@certusystems.com" className="footer__link">sales@certusystems.com</a></li>
                            <li><a href="mailto:info@certusystems.com" className="footer__link">info@certusystems.com</a></li>
                        </ul>
                        <h4 className="footer__column-title" style={{ marginTop: '1.5rem' }}>Locations</h4>
                        <ul className="footer__links">
                            <li className="footer__address">USA HQ: 285 Kappa Dr., Ste 140, Pittsburgh, PA 15238</li>
                            <li className="footer__address">Asia: Bangkok, Thailand</li>
                            <li className="footer__address">Mexico: CDMX</li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">&copy; 2025 Certu Systems. All rights reserved.</p>
                    <div className="footer__legal">
                        <Link href="#" className="footer__legal-link">Privacy Policy</Link>
                        <Link href="#" className="footer__legal-link">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
