import SlideWrapper from '../SlideWrapper';
import AnimatedElement from '../AnimatedElement';
import { MessageCircle, Heart, Users, Clock, Lightbulb, Shield, BookOpen, Zap } from 'lucide-react';

const SlideIntroduction = () => {
  const contexteItems = [
    { icon: Heart, text: "Préserver les relations" },
    { icon: Users, text: "Résoudre les conflits efficacement" },
    { icon: Shield, text: "Favoriser la coopération et la confiance" },
    { icon: Clock, text: "Éviter les tensions inutiles" },
  ];

  const objectifItems = [
    { icon: Lightbulb, text: "Comprendre le compromis et ses principes" },
    { icon: Zap, text: "Découvrir des techniques et stratégies concrètes" },
    { icon: BookOpen, text: "Savoir les appliquer dans diverses situations" },
    { icon: MessageCircle, text: "Développer ses compétences en communication" },
  ];

  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto w-full">
        <AnimatedElement>
          <div className="flex items-center gap-4 mb-8">
            <div className="icon-circle">
              <MessageCircle className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="slide-title mb-0">Introduction</h2>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedElement delay={0.2} direction="left">
            <div className="content-card-elevated h-full">
              <h3 className="text-2xl font-display font-semibold text-primary mb-6">Contexte</h3>
              <p className="text-muted-foreground mb-6">
                Les conflits et désaccords sont fréquents dans la vie professionnelle et personnelle. 
                La négociation du compromis permet de :
              </p>
              <ul className="space-y-4">
                {contexteItems.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-3 animate-fade-in"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={0.3} direction="right">
            <div className="content-card-elevated h-full bg-gradient-to-br from-card to-muted/30">
              <h3 className="text-2xl font-display font-semibold text-secondary mb-6">Objectifs</h3>
              <ul className="space-y-4">
                {objectifItems.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-3 animate-fade-in"
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedElement>
        </div>

        <AnimatedElement delay={0.8}>
          <p className="text-center text-muted-foreground mt-8 italic">
            💡 Note pour le présentateur : Demandez au public leurs expériences de négociation récentes
          </p>
        </AnimatedElement>
      </div>
    </SlideWrapper>
  );
};

export default SlideIntroduction;
