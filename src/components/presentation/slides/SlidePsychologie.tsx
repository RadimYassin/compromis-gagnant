import SlideWrapper from '../SlideWrapper';
import AnimatedElement from '../AnimatedElement';
import { Brain, Swords, Users, HandHeart, EyeOff, Scale, Lightbulb } from 'lucide-react';

const SlidePsychologie = () => {
  const comportements = [
    { 
      icon: Swords, 
      title: "Compétitif", 
      desc: "Veut gagner à tout prix",
      color: "bg-red-500",
      strategy: "Proposer des options limitées mais équitables"
    },
    { 
      icon: Users, 
      title: "Collaboratif", 
      desc: "Cherche le bénéfice mutuel",
      color: "bg-emerald-500",
      strategy: "Brainstorming ensemble pour maximiser les gains"
    },
    { 
      icon: HandHeart, 
      title: "Accommodant", 
      desc: "Cède facilement",
      color: "bg-blue-500",
      strategy: "L'encourager à exprimer ses vrais besoins"
    },
    { 
      icon: EyeOff, 
      title: "Évitant", 
      desc: "Fuit le conflit",
      color: "bg-gray-500",
      strategy: "Créer un environnement sécurisant pour dialoguer"
    },
    { 
      icon: Scale, 
      title: "Compromis", 
      desc: "Cherche le juste milieu",
      color: "bg-violet-500",
      strategy: "Identifier rapidement les zones de concession"
    },
  ];

  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto w-full">
        <AnimatedElement>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-violet-500 flex items-center justify-center">
              <Brain className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="slide-title mb-0">Psychologie</h2>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.2}>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            Comprendre les différents types de comportements en négociation permet d'adapter sa stratégie 
            et d'obtenir de meilleurs résultats.
          </p>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {comportements.map((comp, index) => (
            <AnimatedElement 
              key={index} 
              delay={0.2 + index * 0.1}
              direction="scale"
            >
              <div className="content-card group hover:shadow-lg transition-all duration-300 h-full hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg ${comp.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <comp.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{comp.title}</h3>
                    <p className="text-sm text-muted-foreground">{comp.desc}</p>
                  </div>
                </div>
                <div className="pt-3 border-t border-border">
                  <p className="text-sm text-foreground">
                    <span className="font-medium text-primary">Stratégie : </span>
                    {comp.strategy}
                  </p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement delay={0.8}>
          <div className="mt-8 content-card bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-6 h-6 text-violet-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Conseil clé</h4>
                <p className="text-muted-foreground">
                  Identifiez votre propre style de négociation et adaptez-vous au style de votre interlocuteur. 
                  L'écoute active est essentielle pour comprendre leurs motivations profondes.
                </p>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </SlideWrapper>
  );
};

export default SlidePsychologie;
