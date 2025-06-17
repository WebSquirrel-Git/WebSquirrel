'use client';
import styles from './videoContainer.module.scss';
import WebSquirrelVideoImg from '@/public/assets/logo/WebSquirrel-video.svg';

interface OfferVideoContainerPropsType {
  videoTitle: string;
}

const VideoContainer = ({videoTitle}: OfferVideoContainerPropsType) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div id="video-container" className={styles.videoBox}>
          <video
            src={`/assets/videos/${videoTitle}`}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          ></video>
        </div>

        <img src={WebSquirrelVideoImg.src} className={styles.image} />
      </div>
    </div>
  );
};
export default VideoContainer;
