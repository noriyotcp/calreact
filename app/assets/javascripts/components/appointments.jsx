// Avoid warning on cloud9
/* global React */

var Appointments = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.appointments.map(function(appointment) {
          return (
            <Appointment appointment={appointment} />
          )
        })}
      </div>
    );
  }
});
