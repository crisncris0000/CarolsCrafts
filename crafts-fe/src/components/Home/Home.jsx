import React from 'react';
import Contact from './Contact';
import AboutMe from './AboutMe';
import SampleItems from './SampleItems';
import { useSelector } from 'react-redux';

export default function Home() {
  const user = useSelector(state => state.user.value);

  console.log(user);
  return (
    <>
      <AboutMe />
      <SampleItems />
      <Contact />
    </>
  )
  
}
