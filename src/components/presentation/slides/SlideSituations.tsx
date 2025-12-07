import SlideWrapper from '../SlideWrapper';
import AnimatedElement from '../AnimatedElement';
import { AlertTriangle, Shield, Lightbulb, MessageSquare, Heart, ArrowRight, CheckCircle } from 'lucide-react';

const SlideSituations = () => {
  const strategies = [
    { icon: Shield, text: "Rester calme face à l'opposition ou à l'agressivité" },
    { icon: Lightbulb, text: "Identifier les blocages et trouver des solutions créatives" },
    { icon: ArrowRight, text: "Transformer un conflit en opportunité de collaboration" },
    { icon: Heart, text: "Reconnaître les émotions et éviter les réactions impulsives" },
  ];

  const techniques = [
    { title: "Reformulation", desc: "Répéter pour clarifier" },
    { title: "Questions ouvertes", desc: "Explorer les besoins" },
    { title: "Intérêts sous-jacents", desc: "Comprendre le 'pourquoi'" },
  ];

  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto w-full">
        <AnimatedElement>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="slide-title mb-0">Situations difficiles</h2>
          </div>
        </AnimatedElement>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <AnimatedElement delay={0.2} direction="left">
              <div className="content-card-elevated">
                <h3 className="text-xl font-display font-semibold text-foreground mb-5">Stratégies clés</h3>
                <div className="space-y-4">
                  {strategies.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors animate-fade-in"
                      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                    >
                      <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={0.5} direction="left">
              <div className="content-card bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-amber-600" />
                  Exemple concret
                </h4>
                <p className="text-muted-foreground">
                  Résolution d'un désaccord entre fournisseurs ou partenaires commerciaux : 
                  utiliser la reformulation pour clarifier les attentes de chaque partie.
                </p>
              </div>
            </AnimatedElement>
          </div>

          <AnimatedElement delay={0.3} direction="right">
            <div className="content-card-elevated h-full">
              <h3 className="text-xl font-display font-semibold text-secondary mb-5">Techniques de déblocage</h3>
              <div className="space-y-4">
                {techniques.map((tech, index) => (
                  <div 
                    key={index}
                    className="relative overflow-hidden rounded-xl p-5 bg-gradient-to-r from-secondary/10 to-secondary/5 animate-fade-in"
                    style={{ animationDelay: `${0.4 + index * 0.15}s` }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground text-lg">{tech.title}</h4>
                        <p className="text-muted-foreground">{tech.desc}</p>
                      </div>
                      <CheckCircle className="w-6 h-6 text-secondary" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-lg bg-muted/30 border-l-4 border-secondary">
                <p className="text-sm text-muted-foreground italic">
                  "Chaque conflit est une opportunité déguisée de renforcer la relation"
                </p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default SlideSituations;
