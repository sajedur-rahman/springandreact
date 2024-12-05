import React, { PureComponent } from "react";

class FooterComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <footer className="footer">
          <span class="text-muted">All rightes reserve</span>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
