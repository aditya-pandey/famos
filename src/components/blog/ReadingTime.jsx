import { Clock3 } from 'lucide-react';
import { getReadingTime } from '../../utils/blog';

export default function ReadingTime({ minutes }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <Clock3 aria-hidden="true" size={16} />
      {getReadingTime(minutes)}
    </span>
  );
}
