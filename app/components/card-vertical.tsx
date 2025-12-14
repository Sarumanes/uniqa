import { Button } from '@app/components/ui/button';
import { cn } from '@app/libs/utils';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { Slot } from '@radix-ui/react-slot';
import { Link } from '@remix-run/react';
import { ComponentPropsWithoutRef } from 'react';

type CardVerticalProps = ComponentPropsWithoutRef<'li'> & {
  asChild?: boolean;
};

function CardVertical({ asChild, className, children, ...props }: CardVerticalProps) {
  const Comp = asChild ? Slot : 'li';
  return (
    <Comp className={cn('', className)} {...props}>
      <figure className='flex flex-col gap-y-4'>{children}</figure>
    </Comp>
  );
}

type CardVerticalImageProps = ComponentPropsWithoutRef<'div'>;

function CardVerticalImage({ className, children, ...props }: CardVerticalImageProps) {
  return (
    <div className={cn('overflow-hidden', className)} {...props}>
      <AspectRatio ratio={684 / 408}>
        <Slot className='size-full object-cover hover:scale-105 transition-transform duration-200'>{children}</Slot>
      </AspectRatio>
    </div>
  );
}

type CardVerticalTitleProps = ComponentPropsWithoutRef<typeof Button> & {
  to: string;
};

function CardVerticalTitle({ children, className, to, ...props }: CardVerticalTitleProps) {
  return (
    <Button
      variant='primary-ghost'
      className={cn('text-blue-1 text-lg font-semibold col-span-1 h-auto', className)}
      {...props}
      asChild
    >
      <Link to={to} viewTransition>
        {children}
      </Link>
    </Button>
  );
}

type CardVerticalCategoryProps = ComponentPropsWithoutRef<'p'>;

function CardVerticalCategory({ children, className, ...props }: CardVerticalCategoryProps) {
  return (
    <p className={cn('text-base text-blue-1 col-span-1', className)} {...props}>
      {children}
    </p>
  );
}

type CardVerticalContentProps = ComponentPropsWithoutRef<'figcaption'>;

function CardVerticalContent({ children, className, ...props }: CardVerticalContentProps) {
  return (
    <figcaption className={cn('grid grid-cols-2 items-center', className)} {...props}>
      {children}
    </figcaption>
  );
}

export { CardVertical, CardVerticalImage, CardVerticalTitle, CardVerticalCategory, CardVerticalContent };
