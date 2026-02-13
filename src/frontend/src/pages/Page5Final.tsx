import PhotoGallery from '@/components/PhotoGallery';

const comicPhotos = [
  {
    src: '/assets/uploads/1771025145088.png',
    alt: 'Where it all started - Part 1',
  },
  {
    src: '/assets/uploads/1771025927131.png',
    alt: 'Where it all started - Part 2',
  },
  {
    src: '/assets/uploads/1771025946100.png',
    alt: 'Where it all started - Part 3',
  },
  {
    src: '/assets/uploads/1771025953219.png',
    alt: 'Where it all started - Part 4',
  },
];

export default function Page5Final() {
  return (
    <div className="container py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-rose-600 mb-6">
          this is where it all started
        </h1>
        <p className="text-xl text-foreground/80 font-serif italic mb-8">
          The beginning of our beautiful journey
        </p>
      </div>

      <PhotoGallery photos={comicPhotos} />
    </div>
  );
}
