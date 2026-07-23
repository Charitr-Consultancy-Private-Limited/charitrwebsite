import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__visual"><Compass size={54} /><span>404</span></div>
      <p className="eyebrow">Page not found</p>
      <h1>This path does not lead to a page.</h1>
      <p>The page may have moved, or the address may be incorrect.</p>
      <Link className="button" href="/"><ArrowLeft size={18} />Return home</Link>
    </section>
  );
}

