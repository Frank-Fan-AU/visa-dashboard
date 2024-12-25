export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="prose max-w-[80%] mx-auto">
      {children}
    </div>
  );
}
