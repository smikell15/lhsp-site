import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Hero17 } from 'components/blocks/hero';
import { Navbar } from 'components/blocks/navbar';
import { Contact10 } from 'components/blocks/contact';
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
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero17 />

        <section className="wrapper bg-gray">
          <div className="container">
            <div className="card shadow-none">
              <div className="card-body px-lg-11 px-xl-13">
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Contact10 />
    </Fragment>
  );
};

export default Home;