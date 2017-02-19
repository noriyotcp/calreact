// Avoid warning on cloud9
/* global React */
/* global obj */

class AppointmentForm extends React.Component {
  handleChange (e) {
    const name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.onFormSubmit();
  }

  setApptTime (e) {
    const name = 'appt_time';
    obj = {};
    obj[name] = e.toDate();
    if (obj[name]) {
      this.props.onUserInput(obj);
    }
  }

  render () {
    const inputProps = {
      name: 'appt_time'
    };

    return (
      <div>
        <h2>Make a new appointment</h2>
        <Label label='Enter a title, date and time' />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input name="title" placeholder='Appointment Title'
            value={this.props.title}
            onChange={this.handleChange.bind(this)} />

          <Datetime input={false} open={true} inputProps={inputProps}
            value={this.props.appt_time}
            onChange={this.setApptTime.bind(this)} />

          <input type='submit' value='Make appointment' className='submit-button' />
        </form>
      </div>
    )
  }
}
