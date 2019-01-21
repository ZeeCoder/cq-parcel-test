import React, { Component } from "react";
import styles, { meta as rawMeta } from "./App.css";
import { ContainerQuery } from "@zeecoder/react-container-query";
import { remapMetaSelectors } from "@zeecoder/container-query-meta-builder";

const meta = remapMetaSelectors(rawMeta, styles);

class App extends Component {
  render() {
    return (
      <ContainerQuery className={styles.App} meta={meta}>
        hey
      </ContainerQuery>
    );
  }
}

export default App;
