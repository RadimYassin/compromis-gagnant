import SlideWrapper from '../SlideWrapper';
import AnimatedElement from '../AnimatedElement';
import { Zap, Trophy, Shield, Lightbulb, ListOrdered, ArrowRightLeft, MessageSquare } from 'lucide-react';

const SlideTechniques = () => {
  const techniques = [
    { 
      icon: Trophy, 
      title: "Win-Win", 
      description: "Chaque partie obtient un résultat satisfaisant",
      highlight: true
    },
    { 
      icon: Shield, 
      title: "BATNA", 
      description: "Connaître son plan B pour négocier avec confiance",
      highlight: false
    },
    { 
      icon: Lightbulb, 
      title: "Brainstorming", 
      description: "Proposer plusieurs alternatives créatives",
      highlight: false
    },
    { 
      icon: ListOrdered, 
      title: "Priorisation", 
      description: "Identifier points négociables vs non négociables",
      highlight: false
    },
    { 
      icon: ArrowRightLeft, 
      title: "Concessions progressives", 
      description: "Petites concessions pour en obtenir en retour",
      highlight: false
    },
    { 
      icon: MessageSquare, 
      title: "Persuasion", 
      description: "Arguments logiques, preuves, empathie",
      highlight: false
    },
  ];

  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto w-full">
        <AnimatedElement>
          <div className="flex items-center gap-4 mb-8">
            <div className="icon-circle-secondary">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="slide-title mb-0">Techniques avancées</h2>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {techniques.map((tech, index) => (
            <AnimatedElement 
              key={index} 
              delay={0.1 + index * 0.1}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div className={`content-card group hover:shadow-lg transition-all duration-300 h-full ${
                tech.highlight ? 'ring-2 ring-secondary bg-gradient-to-br from-secondary/5 to-card' : ''
              }`}>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  tech.highlight ? 'bg-gradient-secondary' : 'bg-primary/10'
                } group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className={`w-6 h-6 ${tech.highlight ? 'text-primary-foreground' : 'text-primary'}`} />
                </div>
                <h3 className={`text-lg font-display font-semibold mb-2 ${
                  tech.highlight ? 'text-secondary' : 'text-foreground'
                }`}>
                  {tech.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {tech.description}
                </p>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement delay={0.8}>
          <div className="mt-8 content-card bg-gradient-to-r from-muted/50 to-muted/30">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Exemple pratique</h4>
                <p className="text-muted-foreground">
                  Répartition du budget d'un projet entre plusieurs équipes avec des priorités différentes : 
                  utiliser le brainstorming pour proposer des allocations variables selon les phases du projet.
                </p>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </SlideWrapper>
  );
};

export default SlideTechniques;
