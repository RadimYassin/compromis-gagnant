import SlideWrapper from '../SlideWrapper';
import AnimatedElement from '../AnimatedElement';
import { List, BookOpen, Lightbulb, Zap, Brain, FileText, Wrench, CheckCircle } from 'lucide-react';

const SlideSommaire = () => {
  const sommaire = [
    { num: 1, title: "Définition et importance du compromis", icon: BookOpen },
    { num: 2, title: "Principes de base de la négociation", icon: Lightbulb },
    { num: 3, title: "Techniques et stratégies avancées", icon: Zap },
    { num: 4, title: "Gestion des situations difficiles", icon: Brain },
    { num: 5, title: "Psychologie et comportements", icon: Brain },
    { num: 6, title: "Exemples pratiques et études de cas", icon: FileText },
    { num: 7, title: "Outils et ressources", icon: Wrench },
    { num: 8, title: "Conclusion et recommandations", icon: CheckCircle },
  ];

  return (
    <SlideWrapper>
      <div className="max-w-4xl mx-auto w-full">
        <AnimatedElement>
          <div className="flex items-center gap-4 mb-10">
            <div className="icon-circle">
              <List className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="slide-title mb-0">Plan / Sommaire</h2>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 gap-4">
          {sommaire.map((item, index) => (
            <AnimatedElement 
              key={item.num} 
              delay={0.1 + index * 0.08}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div className="numbered-item group cursor-pointer hover:shadow-md transition-all duration-300">
                <div className="number-badge group-hover:scale-110 transition-transform duration-300">
                  {item.num}
                </div>
                <div className="flex items-center gap-3 flex-1">
                  <item.icon className="w-5 h-5 text-primary/60" />
                  <span className="font-medium text-foreground">{item.title}</span>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement delay={1}>
          <p className="text-center text-muted-foreground mt-10 italic">
            💡 Note : Cette présentation combine théorie et pratique pour une application immédiate
          </p>
        </AnimatedElement>
      </div>
    </SlideWrapper>
  );
};

export default SlideSommaire;
