// Avoid warning on cloud9
/* global React */

const AppointmentsList = ({appointments}) =>
  <div>
    {appointments.map(function(appointment) {
      return (
        <Appointment appointment={appointment} key={appointment.id} />
      )
    })}
  </div>
