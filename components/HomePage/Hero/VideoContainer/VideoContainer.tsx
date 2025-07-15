'use client';
import styles from './videoContainer.module.scss';
import WebSquirrelVideoImg from '@/public/assets/logo/WebSquirrel-video.svg';
// import Video1 from '@/public/assets/videos/Timeline3.mp4'
const VideoContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div id="video-container" className={styles.videoBox}>
          <video
            src="/assets/videos/Woocommerce_shop.mp4"
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
