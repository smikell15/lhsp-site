import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Portfolio3 } from 'components/blocks/portfolio';
import { Portfolio5 } from 'components/blocks/portfolio';
import { Navbar } from 'components/blocks/navbar';
import { Footer6 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';

const Events: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper bg-gray">
        <Navbar social fancy navClassName="navbar navbar-expand-lg fancy navbar-light navbar-bg-light caret-none" />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Portfolio3 />
        <Portfolio5 />
      </main>
      <Footer6/>
    </Fragment>
  );
};

export default Events;