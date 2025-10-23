import React from 'react';
import { Button } from '@/components/ui/button';
import { Scan } from 'lucide-react';

interface FloatingActionButtonProps {
  onClick: () => void;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 z-40 md:hidden"
      size="sm"
    >
      <Scan className="w-6 h-6" />
    </Button>
  );
};