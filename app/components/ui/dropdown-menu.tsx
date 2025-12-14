import { cn } from '@app/libs/utils';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuContent = forwardRef<
React.ElementRef<typeof DropdownMenuPrimitive.Content>,
ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, ...props },ref ) => {
  return (
    <DropdownMenuPrimitive.Content
      className={cn(className, 'z-50 min-w-[8rem] p-1 overflow-hidden rounded-lg bg-popover shadow')}
      {...props}
      ref={ref}
    />
  );
});
DropdownMenuContent.displayName = 'DropdownMenuContent';

const DropdownMenuItem = DropdownMenuPrimitive.Item;

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuPortal, DropdownMenuContent, DropdownMenuItem };
