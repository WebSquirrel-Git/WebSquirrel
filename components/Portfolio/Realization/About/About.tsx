'use client'
import Image, { StaticImageData } from 'next/image'
import styles from './about.module.scss'

interface AboutProps{
    text1:string,
    text2:string,
    logo:StaticImageData,
    alt:string
}

export const About = ({text1,text2,logo,alt}:AboutProps) =>{
    return <div className={styles.container}>
<div className={styles.contentBox}>
    <h2>O firmie</h2>
    <p>{text1}</p>
<p>{text2}</p>
</div>
<Image className={styles.image} alt={alt} src={logo}/>
    </div>
}