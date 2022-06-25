import image from '../../images/matercard.png';
import banking from '../../images/banking.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCardAlt } from '@fortawesome/free-regular-svg-icons';

function Card({ name, img, bankNumber, color}) {

    return(
        <div className="container" >

        <div className="cicle cicle1"> </div>
        <div className="cicle cicle2"> </div>
        <div className="card" style={{
          backgroundColor: color,
        }}>
          <div className="header">
            <div className="chip">

              <FontAwesomeIcon icon={faCreditCardAlt} size="2x"/>
            </div>


            <div className="cookie">
              <h4>Cookie</h4>
            </div>
          </div>

          <div className="body">
              <img className="woori" src={img} />
              <h3>{name}</h3>
              <div className="block">
                <h4>NGUYEN DANH TUAN</h4>
                <p>{bankNumber}</p>
              </div>
          </div>

          <div className="footer">
            <img src={image} alt='mastercardIcon' className='mastercardIcon'/>
            <img src={banking} alt='bankingImage' className='bankingIcon'/>
          </div>
        </div>
    </div>
    )
}

export default Card