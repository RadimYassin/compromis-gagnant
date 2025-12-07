import SlideWrapper from '../SlideWrapper';
import AnimatedElement from '../AnimatedElement';
import { CheckCircle, Ear, Heart, Lightbulb, Shuffle, GraduationCap, Handshake, Star } from 'lucide-react';

const SlideConclusion = () => {
  const cles = [
    { icon: Ear, text: "Écoute" },
    { icon: Heart, text: "Empathie" },
    { icon: Lightbulb, text: "Créativité" },
    { icon: Shuffle, text: "Flexibilité" },
  ];

  const recommandations = [
    "Le compromis est essentiel pour résoudre les conflits",
    "Pratiquer régulièrement améliore vos compétences",
    "Chercher toujours une solution équitable",
    "Voir chaque négociation comme une opportunité d'apprendre",
  ];

  return (
    <SlideWrapper className="bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <AnimatedElement>
          <div className="flex items-center gap-4 mb-8 justify-center">
            <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center">
              <CheckCircle className="w-7 h-7 text-primary-foreground" />
            </div>
            <h2 className="slide-title mb-0 text-primary-foreground">Conclusion</h2>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <AnimatedElement delay={0.2} direction="left">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-2xl font-display font-semibold mb-6 flex items-center gap-3">
                <Star className="w-6 h-6 text-accent" />
                Clés du succès
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {cles.map((cle, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-primary-foreground/10 animate-fade-in"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <cle.icon className="w-5 h-5 text-secondary" />
                    <span className="font-medium">{cle.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={0.3} direction="right">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-2xl font-display font-semibold mb-6 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-accent" />
                Recommandations
              </h3>
              <ul className="space-y-3">
                {recommandations.map((rec, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-primary-foreground/90">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedElement>
        </div>

        <AnimatedElement delay={0.8} direction="scale">
          <div className="text-center">
            <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm">
              <Handshake className="w-12 h-12 text-secondary animate-bounce-subtle" />
              <p className="text-xl font-display font-semibold">
                Merci pour votre attention !
              </p>
            </div>
            <p className="mt-6 text-primary-foreground/70 italic">
              Questions ? Discussion ouverte...
            </p>
          </div>
        </AnimatedElement>
      </div>
    </SlideWrapper>
  );
};

export default SlideConclusion;
