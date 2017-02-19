// Avoid warning on cloud9
/* global React */

class AppointmentsList extends React.Component {
  render () {
    return (
      <div>
        {this.props.appointments.map(function(appointment) {
          return (
            <Appointment appointment={appointment} key={appointment.id} />
          )
        })}
      </div>
    );
  }
}
