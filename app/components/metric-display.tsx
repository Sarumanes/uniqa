import Divider from '@app/components/ui/divider';
import { cn } from '@app/libs/utils';
import { ComponentPropsWithoutRef } from 'react';

type MetricDisplayProps = ComponentPropsWithoutRef<'div'> & {
  asChild?: boolean;
};

function MetricDisplay({ children, className, ...props }: MetricDisplayProps) {
  return (
    <div className={cn('flex flex-col gap-y-5 justify-between', className)} {...props}>
      <Divider />
      {children}
    </div>
  );
}

type MetricDisplayTitleProps = ComponentPropsWithoutRef<'h5'>;

function MetricDisplayTitle({ children, className, ...props }: MetricDisplayTitleProps) {
  return (
    <h5 className={cn('text-base text-blue-1 pe-16 flex-1', className)} {...props}>
      {children}
    </h5>
  );
}

type MetricDisplayNumberProps = ComponentPropsWithoutRef<'h2'>;

function MetricDisplayNumber({ children, className }: MetricDisplayNumberProps) {
  return <h2 className={cn('text-4xl font-semibold text-blue-1', className)}>{children}</h2>;
}

function MetricDisplayContent({ className, children }: ComponentPropsWithoutRef<'div'>) {
  return <div className={cn('flex flex-col justify-between flex-1', className)}>{children}</div>;
}

export { MetricDisplay, MetricDisplayTitle, MetricDisplayNumber, MetricDisplayContent };
