/**
 * Emits a <script type="application/ld+json"> tag with the given object
 * stringified safely. Server-rendered — no client-side JS required.
 *
 * The `</` escape is critical: without it, a stray "</script>" anywhere in the
 * payload would close the surrounding <script> tag and break the page.
 */
interface JsonLdProps {
  /** Optional id for dedup / debugging. */
  id?: string;
  /** A single schema object, or an array of them (will emit one tag each). */
  data: Record<string, unknown> | Record<string, unknown>[];
}

function serialize(obj: Record<string, unknown>): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

export default function JsonLd({ id, data }: JsonLdProps) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={id ? `${id}-${i}` : i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serialize(item) }}
        />
      ))}
    </>
  );
}
