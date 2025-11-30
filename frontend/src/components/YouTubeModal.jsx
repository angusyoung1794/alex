import React from 'react';
import { X } from 'lucide-react';

const YouTubeModal = ({ isOpen, onClose, videoUrl, title }) => {
  // Extract video ID from YouTube URL
  const getVideoId = (url) => {
    if (!url) return null;
    // Match both shorts and regular video URLs
    const shortsMatch = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
    const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
    const videoId = shortsMatch ? shortsMatch[1] : (watchMatch ? watchMatch[1] : null);
    return videoId;
  };

  const videoId = getVideoId(videoUrl);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : null;

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl mx-4 bg-slate-900 border-2 border-pink-500/30 rounded-2xl shadow-2xl shadow-pink-500/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 w-10 h-10 bg-pink-600 hover:bg-pink-500 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:scale-110"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="p-6 border-b border-pink-500/20">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>

        {/* Video Container */}
        <div className="p-6">
          <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
            {embedUrl && (
              <iframe
                src={embedUrl}
                title={title}
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  border: 'none',
                  display: 'block',
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeModal;