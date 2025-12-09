import SlideWrapper from '../SlideWrapper';
import AnimatedElement from '../AnimatedElement';
import { Users, Briefcase, Calendar, Shield, Database, Code } from 'lucide-react';

const SlideTitre = () => {
  const floatingIcons = [
    { Icon: Users, delay: 0.5, position: 'top-20 left-20' },
    { Icon: Briefcase, delay: 0.7, position: 'top-32 right-24' },
    { Icon: Calendar, delay: 0.9, position: 'bottom-32 left-16' },
    { Icon: Shield, delay: 1.1, position: 'bottom-20 right-20' },
    { Icon: Database, delay: 1.3, position: 'top-1/2 left-12' },
    { Icon: Code, delay: 1.5, position: 'top-1/2 right-12' },
  ];

  return (
    <SlideWrapper className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      {/* Floating icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <AnimatedElement key={index} delay={delay} direction="scale">
          <div className={`absolute ${position} opacity-10`}>
            <Icon className="w-16 h-16 text-primary animate-float" style={{ animationDelay: `${delay}s` }} />
          </div>
        </AnimatedElement>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <AnimatedElement delay={0.2}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Briefcase className="w-4 h-4" />
            <span>Projet de Fin d'Année (PFA)</span>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.4}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
            Conception et Réalisation d'une
            <span className="block text-gradient mt-2">Application Web de Gestion RH</span>
          </h1>
        </AnimatedElement>

        <AnimatedElement delay={0.6}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Human Resources Management Web Application
          </p>
        </AnimatedElement>

        <AnimatedElement delay={0.8}>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="px-4 py-2 rounded-lg bg-card border border-border">
              <span className="text-sm text-muted-foreground">Auteur</span>
              <p className="font-semibold text-foreground">RADIM Yassine</p>
            </div>
            <div className="px-4 py-2 rounded-lg bg-card border border-border">
              <span className="text-sm text-muted-foreground">Filière</span>
              <p className="font-semibold text-foreground">Génie Informatique & Réseaux - MIAGE</p>
            </div>
            <div className="px-4 py-2 rounded-lg bg-card border border-border">
              <span className="text-sm text-muted-foreground">Date de Soutenance</span>
              <p className="font-semibold text-foreground">20/09/2025</p>
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={1.0}>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>Membre du Jury :</span>
            <span className="font-semibold text-foreground">Mme. SNIBA Farah</span>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={1.2}>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Appuyez sur → pour continuer</span>
          </div>
        </AnimatedElement>
      </div>
    </SlideWrapper>
  );
};

export default SlideTitre;
