
import React from 'react';

interface HomeLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const HomeLayout = ({ children, title, subtitle }: HomeLayoutProps) => {
  return (
    <div className="flex-1 flex flex-col items-center w-full px-4 py-8 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl w-full">
        {title && (
          <h1 className="text-3xl font-bold tracking-tight mb-2 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            {title}
          </h1>
        )}
        
        {subtitle && (
          <p className="text-muted-foreground text-lg text-center mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        
        <div className="mt-6 w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
