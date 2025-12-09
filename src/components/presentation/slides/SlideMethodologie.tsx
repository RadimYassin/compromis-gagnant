import SlideWrapper from '../SlideWrapper';
import AnimatedElement from '../AnimatedElement';
import { Repeat, Settings, Database, Shield, Users, Calendar, BarChart3, Lock } from 'lucide-react';

const SlideMethodologie = () => {
  const sprints = [
    { 
      num: 1, 
      title: "Installation & Familiarisation", 
      desc: "Next.js, Express.js, Prisma",
      icon: Settings,
      color: "from-slate-500 to-slate-600"
    },
    { 
      num: 2, 
      title: "Conception Base de Données", 
      desc: "Design DB et setup backend",
      icon: Database,
      color: "from-blue-500 to-blue-600"
    },
    { 
      num: 3, 
      title: "Authentification & Rôles", 
      desc: "Admin, Manager, Employé",
      icon: Shield,
      color: "from-green-500 to-green-600"
    },
    { 
      num: 4, 
      title: "Module Employés", 
      desc: "Gestion des employés",
      icon: Users,
      color: "from-purple-500 to-purple-600"
    },
    { 
      num: 5, 
      title: "Module Congés", 
      desc: "Gestion des absences",
      icon: Calendar,
      color: "from-orange-500 to-orange-600"
    },
    { 
      num: 6, 
      title: "Import & Dashboard", 
      desc: "Validation données et tableaux de bord",
      icon: BarChart3,
      color: "from-cyan-500 to-cyan-600"
    },
    { 
      num: 7, 
      title: "Sécurité & Optimisation", 
      desc: "Sécurité avancée",
      icon: Lock,
      color: "from-pink-500 to-pink-600"
    },
  ];

  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto w-full">
        <AnimatedElement>
          <div className="flex items-center gap-4 mb-8">
            <div className="icon-circle">
              <Repeat className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="slide-title mb-0">Méthodologie Agile Scrum</h2>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.2}>
          <div className="mb-8 p-4 rounded-xl bg-primary/5 border border-primary/10 text-center">
            <p className="text-lg text-foreground">
              Projet divisé en <span className="font-bold text-primary">7 Sprints</span> pour une livraison itérative et incrémentale
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {sprints.map((sprint, index) => (
            <AnimatedElement key={index} delay={0.3 + index * 0.08} direction="up">
              <div className="group relative">
                <div className="content-card p-4 h-full text-center hover:scale-105 transition-all duration-300">
                  <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${sprint.color} flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                    <sprint.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xs font-bold text-primary mb-1">Sprint {sprint.num}</div>
                  <h4 className="font-semibold text-sm text-foreground mb-1 leading-tight">{sprint.title}</h4>
                  <p className="text-xs text-muted-foreground leading-tight">{sprint.desc}</p>
                </div>
                {index < sprints.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-border" />
                )}
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement delay={1.0}>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span>Sprints complétés</span>
            </div>
            <div className="flex items-center gap-2">
              <Repeat className="w-4 h-4 text-primary" />
              <span>Cycles itératifs</span>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </SlideWrapper>
  );
};

export default SlideMethodologie;
