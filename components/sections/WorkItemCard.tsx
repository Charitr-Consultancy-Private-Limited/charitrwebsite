import { Check } from "lucide-react";
import type { WorkItem } from "@/types/site";

export function WorkItemCard({
  item,
  index,
  compact = false,
}: {
  item: WorkItem;
  index: number;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <article className="work-card">
        <span className="work-card__number">0{index + 1}</span>
        <p className="eyebrow">{item.subtitle}</p>
        <h3>{item.title}</h3>
        <p>{item.homeDescription}</p>
        <ul className="work-tags" aria-label={`${item.title} capabilities`}>
          {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      </article>
    );
  }

  return (
    <article className="work-item" id={item.slug}>
      <header className="work-item__header">
        <span className="work-item__number">0{index + 1}</span>
        <div>
          <p className="eyebrow">{item.subtitle}</p>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      </header>
      <div className={`work-item__body${item.objective ? "" : " work-item__body--single"}`}>
        <div>
          <h3>{item.activityHeading}</h3>
          <ul className="check-list compact">
            {item.activities.map((activity) => <li key={activity}><Check size={16} />{activity}</li>)}
          </ul>
        </div>
        {item.objective && (
          <aside className="work-objective">
            <h3>The objective</h3>
            <p>{item.objective}</p>
          </aside>
        )}
      </div>
      <div className="work-item__capabilities">
        <h3>Capabilities</h3>
        <ul className="work-tags">
          {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    </article>
  );
}
