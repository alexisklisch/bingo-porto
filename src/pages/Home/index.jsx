import { useEffect, useState } from "preact/hooks"
import { soundHandler } from "../../handler/soundHandler"
import { Logo } from "../../components/Logo"
import { LogoAlexisKlisch } from "../../components/LogoAlexisKlisch"
import { MobileBoard } from "../../components/MobileBoard"
import { Ball } from "../../components/Ball"
import './Home.scss'
import { LastBallsSection } from "../../components/ui/LastBallsSection"

const sizeNumbers = 90

export const Home = () => {
  const [randomList, setRandomList] = useState([])
  const [pause, setPause] = useState({isPaused: false, list: []})

  useEffect(() => {
    const tempList = Array.from(randomList)
    
    const addNumber = setInterval(() => {
      
      const verifNumber = () => {
        const randomNum = Math.floor(Math.random() * (sizeNumbers + 1))
        
        if(tempList.includes(randomNum)){
          verifNumber()
        } else {
          tempList.push(randomNum)
          soundHandler(randomNum);
        }
      }
      verifNumber()
      
      setRandomList(tempList)
    }, 5500);
    
    tempList.length >= sizeNumbers + 1 && clearInterval(addNumber)
    return () => clearInterval(addNumber);
  }, [randomList]);

  return (
    <div className="wrapper">
      <Logo/>
      <section className="config-section">
        <button type="button" onClick={() => setRandomList([])}>Reiniciar</button>
        <button type="button" onClick={() => setPause({isPaused: !pause.isPaused, list: randomList})}>Pausar</button>
      </section>
      <LastBallsSection>
        {randomList.slice(-4).reverse().map(elem => {
          return <Ball num={elem}/>
        })}
      </LastBallsSection>
      <MobileBoard size={sizeNumbers} randomNums={randomList}/>
      <footer>
        <a target='_blank' href="https://alexisklisch.com">
          <LogoAlexisKlisch/>
        </a>
      </footer>
    </div>
  )
}