import './MobileBoard.scss'

export const MobileBoard = ({size, randomNums}) => {

  const selectedNumStyle = (actualNum) => {
    if(randomNums.includes(actualNum)) {
      return {
        borderRadius: '50%',
        color: 'white',
        filter: 'drop-shadow( 1px 1px 4px #fff )',
        fontWeight: 'bold',
      }
    }
  }

  return (
    <section className='MobileBoard'>
      {[...Array(size)].map((element, i) => {
        const numberDisplay = i + 1
        return <p style={selectedNumStyle(numberDisplay)}>{numberDisplay}</p>
      })}
    </section>
  )
}