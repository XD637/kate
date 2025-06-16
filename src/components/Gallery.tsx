import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const Gallery = () => (
  <section id="gallery" className="py-16 bg-white/60">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8 font-caveat">
        My Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <Card
            key={i}
            className="min-h-[220px] flex flex-col items-center justify-center border-dashed border-2 border-gray-300 bg-white/80"
          >
            <CardHeader>
              <CardTitle>Artwork Placeholder</CardTitle>
              <CardDescription>Coming soon</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-32 h-40 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                No Image
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-center text-gray-500 mt-8">
        Gallery space for Kate&apos;s artworks coming soon.
      </p>
    </div>
  </section>
);

export default Gallery;
