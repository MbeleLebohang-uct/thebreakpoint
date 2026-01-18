import {
  Wifi,
  Car,
  Heart,
  Coffee,
  Tv,
  Wind,
  Users,
  Bed,
  Bath,
  TreePine,
  Mountain,
  LucideIcon,
  AirVent,
} from 'lucide-react';

export const iconMap: Record<string, LucideIcon> = {
  Wifi,
  Car,
  Heart,
  Coffee,
  Tv,
  Wind,
  Users,
  Bed,
  Bath,
  TreePine,
  Mountain,
  AirVent
};

export const getIcon = (iconName: string): LucideIcon => {
  return iconMap[iconName] || Heart; // Default to Heart if icon not found
};
