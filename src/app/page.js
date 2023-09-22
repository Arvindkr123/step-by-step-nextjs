import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <User name={"Ram"}/>
      <User name={"Ankit"}/>
      <User name={"Shayam"}/>
      Home 
    </main>
  )
}

function User(props){
  return <h1>User {props.name}</h1>
}
