import ArrowDownIcon from '@app/components/icons/arrow-down-icon';
import { Button } from '@app/components/ui/button';
import { cn } from '@app/libs/utils';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type { ComponentPropsWithRef } from 'react';

const Accordion = AccordionPrimitive.Accordion;

function AccordionItem({ className, ...props }: ComponentPropsWithRef<typeof AccordionPrimitive.AccordionItem>) {
  return <AccordionPrimitive.AccordionItem className={cn('border-t border-t-blue-1 py-4', className)} {...props} />;
}

function AccordionTrigger({ className, children, ...props }: ComponentPropsWithRef<typeof AccordionPrimitive.AccordionTrigger>) {
  return (
    <Button asChild variant='primary-ghost' className='text-2xl font-semibold h-auto'>
      <AccordionPrimitive.AccordionTrigger className={cn('flex items-center justify-between w-full group', className)} {...props}>
        {children}
        <ArrowDownIcon className='group-data-[state="open"]:rotate-180 duration-150 transition-transform' />
      </AccordionPrimitive.AccordionTrigger>
    </Button>
  );
}

function AccordionContent({ className, children, ...props }: ComponentPropsWithRef<typeof AccordionPrimitive.AccordionContent>) {
  return (
    <AccordionPrimitive.AccordionContent
      className={cn(
        'text-base text-blue-1 overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
        className
      )}
      {...props}
    >
      <div className='pt-4'>{children}</div>
    </AccordionPrimitive.AccordionContent>
  );
}

function AccordionHeader({ className, ...props }: ComponentPropsWithRef<typeof AccordionPrimitive.AccordionHeader>) {
  return <AccordionPrimitive.AccordionHeader className={cn('', className)} {...props} />;
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent, AccordionHeader };
