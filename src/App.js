import Card from './components/Card';
import Button from '@mui/material/Button';
import woori from './images/worri.webp';
import wooribank from './images/worribank.png';
import shinhan from './images/shinhan.png';
import nonghyup from './images/nonghuyp.png'
import {useState} from 'react';

const data = [
  {
    img: woori,
    bankNumber: 1002560243677,
    color: 'rgba(255, 255, 255, 0.27)',
  },
  {
    name:'Super Woori Card',
    img: wooribank,
    bankNumber: 1002461507728,
    color: 'rgba(27, 243, 136, 0.27)',
  },
  {
    name:'Shinhan',
    img: shinhan,
    bankNumber: 110525796054,
    color: 'rgba(220, 22, 37, 0.21)',
  },
  {
    name:'Nonghyup',
    img: nonghyup,
    bankNumber: 3021517570711,
    color: 'rgba(72, 146, 208, 0.41)',
  }

]

function App() {
  const [number, setNumber] = useState(0);
  console.log(number)
  return (
    <div className="App">
      <Card name={data[number].name} img={data[number].img} bankNumber={data[number].bankNumber} color={data[number].color}/>
      <div className="btn-block">
        <Button variant="outlined" onClick={() => {
          number === 0 ? setNumber(data.length - 1) : setNumber(number - 1);
        }
          } >Back</Button>
        <Button variant="outlined" onClick={() => {
          number === data.length - 1 ? setNumber(0) : setNumber(number + 1);
          }}>Next</Button>
      </div>
    </div>
  );
}

export default App;
