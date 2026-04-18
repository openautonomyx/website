type JsonLdProps = {
  data: object | object[];
};

// Renders schema.org JSON-LD as a <script type="application/ld+json"> tag.
// Uses React children (plain text) + explicit escape of `<` to prevent
// </script> break-out in the rendered HTML stream.
export function JsonLd({ data }: JsonLdProps) {
  const payload = Array.isArray(data) ? data : [data];
  const json = payload
    .map((d) => JSON.stringify(d).replace(/</g, "\\u003c"))
    .join("\n");
  return <script type="application/ld+json">{json}</script>;
}
