import SlideWrapper from '../SlideWrapper';
import AnimatedElement from '../AnimatedElement';
import { MessageSquare, Ear, MessageCircle, Heart, Shuffle, Target, Shield } from 'lucide-react';

const SlidePrincipes = () => {
  const principes = [
    { 
      icon: Ear, 
      title: "Écoute active", 
      description: "Comprendre les besoins et motivations de l'autre",
      color: "from-blue-500 to-blue-600"
    },
    { 
      icon: MessageCircle, 
      title: "Communication claire", 
      description: "S'exprimer de manière assertive et précise",
      color: "from-emerald-500 to-emerald-600"
    },
    { 
      icon: Heart, 
      title: "Respect et empathie", 
      description: "Reconnaître et valoriser le point de vue de l'autre",
      color: "from-rose-500 to-rose-600"
    },
    { 
      icon: Shuffle, 
      title: "Flexibilité", 
      description: "Rester ouvert aux alternatives et aux nouvelles idées",
      color: "from-violet-500 to-violet-600"
    },
    { 
      icon: Target, 
      title: "Focus sur l'intérêt commun", 
      description: "Privilégier les objectifs partagés plutôt que les positions",
      color: "from-amber-500 to-amber-600"
    },
    { 
      icon: Shield, 
      title: "Construire la confiance", 
      description: "Établir une relation de confiance avant la négociation",
      color: "from-cyan-500 to-cyan-600"
    },
  ];

  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto w-full">
        <AnimatedElement>
          <div className="flex items-center gap-4 mb-10">
            <div className="icon-circle">
              <MessageSquare className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="slide-title mb-0">Principes de base</h2>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principes.map((principe, index) => (
            <AnimatedElement 
              key={index} 
              delay={0.1 + index * 0.1}
              direction="scale"
            >
              <div className="content-card group hover:shadow-lg transition-all duration-300 h-full cursor-pointer hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${principe.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <principe.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {principe.title}
                </h3>
                <p className="text-muted-foreground">
                  {principe.description}
                </p>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement delay={0.9}>
          <p className="text-center text-muted-foreground mt-10 italic bg-muted/50 p-4 rounded-lg">
            💡 Note pour le présentateur : Illustrez chaque principe avec des exemples du quotidien professionnel
          </p>
        </AnimatedElement>
      </div>
    </SlideWrapper>
  );
};

export default SlidePrincipes;
