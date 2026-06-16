import { Modal } from 'react-bootstrap';
import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-youtube';

interface VideoModalProps {
  show: boolean;
  handleClose: () => void;
  videoUrl: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ show, handleClose, videoUrl }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    playerRef.current = videojs(videoRef.current, {
      controls: true,
      autoplay: true,
      preload: 'auto',
      fluid: true,
      responsive: true,
      playbackRates: [0.5, 1, 1.5, 2],
      bigPlayButton: true,
      sources: [{
        src: videoUrl,
        type: videoUrl.includes('youtube') ? 'video/youtube' : 'video/mp4'
      }]
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, [videoUrl, show]);

  return (
    <Modal 
      className="video-modal" 
      show={show} 
      centered 
      size="xl" 
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <div data-vjs-player style={{ width: '100%', height: '80vh' }}>
          <video
            ref={videoRef}
            className="video-js vjs-big-play-centered vjs-fluid"
            playsInline
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default VideoModal;
