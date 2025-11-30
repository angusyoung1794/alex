import React from 'react';
import { X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-slate-900 border border-pink-500/30">
        <DialogHeader>
          <DialogTitle className="text-white">{title}</DialogTitle>
        </DialogHeader>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          {embedUrl && (
            <iframe
              src={embedUrl}
              title={title}
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default YouTubeModal;