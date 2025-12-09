import SlideWrapper from '../SlideWrapper';
import AnimatedElement from '../AnimatedElement';
import { Flag, CheckCircle2, Lightbulb, Bell, Bot, CalendarClock, ArrowRight } from 'lucide-react';

const SlideConclusion = () => {
  const achievements = [
    "Application de gestion RH complète et fonctionnelle",
    "Modernisation de la gestion des congés",
    "Centralisation des données employés",
    "Réduction des erreurs et facilitation des décisions",
  ];

  const perspectives = [
    { icon: Bell, text: "Intégration de notifications automatiques" },
    { icon: Bot, text: "Implémentation d'un agent intelligent" },
    { icon: CalendarClock, text: "Planification prédictive des absences" },
  ];

  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto w-full">
        <AnimatedElement>
          <div className="flex items-center gap-4 mb-8">
            <div className="icon-circle">
              <Flag className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="slide-title mb-0">Conclusion et Perspectives</h2>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedElement delay={0.2} direction="left">
            <div className="content-card-elevated h-full">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <h3 className="text-2xl font-display font-semibold text-foreground">Bilan du Projet</h3>
              </div>
              <ul className="space-y-4">
                {achievements.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={0.3} direction="right">
            <div className="content-card-elevated h-full bg-gradient-to-br from-primary/5 to-card">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-display font-semibold text-foreground">Perspectives Futures</h3>
              </div>
              <ul className="space-y-4">
                {perspectives.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground text-lg">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedElement>
        </div>

        <AnimatedElement delay={0.9}>
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-xl">
              <span className="text-xl font-display font-semibold">Merci pour votre attention !</span>
              <ArrowRight className="w-5 h-5" />
              <span className="text-lg">Questions ?</span>
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={1.1}>
          <p className="text-center text-muted-foreground mt-6 italic">
            RADIM Yassine - PFA 2025 - Future Link
          </p>
        </AnimatedElement>
      </div>
    </SlideWrapper>
  );
};

export default SlideConclusion;
