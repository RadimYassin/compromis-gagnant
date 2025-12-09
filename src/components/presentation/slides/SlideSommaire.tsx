import SlideWrapper from '../SlideWrapper';
import AnimatedElement from '../AnimatedElement';
import { ListOrdered, Building2, Target, Repeat, PenTool, Wrench, Flag } from 'lucide-react';

const SlideSommaire = () => {
  const sommaire = [
    { num: 1, title: "Contexte et Problématique", icon: Building2, color: "from-blue-500 to-blue-600" },
    { num: 2, title: "Objectifs de la Solution", icon: Target, color: "from-green-500 to-green-600" },
    { num: 3, title: "Méthodologie Agile Scrum", icon: Repeat, color: "from-purple-500 to-purple-600" },
    { num: 4, title: "Analyse et Conception", icon: PenTool, color: "from-orange-500 to-orange-600" },
    { num: 5, title: "Outils et Technologies", icon: Wrench, color: "from-cyan-500 to-cyan-600" },
    { num: 6, title: "Conclusion et Perspectives", icon: Flag, color: "from-pink-500 to-pink-600" },
  ];

  return (
    <SlideWrapper>
      <div className="max-w-5xl mx-auto w-full">
        <AnimatedElement>
          <div className="flex items-center gap-4 mb-10">
            <div className="icon-circle">
              <ListOrdered className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="slide-title mb-0">Plan de la Présentation</h2>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 gap-6">
          {sommaire.map((item, index) => (
            <AnimatedElement 
              key={index} 
              delay={0.2 + index * 0.1}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div className="group content-card hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-bold text-primary">0{item.num}</span>
                      <div className="h-px flex-1 bg-border" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement delay={0.9}>
          <p className="text-center text-muted-foreground mt-10 italic">
            💡 Structure adaptée pour une présentation claire et progressive du projet
          </p>
        </AnimatedElement>
      </div>
    </SlideWrapper>
  );
};

export default SlideSommaire;
