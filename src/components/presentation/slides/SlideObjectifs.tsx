import SlideWrapper from '../SlideWrapper';
import AnimatedElement from '../AnimatedElement';
import { Target, Users, UserCog, Shield, Database, CheckCircle2, Workflow } from 'lucide-react';

const SlideObjectifs = () => {
  const employeeObjectives = [
    { icon: Database, text: "Centraliser les données personnelles et professionnelles" },
    { icon: Shield, text: "Sécuriser l'accès aux informations sensibles" },
  ];

  const managerObjectives = [
    { icon: Workflow, text: "Optimiser les workflows administratifs" },
    { icon: CheckCircle2, text: "Faciliter la prise de décision via un système de validation intégré" },
  ];

  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto w-full">
        <AnimatedElement>
          <div className="flex items-center gap-4 mb-8">
            <div className="icon-circle">
              <Target className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="slide-title mb-0">Objectifs de la Solution</h2>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.2}>
          <div className="text-center mb-10 p-6 rounded-2xl bg-gradient-to-r from-primary/5 via-card to-secondary/5 border border-primary/10">
            <p className="text-xl text-foreground">
              Proposer une <span className="font-bold text-primary">solution numérique moderne</span> pour 
              faciliter les processus administratifs
            </p>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedElement delay={0.3} direction="left">
            <div className="content-card-elevated h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-foreground">Pour les Employés</h3>
              </div>
              <ul className="space-y-4">
                {employeeObjectives.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-5 h-5 text-blue-500" />
                    </div>
                    <span className="text-foreground text-lg">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={0.4} direction="right">
            <div className="content-card-elevated h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                  <UserCog className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-foreground">Pour les Managers</h3>
              </div>
              <ul className="space-y-4">
                {managerObjectives.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-5 h-5 text-green-500" />
                    </div>
                    <span className="text-foreground text-lg">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedElement>
        </div>

        <AnimatedElement delay={0.7}>
          <p className="text-center text-muted-foreground mt-8 italic">
            💡 Note : L'objectif principal est de réduire les erreurs humaines et d'accélérer les processus
          </p>
        </AnimatedElement>
      </div>
    </SlideWrapper>
  );
};

export default SlideObjectifs;
