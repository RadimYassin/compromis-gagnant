import SlideWrapper from '../SlideWrapper';
import AnimatedElement from '../AnimatedElement';
import { Scale, Heart, Clock, Lightbulb, Users, Calendar } from 'lucide-react';

const SlideDefinition = () => {
  const importanceItems = [
    { icon: Heart, text: "Favorise la coopération et la confiance", color: "text-rose-500" },
    { icon: Clock, text: "Évite les conflits prolongés", color: "text-amber-500" },
    { icon: Lightbulb, text: "Permet des solutions créatives et équitables", color: "text-emerald-500" },
    { icon: Users, text: "Renforce la relation entre les parties", color: "text-blue-500" },
  ];

  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto w-full">
        <AnimatedElement>
          <div className="flex items-center gap-4 mb-8">
            <div className="icon-circle">
              <Scale className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="slide-title mb-0">Définition et importance</h2>
          </div>
        </AnimatedElement>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <AnimatedElement delay={0.2} direction="left">
              <div className="content-card-elevated">
                <h3 className="text-2xl font-display font-semibold text-primary mb-4">Définition</h3>
                <p className="text-lg text-foreground leading-relaxed">
                  Le compromis est un <span className="font-semibold text-primary">accord</span> où chaque partie 
                  fait des <span className="font-semibold text-secondary">concessions</span> pour trouver un 
                  <span className="font-semibold text-accent"> terrain commun</span>.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={0.4} direction="left">
              <div className="content-card bg-gradient-to-br from-muted/50 to-card">
                <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Exemple concret
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deux départements veulent planifier un projet à des horaires différents. 
                  Après discussion, ils trouvent un <strong className="text-foreground">horaire commun</strong> qui 
                  convient aux deux équipes.
                </p>
              </div>
            </AnimatedElement>
          </div>

          <AnimatedElement delay={0.3} direction="right">
            <div className="content-card-elevated h-full">
              <h3 className="text-2xl font-display font-semibold text-secondary mb-6">Importance</h3>
              <div className="space-y-5">
                {importanceItems.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors animate-fade-in"
                    style={{ animationDelay: `${0.5 + index * 0.15}s` }}
                  >
                    <div className={`w-12 h-12 rounded-full bg-card flex items-center justify-center shadow-sm`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>
        </div>

        <AnimatedElement delay={1}>
          <div className="mt-8 flex justify-center">
            <div className="animate-bounce-subtle">
              <Scale className="w-16 h-16 text-primary/20" />
            </div>
          </div>
        </AnimatedElement>
      </div>
    </SlideWrapper>
  );
};

export default SlideDefinition;
