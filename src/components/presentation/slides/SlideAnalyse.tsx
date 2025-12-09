import SlideWrapper from '../SlideWrapper';
import AnimatedElement from '../AnimatedElement';
import { PenTool, GanttChart, Users, ArrowRightLeft, Layers } from 'lucide-react';

const SlideAnalyse = () => {
  const diagrams = [
    { 
      title: "Diagramme de Gantt", 
      desc: "Planification temporelle du projet",
      category: "Planification",
      icon: GanttChart,
      color: "from-blue-500 to-blue-600"
    },
    { 
      title: "Diagramme de Cas d'Utilisation", 
      desc: "Interactions utilisateurs-système",
      category: "Fonctionnel",
      icon: Users,
      color: "from-green-500 to-green-600"
    },
    { 
      title: "Diagramme de Séquence - 2FA", 
      desc: "Authentification à deux facteurs",
      category: "Dynamique",
      icon: ArrowRightLeft,
      color: "from-purple-500 to-purple-600"
    },
    { 
      title: "Diagramme de Séquence - Congés", 
      desc: "Demande et validation des congés",
      category: "Dynamique",
      icon: ArrowRightLeft,
      color: "from-orange-500 to-orange-600"
    },
    { 
      title: "Diagramme de Classes", 
      desc: "Structure des entités du système",
      category: "Structurel",
      icon: Layers,
      color: "from-cyan-500 to-cyan-600"
    },
  ];

  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto w-full">
        <AnimatedElement>
          <div className="flex items-center gap-4 mb-8">
            <div className="icon-circle">
              <PenTool className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="slide-title mb-0">Analyse et Conception</h2>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.2}>
          <p className="text-center text-lg text-muted-foreground mb-8">
            Modélisation du système à travers plusieurs diagrammes UML
          </p>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diagrams.map((diagram, index) => (
            <AnimatedElement key={index} delay={0.3 + index * 0.1} direction="up">
              <div className="content-card-elevated h-full group hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${diagram.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0`}>
                    <diagram.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded mb-2">
                      {diagram.category}
                    </span>
                    <h3 className="font-display font-semibold text-foreground mb-1">{diagram.title}</h3>
                    <p className="text-sm text-muted-foreground">{diagram.desc}</p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement delay={0.9}>
          <p className="text-center text-muted-foreground mt-8 italic">
            💡 Note : Ces diagrammes constituent la base documentaire technique du projet
          </p>
        </AnimatedElement>
      </div>
    </SlideWrapper>
  );
};

export default SlideAnalyse;
