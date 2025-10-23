import React from 'react';
import { Button } from '@/components/ui/button';
import { Scan, Package } from 'lucide-react';

interface JobFloatingButtonProps {
  onClick: () => void;
}

export const JobFloatingButton: React.FC<JobFloatingButtonProps> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 z-50 flex flex-col items-center justify-center text-white border-4 border-white"
      size="sm"
    >
      <Scan className="w-6 h-6 mb-0.5" />
      <span className="text-xs font-bold">USE</span>
    </Button>
  );
};