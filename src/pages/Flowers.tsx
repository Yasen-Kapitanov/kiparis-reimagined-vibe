import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Flowers = () => {
  const arrangements = [
    {
      name: "Пиафлор Класик",
      price: "от 60 лв",
      description: "Традиционен пиафлор с бели хризантеми"
    },
    {
      name: "Пиафлор Луксозен",
      price: "от 120 лв",
      description: "Богат пиафлор с микс от сезонни цветя"
    },
    {
      name: "Траурен Букет",
      price: "от 40 лв",
      description: "Елегантен букет с бели рози и лилиуми"
    },
    {
      name: "Букет Рози",
      price: "от 50 лв",
      description: "Букет от 25 бели или червени рози"
    },
    {
      name: "Композиция Кошница",
      price: "от 80 лв",
      description: "Кошница с разнообразни свежи цветя"
    },
    {
      name: "Аранжимент Персонализиран",
      price: "от 100 лв",
      description: "Специален дизайн според вашите предпочитания"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Траурни Венци, Пиафлори и Букети</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Свежи цветя и аранжименти за изразяване на вашата скръб и уважение
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {arrangements.map((item, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl">{item.name}</CardTitle>
                  <div className="text-2xl font-bold text-secondary mt-2">{item.price}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold mb-4">Поръчка и Доставка</h2>
            <p className="text-muted-foreground mb-4">
              Всички наши цветни аранжименти се изработват от свежи цветя. 
              Осигуряваме доставка до гробищата в София и региона.
            </p>
            <p className="text-lg font-semibold text-secondary">
              За поръчки: 02 846 55 24 (денонощно)
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Flowers;
