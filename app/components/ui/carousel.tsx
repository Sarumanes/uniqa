import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import { useDebounceCallback } from 'usehooks-ts';
import { cn } from '@app/libs/utils';
import { Button } from '@app/components/ui/button';
import { ComponentPropsWithoutRef, createContext, forwardRef, useCallback, useContext, useEffect, useState } from 'react';
import ArrowLeftIcon from '@app/components/icons/arrow-left-icon';
import ArrowRightIcon from '@app/components/icons/arrow-right-icon';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

const Carousel = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & CarouselProps>(
  ({ orientation = 'horizontal', opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        dragFree: false,
        align: 'start',
        inViewThreshold: 0.51,
        axis: orientation === 'horizontal' ? 'x' : 'y',
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const onSelect = useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on('reInit', onSelect);
      api.on('select', onSelect);

      return () => {
        api?.off('select', onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn('relative', className)}
          role='region'
          aria-roledescription='carousel'
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = 'Carousel';

const CarouselContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className='overflow-hidden'>
      <div ref={ref} className={cn('flex', orientation === 'horizontal' ? '-ml-6' : '-mt-6 flex-col', className)} {...props} />
    </div>
  );
});
CarouselContent.displayName = 'CarouselContent';

const CarouselItem = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role='group'
      aria-roledescription='slide'
      className={cn('min-w-0 shrink-0 grow-0 basis-full', orientation === 'horizontal' ? 'pl-6' : 'pt-6', className)}
      {...props}
    />
  );
});
CarouselItem.displayName = 'CarouselItem';

const CarouselPrevious = forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant, ...props }, ref) => {
    const { scrollPrev, canScrollPrev } = useCarousel();

    return (
      <Button ref={ref} variant={variant} className={cn('', className)} disabled={!canScrollPrev} onClick={scrollPrev} {...props}>
        <ArrowLeftIcon className='h-4 w-4' />
        <span className='sr-only'>Previous slide</span>
      </Button>
    );
  }
);
CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext = forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant, size, ...props }, ref) => {
    const { scrollNext, canScrollNext } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn('', className)}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ArrowRightIcon className='h-4 w-4' />
        <span className='sr-only'>Next slide</span>
      </Button>
    );
  }
);
CarouselNext.displayName = 'CarouselNext';

const CarouselCounter = ({ className, ...props }: ComponentPropsWithoutRef<'p'>) => {
  const { api } = useCarousel();
  const [total, setTotal] = useState<number | undefined>();
  const [scrollProgress, setScrollProgress] = useState<number | undefined>();
  const [inView, setInView] = useState<number | undefined>();
  const debounceSetInView = useDebounceCallback(setInView, 500);
  const onScroll = useCallback((api: CarouselApi) => {
    if (!api) return;
    setScrollProgress(api.selectedScrollSnap());
  }, []);
  const onSlidesInView = useCallback(
    (api: CarouselApi) => {
      if (!api) return;
      debounceSetInView(api.slidesInView().length);
      setTotal(api.slideNodes().length);
    },
    [debounceSetInView]
  );
  useEffect(() => {
    if (!api) return;
    api.on('scroll', onScroll);
    api.on('slidesInView', onSlidesInView);
    api.emit('scroll');
    api.emit('slidesInView');
    return () => {
      api.off('scroll', onScroll);
      api.off('slidesInView', onSlidesInView);
    };
  }, [api, onScroll, onSlidesInView]);

  if (total == undefined || scrollProgress == undefined || inView == undefined)
    return <p {...props} className={cn('', className)} />;

  return (
    <p {...props} className={cn('', className)}>
      {inView + scrollProgress} / {total}
    </p>
  );
};

export { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselCounter };
