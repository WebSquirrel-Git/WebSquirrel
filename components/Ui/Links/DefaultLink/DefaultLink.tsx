'use client'
import Link from 'next/link';
import styles from './defaultLink.module.scss'

interface DefaultLinkPropsType{
    name:string;
    url:string;
}

const DefaultLink=({name,url}:DefaultLinkPropsType)=>{

    return <Link href={url} className={styles.link}>{name}</Link>
}

export default DefaultLink