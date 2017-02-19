// Avoid warning on cloud9
/* global React */
/* global $ */

var Appointments = React.createClass({
  getInitialState: function() {
    return {
      appointments: this.props.appointments,
      title: 'Team standup meeting',
      appt_time: 'Tomorrow at 9am'
    }
  },

  handleUserInput: function(obj) {
    this.setState(obj);
  },

  handleFormSubmit: function() {
    var appointment = { title: this.state.title, appt_time: this.state.appt_time };
    $.post('/appointments',
            { appointment: appointment })
            .done(function(data) {
              this.addNewAppointment(data);
            }.bind(this));
  },

  addNewAppointment: function(appointment) {
    var appointments = React.addons.update(this.state.appointments, { $push: [appointment] });
    this.setState({ appointments: appointments });
  },

  render: function() {
    return (
      <div>
        <AppointmentForm title={this.state.title}
          appt_time={this.state.appt_time}
          onUserInput={this.handleUserInput}
          onFormSubmit={this.handleFormSubmit} />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    );
  }
});
