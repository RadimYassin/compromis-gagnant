import SlideWrapper from '../SlideWrapper';
import AnimatedElement from '../AnimatedElement';
import { Building2, AlertTriangle, FileX, Lock, GitBranch, HelpCircle } from 'lucide-react';

const SlideIntroduction = () => {
  const problemItems = [
    { icon: FileX, text: "Erreurs fréquentes dans les congés et données employés" },
    { icon: Lock, text: "Difficultés de centralisation et sécurité" },
    { icon: GitBranch, text: "Workflows de décision mal optimisés" },
  ];

  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto w-full">
        <AnimatedElement>
          <div className="flex items-center gap-4 mb-8">
            <div className="icon-circle">
              <Building2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="slide-title mb-0">Contexte et Problématique</h2>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedElement delay={0.2} direction="left">
            <div className="content-card-elevated h-full">
              <h3 className="text-2xl font-display font-semibold text-primary mb-6">Organisme d'Accueil</h3>
              <div className="flex items-center gap-4 mb-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-foreground">Future Link</h4>
                  <p className="text-muted-foreground text-sm">Spécialisée en systèmes d'information et transformation digitale</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Le stage a été effectué au sein de Future Link, une entreprise spécialisée dans les systèmes 
                d'information et de communication, ainsi que la transformation numérique.
              </p>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={0.3} direction="right">
            <div className="content-card-elevated h-full bg-gradient-to-br from-destructive/5 to-card">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                <h3 className="text-2xl font-display font-semibold text-destructive">Problème Actuel</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                La gestion des ressources humaines repose encore sur des processus manuels, ce qui entraîne :
              </p>
              <ul className="space-y-4">
                {problemItems.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-3 animate-fade-in"
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-destructive" />
                    </div>
                    <span className="text-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedElement>
        </div>

        <AnimatedElement delay={0.6}>
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-card to-secondary/10 border border-primary/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-lg text-foreground mb-2">Question Clé</h4>
                <p className="text-lg text-muted-foreground italic">
                  "Comment l'application peut-elle automatiser la gestion des congés tout en réduisant les erreurs humaines ?"
                </p>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </SlideWrapper>
  );
};

export default SlideIntroduction;
