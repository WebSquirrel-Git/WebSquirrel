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
            src="/assets/videos/Interior_designer.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            title="Interior_designer.mp4"
          ></video>
        </div>

        <img
          loading="eager"
          src={WebSquirrelVideoImg.src}
          className={styles.image}
          title="Wiewiórka trzymająca tablet"
          alt="Wiewiórka trzymająca tablet"
          width={580}
          height={650}
        />
      </div>
    </div>
  );
};
export default VideoContainer;
