export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Product: {params.slug}</h1>
    </div>
  );
}
