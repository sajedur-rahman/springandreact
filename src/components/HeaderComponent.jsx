import React, { PureComponent } from "react";

class HeaderComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <heder>
          <nav className="navbar navbar-expand-md  navbar-dark bg-dark">
            <div>
              <a class="navbar-brand" href="https://www.javatpoint.com/">
                Employee Management App
              </a>
            </div>
          </nav>
        </heder>
      </div>
    );
  }
}

export default HeaderComponent;
