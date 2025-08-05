import React from 'react';
import { LucideIcon } from 'lucide-react';

// 3D icon assets mapping
import rocketIcon from '@/assets/icons/rocket-3d.png';
import zapIcon from '@/assets/icons/zap-3d.png';
import usersIcon from '@/assets/icons/users-3d.png';
import trendingIcon from '@/assets/icons/trending-3d.png';
import eyeIcon from '@/assets/icons/eye-3d.png';
import targetIcon from '@/assets/icons/target-3d.png';
import settingsIcon from '@/assets/icons/settings-3d.png';
import paletteIcon from '@/assets/icons/palette-3d.png';
import brainIcon from '@/assets/icons/brain-3d.png';
import globeIcon from '@/assets/icons/globe-3d.png';
import chartIcon from '@/assets/icons/chart-3d.png';
import briefcaseIcon from '@/assets/icons/briefcase-3d.png';
import puzzleIcon from '@/assets/icons/puzzle-3d.png';
import awardIcon from '@/assets/icons/award-3d.png';

interface Icon3DProps {
  name: string;
  LucideIcon?: LucideIcon;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  gradient?: string;
}

const iconAssets: Record<string, string> = {
  rocket: rocketIcon,
  zap: zapIcon,
  users: usersIcon,
  trending: trendingIcon,
  eye: eyeIcon,
  target: targetIcon,
  settings: settingsIcon,
  palette: paletteIcon,
  brain: brainIcon,
  globe: globeIcon,
  chart: chartIcon,
  briefcase: briefcaseIcon,
  puzzle: puzzleIcon,
  award: awardIcon,
};

const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-16 h-16',
  lg: 'w-20 h-20',
  xl: 'w-24 h-24'
};

const Icon3D: React.FC<Icon3DProps> = ({ 
  name, 
  LucideIcon, 
  className = '', 
  size = 'md',
  gradient = 'from-blue-500 to-purple-500'
}) => {
  const iconAsset = iconAssets[name.toLowerCase()];
  const sizeClass = sizeClasses[size];

  if (iconAsset) {
    // Use 3D PNG asset
    return (
      <div className={`relative ${sizeClass} ${className}`}>
        {/* Enhanced background glow layers */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 blur-xl rounded-full scale-150 transition-all duration-500 group-hover:opacity-30 group-hover:scale-175`}></div>
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 blur-2xl rounded-full scale-200 transition-all duration-700 group-hover:opacity-20`}></div>
        
        {/* 3D container with perspective */}
        <div className="relative w-full h-full transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 transform-gpu perspective-1000" 
             style={{ 
               transformStyle: 'preserve-3d',
               filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2)) drop-shadow(0 6px 6px rgba(0,0,0,0.1))'
             }}>
          
          {/* 3D icon image */}
          <img 
            src={iconAsset} 
            alt={`${name} 3D icon`}
            className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110"
            style={{
              filter: 'brightness(1.1) contrast(1.1) saturate(1.2)',
              transform: 'translateZ(20px)'
            }}
          />
          
          {/* Reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Enhanced multiple shadow layers */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-40 rounded-full blur-3xl transition-all duration-500 -z-10 scale-125`}></div>
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 rounded-full blur-4xl transition-all duration-700 -z-20 scale-150`}></div>
      </div>
    );
  }

  // Enhanced Lucide icon with 3D effects
  if (LucideIcon) {
    return (
      <div className={`relative ${sizeClass} ${className}`}>
        {/* Enhanced gradient background layers */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-15 blur-xl rounded-3xl scale-150 transition-all duration-500 group-hover:opacity-25 group-hover:scale-175`}></div>
        
        {/* 3D icon container with enhanced styling */}
        <div className={`relative w-full h-full bg-gradient-to-br ${gradient} rounded-3xl p-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-2xl group-hover:shadow-3xl transform-gpu`}
             style={{ 
               transformStyle: 'preserve-3d',
               boxShadow: `
                 0 20px 40px -15px rgba(0,0,0,0.3),
                 0 10px 20px -10px rgba(0,0,0,0.2),
                 inset 0 1px 0 rgba(255,255,255,0.2),
                 inset 0 -1px 0 rgba(0,0,0,0.1)
               `
             }}>
          
          {/* Icon with enhanced 3D transform */}
          <LucideIcon 
            className="w-full h-full text-white transition-all duration-500 group-hover:scale-110" 
            strokeWidth={2}
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
              transform: 'translateZ(10px)'
            }}
          />
          
          {/* Highlight overlay */}
          <div className="absolute inset-2 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl opacity-60"></div>
          
          {/* Inner shadow for depth */}
          <div className="absolute inset-0 rounded-3xl shadow-inner opacity-30" style={{
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2), inset 0 -2px 4px rgba(255,255,255,0.1)'
          }}></div>
        </div>
        
        {/* Enhanced multi-layer glow effects */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-40 rounded-3xl blur-2xl transition-all duration-500 -z-10 animate-pulse`}></div>
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-3xl transition-all duration-700 -z-20 scale-150`}></div>
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 rounded-3xl blur-4xl transition-all duration-900 -z-30 scale-200`}></div>
      </div>
    );
  }

  return null;
};

export default Icon3D;