// Avoid warning on cloud9
/* global React */
/* global $ */

class Appointments extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      appointments: this.props.appointments,
      title: 'Team standup meeting',
      appt_time: 'Tomorrow at 9am'
    }
  }

  handleUserInput (obj) {
    this.setState(obj);
  }

  handleFormSubmit () {
    var appointment = { title: this.state.title, appt_time: this.state.appt_time };
    $.post('/appointments',
            { appointment: appointment })
            .done((data) => {
              this.addNewAppointment(data);
            });
  }

  addNewAppointment (appointment) {
    var appointments = React.addons.update(this.state.appointments, { $push: [appointment] });
    this.setState({
      appointments: appointments.sort(function(a,b) {
        return new Date(a.appt_time) - new Date(b.appt_time);
      })
    });
  }

  render () {
    return (
      <div>
        <AppointmentForm title={this.state.title}
          appt_time={this.state.appt_time}
          onUserInput={ (obj) => this.handleUserInput(obj) }
          onFormSubmit={ () => this.handleFormSubmit() } />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    );
  }
}
