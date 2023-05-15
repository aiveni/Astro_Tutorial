import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const greeting =  messages[(Math.floor(Math.random() * messages.length))];
  
  return (
    <div> 
      <h1 className='SaludoRandom'>{greeting}, Bienvenido a Astroblog!!!!!</h1>
    </div>
  );
}
