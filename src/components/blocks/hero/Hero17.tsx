import { FC } from 'react';
import { slideInDownAnimate } from 'utils/animation';
import NextLink from 'components/reuseable/links/NextLink';

const Hero17: FC = () => {
  return (
    <section className="wrapper bg-gray pb-sm-13 mt-xl-n13">
      <div className="container pt-12 pt-md-16 text-center">
        <div className="row" style={{ overflow: "hidden", position: "relative" }}>
          <div className="col-lg-8 col-xxl-7 mx-auto text-center">
          <video autoPlay loop muted style={{ zIndex: 0, position:"absolute", minWidth: "100%", minHeight: "100%", top: "50%", left: "50%", transform: "translateX(-50%) translateY(-50%) scale(0.5)" }}>
            <source src="/media/hero.mp4" />
          </video>
          <figure style={slideInDownAnimate('600ms')}>
            <img src="/img/photos/lhsp-logo.png" alt="" />
          </figure>

            <h2 className="fs-16 text-uppercase ls-xl text-light mb-4" style={slideInDownAnimate('900ms')}>
              Dedicated to the preservation and celebration of the Lindy Hop swing dance.
            </h2>

            <div className="d-flex justify-content-center mb-5">
              <span style={slideInDownAnimate('1200ms')}>
                <NextLink title="Explore Now" href="#" className="btn btn-lg btn-primary rounded-pill me-2" />
              </span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero17;
