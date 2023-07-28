import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import PageProgress from 'components/common/PageProgress';
import ContactForm from 'components/common/ContactForm';

const Contact: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper bg-gray">
        <Navbar social fancy navClassName="navbar navbar-expand-lg fancy navbar-light navbar-bg-light caret-none" />
      </header>

      <main className="content-wrapper bg-gray">
        {/* ========== page title section ========== */}
        <section className="wrapper image-wrapper text-dark">
          <div className="container pt-10 pb-19 pt-md-9 pb-md-20 text-center">
            <div className="row">
              <div className="col-lg-8 mx-auto">
              <h2 className="display-4 mb-3 text-center">Get In Touch</h2>
              </div>
            </div>
          </div>
        </section>

        <div className="wrapper bg-gray angled upper-end">
          <div className="container pb-11">
            {/* ========== contact info section ========== */}
            <div className="row mb-14 mb-md-16">
              <div className="col-xl-10 mx-auto mt-n19">
                <div className="card">
                  <div className="row gx-0">
                    <div className="col-lg-6 align-self-stretch">
                      <div className="map map-full rounded-top rounded-lg-start">
                        <iframe
                          allowFullScreen
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.2691173034286!2d-82.6991573237016!3d27.770680876146436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e391b50f9c31%3A0x2fa66f5a6ab46563!2sGuilfoil%20Dance%20Arts%20Center!5e0!3m2!1sen!2sus!4v1690273643285!5m2!1sen!2sus"
                          style={{ width: '100%', height: '100%', border: 0 }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="p-10 p-md-11 p-lg-14">
                        <div className="d-flex flex-row">
                          <div>
                            <div className="icon text-primary fs-28 me-4 mt-n1">
                              <i className="uil uil-location-pin-alt" />
                            </div>
                          </div>
                          <div className="align-self-start justify-content-start">
                            <h5 className="mb-1">Address</h5>
                            <address>
                              Guilfoil Dance Arts Center <br className="d-none d-md-block" />
                              4646 Central Ave, <br className="d-none d-md-block" />
                              St. Petersburg, FL 33711
                            </address>
                          </div>
                        </div>

                        <div className="d-flex flex-row">
                          <div>
                            <div className="icon text-primary fs-28 me-4 mt-n1">
                              <i className="uil uil-phone-volume" />
                            </div>
                          </div>
                          <div>
                            <h5 className="mb-1">Phone</h5>
                            <p>
                              (863) 255-8220
                            </p>
                          </div>
                        </div>

                        <div className="d-flex flex-row">
                          <div>
                            <div className="icon text-primary fs-28 me-4 mt-n1">
                              <i className="uil uil-envelope" />
                            </div>
                          </div>
                          <div>
                            <h5 className="mb-1">E-mail</h5>
                            <p className="mb-0">
                              <a href="mailto:lindyhop.saintpete@gmail.com" className="link-body">
                                lindyhop.saintpete@gmail.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== contact form section ========== */}
            <div className="row">
              <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                <h2 className="display-4 mb-3 text-center">Drop Us a Line</h2>
                <p className="lead text-center mb-10">
                  Reach out to us via our contact form and we will get back to you shortly.
                </p>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Contact;
