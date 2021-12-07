import Welcome from './Welcome/Welcome';
import Perks from './Perks/Perks'
import NowPlayingList from './NowPlayingList/NowPlayingList';

function Home() {
  return (
    <>
      <Welcome />
      <Perks />
      <NowPlayingList />
    </>
  );
}

export default Home;