import { FC, Fragment } from 'react';
import Accordion from 'components/reuseable/accordion';
// -------- data -------- //
import { accordionList1 } from 'data/faq';

const FAQ1: FC = () => {
  return (
    <Fragment>
      <div className="accordion-wrapper mb-10" id="accordion">
        <div className="row">
          {accordionList1.map((items, i) => {
            return (
              <div className="col-md-6" key={i}>
                {items.map((item) => (
                  <Accordion key={item.no} {...item} />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default FAQ1;
