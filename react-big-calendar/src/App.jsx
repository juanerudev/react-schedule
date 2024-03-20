import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";

function App() {

  const localizer = dayjsLocalizer(dayjs);

  const events = [
    {
      start: dayjs('2024-03-22T12:00:00').toDate(),
      end: dayjs('2024-03-22T13:00:00').toDate(),
      title: "Evento 1"
    },
    {
      start: dayjs('2024-03-25T18:00:00').toDate(),
      end: dayjs('2024-03-25T22:00:00').toDate(),
      title: "Clase de programación"
    },
  ]

  return (
    <div style={{
      height: "95vh",
      width: "70vw",
    }}>
      <Calendar 
        localizer={localizer}
        events={events}
      />
    </div>
  )
}

export default App