import { FC } from 'react';
import Calendar from "@ericz1803/react-google-calendar";

const Calendar1: FC = () => {
    const calendarID = process.env.NEXT_PUBLIC_CALENDAR_ID;
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
    
    const styles = {
      calendar: {
        borderWidth: "3px"
      }
    }

    const calendars = [
      { calendarId: calendarID, color: "#b7babc" }
    ];

      return (
        <section className="wrapper bg-gray pb-sm-13 pt-xl-13">
          <div className="col-lg-10 col-xxl-9 mx-auto text-center">
            <Calendar apiKey={apiKey} calendars={calendars} styles={styles} />
          </div>
        </section>
      );
};

export default Calendar1;