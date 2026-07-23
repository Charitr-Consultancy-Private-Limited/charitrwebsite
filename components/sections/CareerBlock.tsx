import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { careerOpening } from "@/data/careers";

export function CareerBlock() {
  return (
    <div className="career-block">
      <p className="eyebrow">Careers at Charitr</p>
      <h2>Build technology that creates practical impact.</h2>
      <p>We are hiring an {careerOpening.title} for a full-time role in {careerOpening.location}.</p>
      <Link className="text-link" href="/careers#engineering-manager-job-description">View the opportunity <ArrowRight size={17} /></Link>
    </div>
  );
}
