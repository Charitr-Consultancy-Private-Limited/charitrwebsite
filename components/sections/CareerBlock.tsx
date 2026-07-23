import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CareerBlock() {
  return (
    <div className="career-block">
      <p className="eyebrow">Careers at Charitr</p>
      <h2>Build technology that creates practical impact.</h2>
      <p>We currently have one full-time opening in Chennai. The role title will be published once confirmed.</p>
      <Link className="text-link" href="/careers">View the opportunity <ArrowRight size={17} /></Link>
    </div>
  );
}

