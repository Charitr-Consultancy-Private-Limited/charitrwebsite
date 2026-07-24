import Image from "next/image";
import { assetPath } from "@/lib/metadata";

export function BrandMark({ inverse = false, priority = false }: { inverse?: boolean; priority?: boolean }) {
  return (
    <span className="brand-logo" data-inverse={inverse}>
      <Image
        src={assetPath("/charitr-logo.webp")}
        alt=""
        width={520}
        height={120}
        priority={priority}
        unoptimized
        sizes="(max-width: 600px) 180px, 220px"
      />
    </span>
  );
}
