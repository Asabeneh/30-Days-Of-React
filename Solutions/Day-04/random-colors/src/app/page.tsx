import styles from './page.module.css'
import RandomDiv from './RandomColorDiv'

export default function Home() {
  return (
    <main>
      <div style={{display:'flex', flexDirection:'column', justifyContent: 'center', height: "100vh"}}>
      <RandomDiv/>
      <RandomDiv/>
      <RandomDiv/>
      <RandomDiv/>
      <RandomDiv/>
      </div>
    </main>
  )
}
