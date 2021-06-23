export default function Container({ children }) {
  return (
    <div className="min-h-screen container max-w-full w-full h-full">
      {children}
    </div>
  );
}
