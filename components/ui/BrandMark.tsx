export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className="brand-mark" aria-hidden="true" data-inverse={inverse}>
      <span />
      <span />
      <span />
    </span>
  );
}

