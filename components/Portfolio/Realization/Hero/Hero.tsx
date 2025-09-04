'use client'
import Image from 'next/image'
import styles from './hero.module.scss'
import PcImg from '@/public/portfolio/perlia/pc.png'
export const Hero = () =>{
    return <div className={styles.container}>
        <div className={styles.contentBox}>
            <div className={styles.headerBox}>
                 <span className={styles.subHeader}>SKLEP INTERNETOWY</span>
            <h1>Perlia</h1>
            </div>
           
            <div className={styles.tableContainer}>
<div className={styles.tableItem}>
    <p className={styles.accent}>Technologia</p>
    <p className={styles.answer}>WooCommerce</p>
</div>
<div className={styles.tableItem}>
    <p className={styles.accent}>Branża</p>
    <p className={styles.answer}>Rękodzieło</p>
</div>
<div className={styles.tableItem}>
    <p className={styles.accent}>Czas realizacji</p>
    <p className={styles.answer}>4 tygodnie</p>
</div>
<div className={styles.tableItem}>
    <p className={styles.accent}>Cel</p>
    <p className={styles.answer}>Stworzenie sklepu, który będzie pełnił funkcję katalogu produktów</p>
</div>
            </div>
        </div>
        <Image src={PcImg} alt='Perlia' className={styles.image}/>
    </div>
}