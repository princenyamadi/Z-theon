import { StarIcon as StarOutline } from '@heroicons/react/24/outline';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';

interface RatingProps {
  rating: number;
  reviews?: number;
  size?: 'sm' | 'md' | 'lg';
}

export const Rating: React.FC<RatingProps> = ({ rating, reviews, size = 'md' }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <StarSolid key={`star-${i}`} className={`${sizes[size]} text-yellow-400`} />
        ))}
        {[...Array(totalStars - fullStars)].map((_, i) => (
          <StarOutline key={`empty-${i}`} className={`${sizes[size]} text-gray-300`} />
        ))}
      </div>
      {reviews !== undefined && (
        <span className="text-sm text-gray-600 ml-1">({reviews})</span>
      )}
    </div>
  );
}; 