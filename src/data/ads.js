/* Mock sponsored ads shown to non-Premium readers. Brands are fictional.
   Drop matching images into public/ads/ — e.g. public/ads/mobile.jpg.
   A missing file falls back to a tinted panel automatically. */
export const ADS = [
  {
    id: 'mobile',
    image: '/ads/mobile.jpg',
    icon: '📱',
    color: '#5c8bd6',
    title: 'Bharat Mobile · Unlimited 5G',
    body: 'Nationwide 5G plans from ₹299 a month. Port your number in minutes.',
    cta: 'See plans',
  },
  {
    id: 'bank',
    image: '/ads/bank.jpg',
    icon: '💳',
    color: '#3fa98c',
    title: 'FinEdge Savings Account',
    body: 'Zero balance, up to 7% interest, and a free virtual debit card.',
    cta: 'Open account',
  },
  {
    id: 'edu',
    image: '/ads/edu.jpg',
    icon: '🎓',
    color: '#d98a3d',
    title: 'EduLeap Live Classes',
    body: 'Crack UPSC, banking and SSC exams with mentor-led live batches.',
    cta: 'Start learning',
  },
]
