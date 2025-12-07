import SlideWrapper from '../SlideWrapper';
import AnimatedElement from '../AnimatedElement';
import { Handshake, Users, Target } from 'lucide-react';

const SlideTitre = () => {
  return (
    <SlideWrapper className="bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <AnimatedElement delay={0.2} direction="scale">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full bg-primary-foreground/10 flex items-center justify-center animate-pulse-glow">
              <Handshake className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.4}>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Négociation du compromis
          </h1>
        </AnimatedElement>

        <AnimatedElement delay={0.6}>
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            Techniques, stratégies et bonnes pratiques pour un accord réussi
          </p>
        </AnimatedElement>

        <AnimatedElement delay={0.8}>
          <div className="flex justify-center gap-8 mt-12">
            <div className="flex flex-col items-center gap-2 animate-float" style={{ animationDelay: '0s' }}>
              <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Users className="w-7 h-7" />
              </div>
              <span className="text-sm text-primary-foreground/70">Collaboration</span>
            </div>
            <div className="flex flex-col items-center gap-2 animate-float" style={{ animationDelay: '0.3s' }}>
              <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Handshake className="w-7 h-7" />
              </div>
              <span className="text-sm text-primary-foreground/70">Compromis</span>
            </div>
            <div className="flex flex-col items-center gap-2 animate-float" style={{ animationDelay: '0.6s' }}>
              <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Target className="w-7 h-7" />
              </div>
              <span className="text-sm text-primary-foreground/70">Succès</span>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </SlideWrapper>
  );
};

export default SlideTitre;
