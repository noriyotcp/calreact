// Avoid warning on cloud9
/* global React */
/* global appointment */

var Appointment = React.createClass({
  render: function() {
    return (
      <div>
        <h3>{this.props.appointment.title}</h3>
        <p>{this.props.appointment.appt_time}</p>
      </div>
    )
  }
});
