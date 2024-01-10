import { useCallback, useEffect, useState } from 'react';
import './App.css';

type TState = 'GO' | 'PREPARE' | 'STOP' | 'WARNING';
type TLight = 'RED' | 'YELLOW' | 'GREEN';
type TTimes = {
  STOP: number,
  PREPARE: number,
  GO: number,
  WARNING: number,
}

interface IStreetLight {
  initState?: TState,
  times?: TTimes
}

const availableStates: { [key: string]: TLight[] } = {
  'GO':      [ 'GREEN' ],
  'PREPARE': [ 'RED', 'YELLOW' ],
  'STOP':    [ 'RED' ],
  'WARNING': [ 'YELLOW' ],
};

const stateOrder: TState[] = [ 'STOP', 'PREPARE', 'GO', 'WARNING' ];

const defaultTimes = {
  'STOP':    3 * 1000,
  'PREPARE': 1 * 1000,
  'GO':      4 * 1000,
  'WARNING': 2 * 1000,
};

const initStreetLightState = {
  RED:    false,
  YELLOW: false,
  GREEN:  false,
};

function StreetLight( { initState = 'STOP', times = defaultTimes }: IStreetLight ) {
  const [ state, setState ] = useState<TState>( initState );
  const [ streetLightState, setStreetLightState ] = useState( initStreetLightState );

  function getLightClassName( className: TLight ) {
    if ( !streetLightState[className] ) return 'light';

    return `light ${className.toLowerCase()} ${streetLightState[className] ? 'light-on' : 'light-off'}`;
  }

  const processLights = useCallback( () => {
    return setTimeout( () => {
      const processIndex = stateOrder.indexOf( state );
      const nextProcessIndex = processIndex === stateOrder.length - 1 ? 0 : processIndex + 1;
      setState( stateOrder[nextProcessIndex] );
    }, times[state] );
  }, [ state ] );

  function handleLightOn() {
    const lightsToLightOn = availableStates[state];
    setStreetLightState( () => {
      return {
        ...initStreetLightState,
        'RED':    lightsToLightOn.includes( 'RED' ),
        'YELLOW': lightsToLightOn.includes( 'YELLOW' ),
        'GREEN':  lightsToLightOn.includes( 'GREEN' ),
      };
    } );
  }

  useEffect( () => {
    const processLightsTimeout = processLights();
    handleLightOn();
    return () => {
      clearTimeout( processLightsTimeout );
    };
  }, [ state ] );

  return (
    <>
      <div className={'streetLight'}>
        <div className={getLightClassName( 'RED' )}></div>
        <div className={getLightClassName( 'YELLOW' )}></div>
        <div className={getLightClassName( 'GREEN' )}></div>
      </div>
    </>
  );
}

export default StreetLight;
