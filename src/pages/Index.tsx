import { useState, useCallback, useEffect } from 'react';
import SlideNavigation from '@/components/presentation/SlideNavigation';
import SlideTitre from '@/components/presentation/slides/SlideTitre';
import SlideIntroduction from '@/components/presentation/slides/SlideIntroduction';
import SlideSommaire from '@/components/presentation/slides/SlideSommaire';
import SlideObjectifs from '@/components/presentation/slides/SlideObjectifs';
import SlideMethodologie from '@/components/presentation/slides/SlideMethodologie';
import SlideAnalyse from '@/components/presentation/slides/SlideAnalyse';
import SlideOutils from '@/components/presentation/slides/SlideOutils';
import SlideConclusion from '@/components/presentation/slides/SlideConclusion';

const slides = [
  SlideTitre,
  SlideIntroduction,
  SlideSommaire,
  SlideObjectifs,
  SlideMethodologie,
  SlideAnalyse,
  SlideOutils,
  SlideConclusion,
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'Enter':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'Backspace':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(slides.length - 1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="h-screen flex flex-col">
        <div className="flex-1 overflow-hidden">
          <CurrentSlideComponent key={currentSlide} />
        </div>
        
        <SlideNavigation
          currentSlide={currentSlide}
          totalSlides={slides.length}
          onPrevious={prevSlide}
          onNext={nextSlide}
          onGoToSlide={goToSlide}
        />
      </div>
    </div>
  );
};

export default Index;
