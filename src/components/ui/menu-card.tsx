
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface MenuCardProps {
  title: string;
  description?: string;
  to: string;
  icon?: React.ReactNode;
  className?: string;
}

const MenuCard = ({ title, description, to, icon, className }: MenuCardProps) => {
  return (
    <Link 
      to={to}
      className={cn(
        "group relative overflow-hidden card-glass p-5 rounded-xl flex items-center gap-4 transition-all duration-300 hover:bg-primary/5 hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      {icon && (
        <div className="flex-shrink-0 p-3 rounded-lg bg-background shadow-sm group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}
      
      <div className="flex-grow">
        <h3 className="font-medium text-lg mb-1 group-hover:text-primary transition-colors duration-200">{title}</h3>
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
      </div>
      
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
        <ArrowRight className="h-5 w-5 text-primary" />
      </div>
    </Link>
  );
};

export default MenuCard;
