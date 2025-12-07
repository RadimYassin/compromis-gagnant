import SlideWrapper from '../SlideWrapper';
import AnimatedElement from '../AnimatedElement';
import { Wrench, BookOpen, Monitor, Layout, CheckSquare, ExternalLink } from 'lucide-react';

const SlideOutils = () => {
  const livres = [
    { title: "Getting to Yes", author: "Fisher & Ury", desc: "Négociation raisonnée" },
    { title: "Negotiation Genius", author: "Malhotra & Bazerman", desc: "Stratégies avancées" },
  ];

  const outils = [
    { icon: Layout, name: "Trello / Asana", desc: "Visualiser les options et suivre les décisions" },
    { icon: Monitor, name: "Miro", desc: "Brainstorming collaboratif et mind mapping" },
    { icon: CheckSquare, name: "Checklists", desc: "Points à préparer avant chaque négociation" },
  ];

  const formations = [
    "Communication assertive",
    "Gestion des conflits",
    "Leadership et influence",
  ];

  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto w-full">
        <AnimatedElement>
          <div className="flex items-center gap-4 mb-8">
            <div className="icon-circle-secondary">
              <Wrench className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="slide-title mb-0">Outils et ressources</h2>
          </div>
        </AnimatedElement>

        <div className="grid lg:grid-cols-3 gap-6">
          <AnimatedElement delay={0.2} direction="left">
            <div className="content-card-elevated h-full">
              <div className="flex items-center gap-3 mb-5">
                <BookOpen className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-display font-semibold text-foreground">Livres recommandés</h3>
              </div>
              <div className="space-y-4">
                {livres.map((livre, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors animate-fade-in"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      {livre.title}
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </h4>
                    <p className="text-sm text-muted-foreground">{livre.author}</p>
                    <p className="text-sm text-primary mt-1">{livre.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={0.3} direction="up">
            <div className="content-card-elevated h-full">
              <div className="flex items-center gap-3 mb-5">
                <Monitor className="w-6 h-6 text-secondary" />
                <h3 className="text-xl font-display font-semibold text-foreground">Applications</h3>
              </div>
              <div className="space-y-4">
                {outils.map((outil, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors animate-fade-in"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <outil.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{outil.name}</h4>
                      <p className="text-sm text-muted-foreground">{outil.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={0.4} direction="right">
            <div className="content-card-elevated h-full bg-gradient-to-br from-card to-primary/5">
              <div className="flex items-center gap-3 mb-5">
                <Monitor className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-display font-semibold text-foreground">Formations</h3>
              </div>
              <div className="space-y-3">
                {formations.map((formation, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-card shadow-sm animate-fade-in"
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-sm font-bold text-accent">{index + 1}</span>
                    </div>
                    <span className="text-foreground">{formation}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-muted-foreground italic">
                Disponibles sur LinkedIn Learning, Coursera, Udemy...
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default SlideOutils;
