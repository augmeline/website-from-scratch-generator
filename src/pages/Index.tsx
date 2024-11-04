import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, Send, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

  const recentSales = [
    {
      id: 1,
      price: 5016,
      description: "GIA 1.40CT Round Cut",
      image: "/diamond-1.jpg",
      time: "Less than 24 hours ago"
    },
    // ... add more similar items
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <img src="/logo.svg" alt="RapCash" className="h-12" />
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6">
              <a href="#" className="text-rapcash-gray hover:text-black">Sell</a>
              <a href="#" className="text-rapcash-gray hover:text-black">Buy</a>
              <a href="#" className="text-rapcash-gray hover:text-black">How It Works</a>
              <a href="#" className="text-rapcash-gray hover:text-black">Who we are</a>
            </nav>
            <div className="flex items-center gap-2">
              <span className="text-rapcash-gray">1(888)-222-0208</span>
              <Button variant="outline" className="ml-2">SIGN IN</Button>
              <Button>REGISTER</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-rapcash-lightgray py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-fade-in">
            SNAP - SEND - SELL
          </h1>
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-md mx-auto">
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 rounded-full bg-rapcash-lightgray">
                <Camera size={32} />
              </div>
              <h2 className="text-xl font-semibold">Start here</h2>
              <p className="text-rapcash-gray">Upload Pictures of your jewelry</p>
              <Button size="lg" className="w-full mt-4">
                Upload Photos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Sell your jewelry fast and securely
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full border-2 flex items-center justify-center">
                <Camera size={32} />
              </div>
              <h3 className="font-semibold mb-2">Snap Pictures</h3>
              <p className="text-rapcash-gray">of your jewelry & diamonds</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full border-2 flex items-center justify-center">
                <Send size={32} />
              </div>
              <h3 className="font-semibold mb-2">Send us your pictures</h3>
              <p className="text-rapcash-gray">by uploading above</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full border-2 flex items-center justify-center">
                <Users size={32} />
              </div>
              <h3 className="font-semibold mb-2">Sell</h3>
              <p className="text-rapcash-gray">to a global market of competing buyers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Sales Section */}
      <section className="bg-rapcash-lightgray py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Recently sold on RapCash
          </h2>
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-6">
              {recentSales.map((sale) => (
                <div key={sale.id} className="bg-white p-4 rounded-lg shadow-md min-w-[250px]">
                  <img src={sale.image} alt="Diamond" className="w-full h-48 object-cover rounded mb-4" />
                  <div className="text-center">
                    <p className="font-semibold">Sold for ${sale.price}</p>
                    <p className="text-sm text-rapcash-gray">{sale.description}</p>
                    <p className="text-xs text-rapcash-gray mt-2">{sale.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <Button variant="secondary" size="lg">
              See Jewelry on Sale Now
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              Sign up for newsletter
            </h2>
            <form onSubmit={handleSubscribe} className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit">SUBMIT</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Sell</a></li>
                <li><a href="#" className="hover:text-gray-300">Buy</a></li>
                <li><a href="#" className="hover:text-gray-300">How It Works</a></li>
                <li><a href="#" className="hover:text-gray-300">Who We Are</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Account</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">My Account</a></li>
                <li><a href="#" className="hover:text-gray-300">Register</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                    f
                  </div>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                    in
                  </div>
                </a>
              </div>
            </div>
            <div>
              <img src="/bbb-rating.png" alt="BBB A+ Rating" className="h-16" />
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
            <p>All Rights Reserved</p>
            <p>www.rapcash.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;