import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Hero17 } from 'components/blocks/hero';
import { Navbar } from 'components/blocks/navbar';
import { Reel } from 'components/blocks/reel';
import PageProgress from 'components/common/PageProgress';

const Home: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper bg-gray">
        <Navbar social fancy navClassName="navbar navbar-expand-lg fancy navbar-light navbar-bg-light caret-none" />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper bg-gray">
        {/* ========== hero section ========== */}
        <Hero17 />
      </main>
    </Fragment>
  );
};

export default Home;