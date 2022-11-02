import React from 'react';
import HOC from './HOC';
import Hooks from './Hooks';
import UseEffectHook from './UseEffectHook';
import ReferenceComponent  from './ReferenceComponent';
import UseRefHook from './UseRefHook';

const App = () => {
  return (
    <>
    <p>Today, we are learning HOC.</p>
    <Hooks />
    <UseEffectHook />
    <ReferenceComponent />
    <UseRefHook />
    </>
  )
}


export default HOC(App);


// https://codesandbox.io/s/react-life-cycle-methods-withexamples-cdtey?from-embed=&file=/src/components/Updating/componentDidUpdateMethod.js