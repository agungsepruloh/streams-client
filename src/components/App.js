import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      Page One <Link to="/pagetwo">Go to Page Two</Link>
      {/* BAD !!! */}
      {/* <a href="/pagetwo">Go to page two</a> */}
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      Page Two <Link to="/">Go to Page One</Link>
      {/* BAD !!! */}
      {/* <a href="/">Go to page one</a> */}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" exact component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
