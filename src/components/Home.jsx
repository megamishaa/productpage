export default function Home() {
  const cats = [
    "/cat2.jpeg",
    "/cat11.jpeg",
    "/cat5.jpeg",
    "/cat6.jpeg",
    "/cat7.jpeg",
    "/cat8.jpeg",
    "/cat9.jpeg",
    "/cat10.jpeg",
    "/cat12.jpeg",
    "/cat3.jpeg",
    "/cat4.jpeg",
  ];

  return (
    <div className="mt-44 min-h-screen bg-white flex flex-col items-center">
      <div className="w-full mx-auto px-6 flex flex-col min-h-[calc(100vh-10rem)]">
        <div className="flex justify-center">
          <h1 className="text-8xl font-semibold text-center max-w-7xl py-72 animate-fade-in-down">
            Pixel. The only phone engineered by Google.
          </h1>
        </div>

        <div className="w-full overflow-x-auto scrollbar-hide mb-28">
          <div className="flex space-x-6">
            {cats.map((cat, index) => (
              <img
                key={index}
                src={cat}
                alt={`Pixel phone ${index + 1}`}
                className={`h-48 flex-shrink-0 animate-fade-in-down delay-${
                  index * 100
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
