import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import wreathImage from "@/assets/wreath.jpg";

const Wreaths = () => {
  const wreaths = [
    {
      name: "Венец Традиционен",
      price: "от 80 лв",
      description: "Класически траурен венец с бели цветя",
      image: wreathImage
    },
    {
      name: "Венец Луксозен",
      price: "от 150 лв",
      description: "Богато декориран венец с разнообразни цветя",
      image: wreathImage
    },
    {
      name: "Венец Персонализиран",
      price: "от 200 лв",
      description: "Индивидуален дизайн според вашите желания",
      image: wreathImage
    },
    {
      name: "Кръст от Цветя",
      price: "от 120 лв",
      description: "Траурен кръст изработен от свежи цветя",
      image: wreathImage
    },
    {
      name: "Сърце от Цветя",
      price: "от 140 лв",
      description: "Нежно сърце от бели и червени рози",
      image: wreathImage
    },
    {
      name: "Корона",
      price: "от 100 лв",
      description: "Елегантна корона с сезонни цветя",
      image: wreathImage
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Траурни Венци</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Траурни венци, кръстове и аранжименти от свежи цветя за последно сбогом
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wreaths.map((wreath, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 overflow-hidden border-border bg-card">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={wreath.image}
                    alt={wreath.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{wreath.name}</CardTitle>
                  <div className="text-2xl font-bold text-secondary">{wreath.price}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{wreath.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Wreaths;
