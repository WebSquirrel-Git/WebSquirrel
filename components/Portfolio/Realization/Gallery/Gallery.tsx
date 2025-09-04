'use client'
import Image, { StaticImageData } from 'next/image'
import styles from './gallery.module.scss'

interface GalleryProps{
    galleryLandscapes:StaticImageData[],
    galleryPortraits:StaticImageData[],
    alt:string
}

export const Gallery = ({galleryLandscapes,galleryPortraits,alt}:GalleryProps) =>{
    return <div className={styles.container}>
<div className={styles.landscapesBox}>
   {galleryLandscapes.map((image,i)=><Image alt={alt} src={image} key={i}/>)}
</div>
<div className={styles.portraitsBox}>
   {galleryPortraits.map((image,i)=><Image alt={alt} src={image} key={i}/>)}
</div>
    </div>
}