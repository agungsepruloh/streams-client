import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({ input } /* (formProps) */) {
    // console.log(formProps);
    // <input {...formProps.input} />;
    return <input {...input} />;
  }

  render() {
    // console.log(this.props);
    return (
      <form>
        {/* if you don't add "component" property, it will show an error on the page */}
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
