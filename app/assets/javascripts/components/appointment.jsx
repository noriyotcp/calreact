// Avoid warning on cloud9
/* global React */
/* global formatDate */

var Appointment = React.createClass({
  render: function() {
    return (
      <div className='appointment'>
        <h3>{this.props.appointment.title}</h3>
        <p>{formatDate(this.props.appointment.appt_time)}</p>
      </div>
    )
  }
});
