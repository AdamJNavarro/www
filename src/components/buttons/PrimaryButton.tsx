import * as React from "react";

type Props = {
  className?: string;
  onClick?: any;
  disabled?: boolean;
  children: React.ReactChild | string;
  type?: string;
} & React.ComponentPropsWithoutRef<"button">;

export default function Button({ className, ...rest }: Props) {
  return (
    <button
      className={`flex items-center rounded justify-center flex-none px-4 py-2 space-x-3 font-medium bg-white border border-gray-300 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-300 disabled:opacity-50 dark:bg-white dark:bg-opacity-10 disabled:bg-opacity-0 hover:border-gray-300 focus:border-gray-1000 focus:ring-0 focus:outline-none ${className}`}
      {...rest}
    />
  );
}
