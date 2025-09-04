'use client'
import Image, { StaticImageData } from 'next/image'
import styles from './hero.module.scss'
import PcImg from '@/public/portfolio/perlia/pc.png'
import Link from 'next/link'

interface HeroProps{
    subheader:string,
    header:string,
    technology:string,
    industry:string,
    time:string,
    target:string,
    image:StaticImageData,
    link:{
        label:string,
        url:string
    }
}

export const Hero = ({subheader,header,target,technology,time,image,industry,link}:HeroProps) =>{
    return <div className={styles.container}>
        <div className={styles.contentBox}>
            <div className={styles.headerBox}>
                 <span className={styles.subHeader}>{subheader}</span>
            <h1>{header}</h1>
            </div>
           
            <div className={styles.tableContainer}>
<div className={styles.tableItem}>
    <p className={styles.accent}>Technologia</p>
    <p className={styles.answer}>{technology}</p>
</div>
<div className={styles.tableItem}>
    <p className={styles.accent}>Branża</p>
    <p className={styles.answer}>{industry}</p>
</div>
<div className={styles.tableItem}>
    <p className={styles.accent}>Czas realizacji</p>
    <p className={styles.answer}>{time}</p>
</div>
<div className={styles.tableItem}>
    <p className={styles.accent}>Cel</p>
    <p className={styles.answer}>{target}</p>
</div>
<div className={styles.tableItem}>
    <p className={styles.accent}>Strona</p>
    <Link href={link.url} className={styles.answer}>{link.label}</Link>
</div>
            </div>
        </div>
        <Image src={image} alt={header} className={styles.image}/>
    </div>
}