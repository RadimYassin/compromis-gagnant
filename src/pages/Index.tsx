import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import SlideNavigation from '@/components/presentation/SlideNavigation';
import SlideTitre from '@/components/presentation/slides/SlideTitre';
import SlideIntroduction from '@/components/presentation/slides/SlideIntroduction';
import SlideSommaire from '@/components/presentation/slides/SlideSommaire';
import SlideDefinition from '@/components/presentation/slides/SlideDefinition';
import SlidePrincipes from '@/components/presentation/slides/SlidePrincipes';
import SlideTechniques from '@/components/presentation/slides/SlideTechniques';
import SlideSituations from '@/components/presentation/slides/SlideSituations';
import SlidePsychologie from '@/components/presentation/slides/SlidePsychologie';
import SlideExemples from '@/components/presentation/slides/SlideExemples';
import SlideOutils from '@/components/presentation/slides/SlideOutils';
import SlideConseils from '@/components/presentation/slides/SlideConseils';
import SlideConclusion from '@/components/presentation/slides/SlideConclusion';

const slides = [
  SlideTitre,
  SlideIntroduction,
  SlideSommaire,
  SlideDefinition,
  SlidePrincipes,
  SlideTechniques,
  SlideSituations,
  SlidePsychologie,
  SlideExemples,
  SlideOutils,
  SlideConseils,
  SlideConclusion,
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(slides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious, goToSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <AnimatePresence mode="wait">
        <CurrentSlideComponent key={currentSlide} />
      </AnimatePresence>
      
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevious={goToPrevious}
        onNext={goToNext}
        onGoToSlide={goToSlide}
      />
    </div>
  );
};

export default Index;
