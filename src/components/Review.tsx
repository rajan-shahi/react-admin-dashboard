import { Rating, Star } from '@smastrom/react-rating';

import { CustomerReview } from 'types';
import { useGlobalProvider } from 'hooks';
import { cn } from 'helpers';

export const Review = ({ review }: Props) => {
  const { author, rating, text, authorImageUrl } = review;
  const { isDarkTheme } = useGlobalProvider();

  return (
    <div
      className={cn('border-b border-dark/[0.2] pb-2 mb-2 px-2.5', {
        'border-dark': isDarkTheme,
      })}
    >
      <div className="flex items-center gap-2.5">
        <div className="w-[30px] h-[30px] rounded-full bg-dark overflow-hidden">
          <img
            src={authorImageUrl}
            alt="customer thumb"
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="text-xs">{author}</p>
          <div>
            <Rating
              style={{ maxWidth: 80 }}
              value={rating}
              readOnly
              itemStyles={{
                itemShapes: Star,
                activeFillColor: isDarkTheme ? '#ECEBEB' : '#1E1E1E',
              }}
            />
          </div>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-xs">{text}</p>
      </div>
    </div>
  );
};

type Props = {
  review: CustomerReview;
};
