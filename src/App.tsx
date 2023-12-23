import { useState } from 'react';
import './styles.scss';

function App() {

  const [accepted, setAccepted] = useState(false);
  const [counter, setCounter] = useState(0);
  const [buttonPosition, setButtonPosition] = useState({});

  const moveButton = () => {

    // Updated attempts counter
    setCounter(prev => prev + 1);

    // Get the viewport dimensions minus the "pseudo button size" to avoid overflow
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) - 50;
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) - 100;

    // Generate random position within the viewport
    const randomTop = Math.floor(Math.random() * vh);
    const randomLeft = Math.floor(Math.random() * vw);

    // Update the button style with the new position
    setButtonPosition({
      position: 'absolute',
      top: `${randomTop}px`,
      left: `${randomLeft}px`,
    });
  };

  
  return (
    <>
      <div className="app-body">
        { accepted ?
          <>
            <p className="title">Hurray!!</p>
            <img src="love.gif" alt="" />
            <p className="description">See you in a couple of weeks :P</p>
          </>
          :
          <>
            <p className="title">Will you marry me?</p>
            <img src="bounce.gif" alt="" />
            <div className="button-group">
              <button onClick={() => setAccepted(true)}>of course</button>
              <button onClick={() => moveButton()} style={buttonPosition}>maybe</button>
            </div>
          </>
        }
      </div>

      { counter > 0 &&
        <div className='attempts'>
          <p className='main-text'>You tried to say maybe {counter} time{counter !== 1 ? 's' : null}...</p>
          <p className='sub-text'>Que feo, eso no se hace.</p>
        </div>
      }
    </>
  )
}

export default App;
