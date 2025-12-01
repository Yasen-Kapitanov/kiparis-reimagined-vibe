import { Award, Clock, Plane } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Над 20 години опит",
      description: "Познаваме процедурите в София и организираме всичко бързо и точно, с уважение към семейството.",
    },
    {
      icon: Clock,
      title: "Денонощно обслужване",
      description: "Отговаряме 24/7 и съдействаме веднага при спешни случаи.",
    },
    {
      icon: Plane,
      title: "Международен транспорт",
      description: "Осигуряваме превоз на покойник от всички европейски държави и извън Европа. Получавате точна оферта и пълна организация.",
    },
  ];

  return (
    <section className="py-6 md:py-12 bg-primary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 md:mb-12">
          <h2 className="text-xl md:text-4xl font-bold mb-2 md:mb-4">Защо да изберете нас</h2>
        </div>
        <div className="grid grid-cols-3 gap-2 md:gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 p-1 md:p-0">
                <CardHeader className="p-2 md:p-6">
                  <div className="mx-auto mb-1 md:mb-3 text-secondary" aria-hidden="true">
                    <IconComponent className="w-6 h-6 md:w-10 md:h-10" />
                  </div>
                  <CardTitle className="text-[0.65rem] leading-tight md:text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-1 md:p-6 pt-0">
                  <p className="hidden md:block text-sm md:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
