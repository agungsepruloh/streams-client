import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  renderError({ touched, error }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta } /* (formProps) */) => {
    // console.log(formProps);
    // <input {...formProps.input} />;
    // console.log(meta);

    const className = `field ${meta.touched && meta.error ? "error" : ""}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues /*event*/) => {
    // redux form will automatically call preventDefault method for us
    // event.preventDefault();
    // console.log(formValues);
    this.props.createStream(formValues);
  };

  render() {
    // console.log(this.props);
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        {/* if you don't add "component" property, it will show an error on the page */}
        <Field
          name="title"
          component={this.renderInput}
          label="Enter Title: "
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description: "
        />

        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

const wrappedForm = reduxForm({
  form: "streamCreate",
  validate: validate
})(StreamCreate);

export default connect(null, { createStream })(wrappedForm);
