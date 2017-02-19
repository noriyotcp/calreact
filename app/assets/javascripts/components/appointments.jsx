// Avoid warning on cloud9
/* global React */

var Appointments = React.createClass({
  render: function() {
    return (
      <div>
        <AppointmentForm />
        <AppointmentsList appointments={this.props.appointments} />
      </div>
    );
  }
});
