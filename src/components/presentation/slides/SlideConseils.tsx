import SlideWrapper from '../SlideWrapper';
import AnimatedElement from '../AnimatedElement';
import { Lightbulb, Target, FileEdit, MessageSquare, Gift, Gamepad2 } from 'lucide-react';

const SlideConseils = () => {
  const conseils = [
    { 
      icon: Target, 
      title: "Préparer la négociation", 
      desc: "Définir objectifs, alternatives et limites avant la réunion",
      number: 1
    },
    { 
      icon: FileEdit, 
      title: "Prendre des notes", 
      desc: "Documenter les points clés et accords pendant la discussion",
      number: 2
    },
    { 
      icon: MessageSquare, 
      title: "Reformuler et clarifier", 
      desc: "Éviter les malentendus en répétant les points importants",
      number: 3
    },
    { 
      icon: Gift, 
      title: "Valoriser les concessions", 
      desc: "Remercier l'autre partie pour ses compromis",
      number: 4
    },
    { 
      icon: Gamepad2, 
      title: "S'entraîner régulièrement", 
      desc: "Pratiquer avec des jeux de rôle et simulations",
      number: 5
    },
  ];

  return (
    <SlideWrapper>
      <div className="max-w-5xl mx-auto w-full">
        <AnimatedElement>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="slide-title mb-0">Conseils pratiques</h2>
          </div>
        </AnimatedElement>

        <div className="space-y-4">
          {conseils.map((conseil, index) => (
            <AnimatedElement 
              key={index} 
              delay={0.1 + index * 0.12}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div className="content-card group hover:shadow-lg transition-all duration-300 flex items-center gap-6 hover:-translate-x-1">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <conseil.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent flex items-center justify-center text-sm font-bold text-accent-foreground">
                    {conseil.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                    {conseil.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {conseil.desc}
                  </p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement delay={0.9}>
          <p className="text-center text-muted-foreground mt-10 italic bg-muted/30 p-4 rounded-lg">
            💡 Note pour le présentateur : Invitez les participants à choisir un conseil à appliquer dès demain
          </p>
        </AnimatedElement>
      </div>
    </SlideWrapper>
  );
};

export default SlideConseils;
