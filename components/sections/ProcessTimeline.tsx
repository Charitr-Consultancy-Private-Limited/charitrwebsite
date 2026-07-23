import { process } from "@/data/site";

export function ProcessTimeline() {
  return (
    <ol className="process-timeline">
      {process.map(([title, description], index) => (
        <li key={title}>
          <span className="process-marker">{index + 1}</span>
          <div><h3>{title}</h3><p>{description}</p></div>
        </li>
      ))}
    </ol>
  );
}

