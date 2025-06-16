import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Contact = () => (
  <section id="contact" className="py-16 bg-white/60">
    <div className="container mx-auto px-4 flex justify-center">
      <Card className="w-full max-w-lg bg-white/90 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-caveat text-center">Contact for Commissions</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@email.com" required />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Tell me about your idea..." required />
            </div>
            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-900">
              Send Request
            </Button>
          </form>
          <p className="text-center text-gray-500 mt-4">
            Or email me directly at{" "}
            <a className="underline text-blue-700" href="mailto:kate@example.com">
              kate@example.com
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default Contact;