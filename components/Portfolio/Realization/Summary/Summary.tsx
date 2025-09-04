'use client'
import H2About from '@/components/Ui/Headers/H2About/H2About'
import styles from './summary.module.scss'
import Image, { StaticImageData } from 'next/image'

interface SummaryProps{
    text:string,
    logo:StaticImageData,
    alt:string
}

export const Summary = ({text,logo,alt}:SummaryProps) =>{
    return <div className={styles.container}>
         <div className={styles.contentBox}>
    <h2>Podsumowanie</h2>
    <p>{text}</p>
</div>
 </div>
}