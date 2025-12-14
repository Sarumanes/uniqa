import { Button } from '@app/components/ui/button';
import { cn } from '@app/libs/utils';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { Slot } from '@radix-ui/react-slot';
import { Link } from '@remix-run/react';
import { ComponentPropsWithoutRef } from 'react';

type CardProps = ComponentPropsWithoutRef<'li'> & {
  asChild?: boolean;
};

function Card({ asChild, className, children, ...props }: CardProps) {
  const Comp = asChild ? Slot : 'li';
  return (
    <Comp className={cn('', className)} {...props}>
      <figure className='flex flex-col gap-y-4'>{children}</figure>
    </Comp>
  );
}

type CardImageProps = ComponentPropsWithoutRef<'div'>;

function CardImage({ className, children, ...props }: CardImageProps) {
  return (
    <div className={cn('overflow-hidden relative', className)} {...props}>
      <AspectRatio ratio={330 / 408}>
        <Slot className='size-full hover:scale-105 transition-transform duration-200'>{children}</Slot>
      </AspectRatio>
    </div>
  );
}

type CardTitleProps = ComponentPropsWithoutRef<typeof Button> & {
  to: string;
};

function CardTitle({ children, className, to, ...props }: CardTitleProps) {
  return (
    <Button variant='primary-ghost' className={cn('text-blue-1 text-lg font-semibold h-auto', className)} {...props} asChild>
      <Link to={to} viewTransition>
        {children}
      </Link>
    </Button>
  );
}

type CardCategoryProps = ComponentPropsWithoutRef<'p'>;

function CardCategory({ children, className, ...props }: CardCategoryProps) {
  return (
    <p className={cn('text-base text-blue-1', className)} {...props}>
      {children}
    </p>
  );
}

type CardContentProps = ComponentPropsWithoutRef<'figcaption'>;

function CardContent({ children, className, ...props }: CardContentProps) {
  return (
    <figcaption className={cn('flex flex-col gap-y-1', className)} {...props}>
      {children}
    </figcaption>
  );
}

export { Card, CardImage, CardTitle, CardCategory, CardContent };
