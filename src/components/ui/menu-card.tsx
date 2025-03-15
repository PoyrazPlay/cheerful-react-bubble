
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface MenuCardProps {
  title: string;
  to: string;
  icon?: React.ReactNode;
  description?: string;
  className?: string;
}

const MenuCard = ({ title, to, icon, description, className }: MenuCardProps) => {
  return (
    <Link 
      to={to}
      className={cn(
        "block p-4 rounded-lg border border-border hover:border-primary/50 transition-all",
        "hover:shadow-md hover:bg-accent group",
        className
      )}
    >
      <div className="flex items-start gap-3">
        {icon && (
          <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default MenuCard;
