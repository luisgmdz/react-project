import { useState, useEffect } from 'react';
import { Heading, Image } from '@chakra-ui/react';
import { Launchitem } from './components/LaunchItem';
import * as API from './services/launches';
import Logo from './assets/SpaceX-Logo.svg.png';


export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then((data) => {
      setLaunches(data);
      console.log(launches);
    });
  }, []);

  return (
    <>
      <Image m={4} src={Logo} width={300}></Image>
      <Heading as="h1" m={4} fontSize="lg">SpaceX launches</Heading>
      <section>
        {launches.map((launch) => (
          <Launchitem key={launch.flight_number}{...launch}/>
        ))}
      </section>
    </>
  )
}

