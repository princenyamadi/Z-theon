import { Category } from '../../types';
import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CircleStackIcon,
  DeviceTabletIcon,
  BoltIcon,
  GlobeAltIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline';

const iconComponents = {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CircleStackIcon,
  DeviceTabletIcon,
  BoltIcon,
  GlobeAltIcon,
  CommandLineIcon,
};

interface CategoryGridProps {
  categories: Category[];
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  const handleCategoryClick = (slug: string) => {
    console.log('Category clicked:', slug);
  };

  const getIconComponent = (iconName: string) => {
    const IconComponent = iconComponents[iconName as keyof typeof iconComponents];
    return IconComponent ? <IconComponent className="w-6 h-6 text-gray-600" /> : null;
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.slug)}
          className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
        >
          <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full mb-3">
            {getIconComponent(category.icon)}
          </div>
          <span className="text-sm font-medium text-gray-700">{category.name}</span>
        </button>
      ))}
    </div>
  );
}; 