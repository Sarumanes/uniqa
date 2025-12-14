import { cva } from 'class-variance-authority';

// ghost: primary and secondary
// contained: primary and secondary
// primary: blue-1
// secondary: white

const buttonVariants = cva('inline-flex gap-x-2 items-center outline-none transition-all duration-200 ease-in-out ', {
  variants: {
    variant: {
      primary: 'bg-blue-1 text-white px-4 aria-[current="page"]:border-b hover:bg-blue-4 hover:text-blue-1/20',
      'primary-ghost': 'text-blue-1 aria-[current="page"]:border-b hover:text-blue-4 group/button',
      secondary: 'bg-white text-blue-1 aria-[current="page"]:border-b hover:bg-blue-5',
      'secondary-ghost': 'text-white aria-[current="page"]:border-b hover:text-blue-5 group/button',
    },
    size: {
      lg: 'text-base font-semibold h-12',
      default: 'text-base font-semibold h-6',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
});

export { buttonVariants };
