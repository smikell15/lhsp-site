import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import PageProgress from 'components/common/PageProgress';
import { Calendar1 } from 'components/blocks/calendar';
import { Navbar } from 'components/blocks/navbar';

const Calendar: NextPage = () => { 
    return (
        <Fragment >
            <PageProgress />

            {/* ========== header ========== */}
            <header className="wrapper bg-gray">
                <Navbar social fancy navClassName="navbar navbar-expand-lg fancy navbar-light navbar-bg-light caret-none" />
            </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper bg-gray">
        <Calendar1 />
      </main>
        </Fragment>
    );
};

export default Calendar;