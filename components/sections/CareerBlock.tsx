import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CareerBlock() {
  return (
    <aside className="career-block">
      <p className="eyebrow">Careers</p>
      <h2>Build technology that creates practical impact</h2>
      <p><strong>One full-time opening</strong><span>Chennai</span></p>
      <Link className="text-link" href="/careers">View Careers <ArrowRight size={17} /></Link>
    </aside>
  );
}
