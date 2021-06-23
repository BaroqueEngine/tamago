export default function SketchComponent({ slug }) {
  return (
    <>
      <div className="absolute w-full h-full">
        <iframe
          width="100%"
          height="100%"
          src={"/static/a.html?id=" + slug}
        ></iframe>
      </div>
    </>
  );
}
