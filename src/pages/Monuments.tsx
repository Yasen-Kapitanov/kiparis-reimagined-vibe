import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Monument {
  id: string;
  title: string;
  category: "mramor" | "granit";
  image: string;
  alt: string;
  description: string;
}

const monumentsData: Monument[] = [
  {
    id: 'mramor-rozarium',
    title: "Модел Розариум",
    category: "mramor",
    image: "/assets/monuments/nadgroben-pametnik-byal-mramor-zaoblen-s-relefni-rozi-i-krast.webp",
    alt: "Луксозен надгробен паметник от бял мрамор с релефни рози, изваян кръст и златен надпис",
    description: "Изящен дизайн от бял мрамор с майсторски изработени релефни детайли, символизиращ чистота и вечна обич."
  },
  {
    id: 'mramor-harmonia',
    title: "Модел Хармония",
    category: "mramor",
    image: "/assets/monuments/nadgroben-pametnik-byal-mramor-asimetrichen-s-krast-i-lista.webp",
    alt: "Асиметричен надгробен паметник от бял мрамор с релефни листа и кръст",
    description: "Уникален асиметричен дизайн от бял мрамор с изящна дърворезба на листа и кръст, вдъхващ спокойствие и почит."
  },
  {
    id: 'mramor-arka-kotva',
    title: "Модел Надежда",
    category: "mramor",
    image: "/assets/monuments/nadgroben-pametnik-byal-mramor-arka-kotva.webp",
    alt: "Надгробен паметник от бял мрамор с форма на арка и гравиран златен символ котва",
    description: "Класическа арка от висококачествен бял мрамор с гравиран символ на надеждата и златни надписи."
  },
  {
    id: 'granit-siv-edinstvo',
    title: "Модел Единство",
    category: "granit",
    image: "/assets/monuments/nadgroben-pametnik-siv-granit-dvoin-s-razrez-tri-snimki.webp",
    alt: "Двоен семеен паметник от светъл сив гранит с дизайн на пресечен кръст",
    description: "Масивен семеен модел от висококачествен сив гранит, символизиращ вечната връзка чрез централен кръст."
  }
];

const services = [
  "Изработка от гранит и мрамор",
  "Гравиране на надписи и портрети",
  "Професионален монтаж",
  "Доставка до гробищата",
  "Консултация и измерване на място",
  "Гаранция за качество"
];

const Monuments = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedMonument, setSelectedMonument] = useState<Monument | null>(null);

  const filteredMonuments = selectedCategory === "all" 
    ? monumentsData 
    : monumentsData.filter(m => m.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Надгробни паметници в София | Траурна агенция Кипарис"
        description="Пълна организация на надгробни паметници в София. Денонощно: 02 846 55 24."
        serviceName="Надгробни паметници"
      />
      <Navigation />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Надгробни Паметници</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Изработка и монтаж на качествени надгробни паметници от гранит и мрамор
            </p>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-10">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="all">Всички</TabsTrigger>
              <TabsTrigger value="mramor">Мрамор</TabsTrigger>
              <TabsTrigger value="granit">Гранит</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-16">
            {filteredMonuments.map((monument) => (
              <Card 
                key={monument.id} 
                className="hover:shadow-2xl transition-all duration-300 overflow-hidden border-border bg-card cursor-pointer group"
                onClick={() => setSelectedMonument(monument)}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={monument.image}
                    alt={monument.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground">{monument.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Dialog open={!!selectedMonument} onOpenChange={() => setSelectedMonument(null)}>
            <DialogContent className="max-w-3xl p-0 overflow-hidden">
              {selectedMonument && (
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2">
                    <img
                      src={selectedMonument.image}
                      alt={selectedMonument.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-4">{selectedMonument.title}</h2>
                    <p className="text-muted-foreground mb-6">{selectedMonument.description}</p>
                    <p className="text-lg">
                      За повече информация: <span className="font-bold text-secondary">02 846 55 24</span>
                    </p>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>

          <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg border border-border">
            <h2 className="text-3xl font-bold mb-6 text-center">Нашите Услуги</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  <p className="text-lg">{service}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg mb-2">За консултация и оглед на образци:</p>
              <p className="text-2xl font-bold text-secondary">02 846 55 24</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Monuments;
