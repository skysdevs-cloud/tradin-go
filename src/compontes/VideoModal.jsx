export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="relative w-full max-w-3xl rounded-xl bg-black">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-3xl"
        >
          ×
        </button>

        {/* Video */}
        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full rounded-xl"
            src="https://www.youtube.com/embed/NbavN0ZnQmo?autoplay=1"
            title="Green Practices Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
