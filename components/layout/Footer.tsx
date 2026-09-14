import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { capabilities, contact, navigation, solutions } from "@/data/site";
import { BrandMark } from "@/components/ui/BrandMark";
import { CookieSettingsButton } from "@/components/privacy/CookieConsent";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-intro">
          <Link href="/" className="brand brand--inverse" aria-label="Charitr home">
            <BrandMark inverse />
          </Link>
          <p>Software development and digital solutions for organisations in India and internationally.</p>
          <div className="footer-contact">
            <a href={contact.phoneHref}><Phone size={17} />{contact.phone}</a>
            <a href={contact.emailHref}><Mail size={17} />{contact.email}</a>
            <span><MapPin size={17} />Delhi · Chennai · Kochi</span>
          </div>
        </div>
        <div>
          <h2>Explore</h2>
          <ul>{navigation.slice(1).map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul>
        </div>
        <div>
          <h2>Services</h2>
          <ul>{capabilities.map((item) => <li key={item.slug}><Link href={`/capabilities/${item.slug}`}>{item.title}</Link></li>)}</ul>
        </div>
        <div>
          <h2>Solutions</h2>
          <ul>{solutions.map((item) => <li key={item.slug}><Link href={`/solutions#${item.slug}`}>{item.title}</Link></li>)}</ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Charitr Consultancy Private Limited.</p>
        <nav aria-label="Legal">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
          <Link href="/terms-of-use">Terms of Use</Link>
          <CookieSettingsButton />
        </nav>
      </div>
    </footer>
  );
}
