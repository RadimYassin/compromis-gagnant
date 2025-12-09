import SlideWrapper from '../SlideWrapper';
import AnimatedElement from '../AnimatedElement';
import { Wrench, Layout, Server, Database } from 'lucide-react';

const SlideOutils = () => {
  const technologies = [
    { 
      category: "Frontend",
      icon: Layout,
      color: "from-blue-500 to-cyan-500",
      tools: [
        { name: "Next.js", desc: "Framework React pour le rendu côté serveur" }
      ]
    },
    { 
      category: "Backend",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      tools: [
        { name: "Express.js", desc: "Framework Node.js pour l'API REST" }
      ]
    },
    { 
      category: "ORM / Base de Données",
      icon: Database,
      color: "from-purple-500 to-violet-500",
      tools: [
        { name: "Prisma", desc: "ORM moderne pour Node.js et TypeScript" }
      ]
    },
  ];

  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto w-full">
        <AnimatedElement>
          <div className="flex items-center gap-4 mb-8">
            <div className="icon-circle">
              <Wrench className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="slide-title mb-0">Outils et Technologies</h2>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <AnimatedElement key={index} delay={0.2 + index * 0.15} direction="up">
              <div className="content-card-elevated h-full group">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 transition-transform`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold text-center text-foreground mb-6">{tech.category}</h3>
                <div className="space-y-4">
                  {tech.tools.map((tool, toolIndex) => (
                    <div 
                      key={toolIndex} 
                      className="p-4 rounded-xl bg-muted/50 border border-border animate-fade-in"
                      style={{ animationDelay: `${0.4 + index * 0.1 + toolIndex * 0.05}s` }}
                    >
                      <h4 className="font-bold text-foreground mb-1">{tool.name}</h4>
                      <p className="text-sm text-muted-foreground">{tool.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement delay={0.8}>
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-primary/5 via-card to-secondary/5 border border-primary/10">
            <h4 className="font-display font-semibold text-lg text-center text-foreground mb-4">Stack Technique Moderne</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {["TypeScript", "React", "Node.js", "PostgreSQL", "JWT", "REST API"].map((item, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm animate-fade-in"
                  style={{ animationDelay: `${0.9 + i * 0.05}s` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </SlideWrapper>
  );
};

export default SlideOutils;
