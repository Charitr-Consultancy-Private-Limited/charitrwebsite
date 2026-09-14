import { MapPin } from "lucide-react";

export function LocationBlock() {
  return (
    <div className="locations">
      {[
        ["Delhi", "Registered office"],
        ["Chennai", "Delivery presence"],
        ["Kochi", "Delivery presence"],
      ].map(([city, label]) => (
        <div key={city}><MapPin size={20} /><h3>{city}</h3><p>{label}</p></div>
      ))}
    </div>
  );
}
