import NowPlayingList from './NowPlayingList/NowPlayingList';
import Perks from './Perks/Perks'
import Welcome from './Welcome/Welcome';

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