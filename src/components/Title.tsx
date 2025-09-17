// components/Title.tsx
import {ElementType, ReactNode} from 'react';
import clsx from 'clsx';
import {DM_Serif_Display} from 'next/font/google';

const font = DM_Serif_Display({weight: ['400'], subsets: ['latin']});

type TitleProps<T extends ElementType> = {
  as?: T; // element type (h1, h2, p, etc.)
  children: ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;

export function Title<T extends ElementType = 'h2'>({
  as,
  children,
  className,
  ...props
}: TitleProps<T>) {
  const Component = as || 'h2';
  const tagClasses = [];

  if (Component === 'h2') {
    tagClasses.push('text-3xl');
  }

  return (
    <Component
      className={clsx(
        font.className,
        tagClasses,
        className, // allow overrides/additions
      )}
      {...props}>
      {children}
    </Component>
  );
}
