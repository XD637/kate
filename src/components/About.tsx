import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => (
  <section id="about" className="py-16 bg-[#bad69b]/40">
    <div className="container mx-auto px-4 flex justify-center">
      <Card className="max-w-2xl mx-auto bg-white/90 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-caveat text-center">
            About Me
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700 text-center">
            Hi! I’m Kate, an artist specializing in pencil and charcoal
            drawings. My passion is capturing emotion and detail in every
            portrait and illustration. Each piece is crafted with patience,
            love, and a touch of soul. Thank you for visiting my gallery and
            supporting my journey!
          </p>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default About;
