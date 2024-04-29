import React from "react";
import Bar from "./Bar/Bar";
import Foo from "./Foo/Foo";

import { BlockType, ComponentsType } from "../models/Component";

const Components: ComponentsType = {
  foo: Foo,
  bar: Bar,
};

const DynamicComponent = (block: BlockType) => {
  const Component = Components[block.component];

  if (Component) {
    return React.createElement(Component, {
      key: block._uid,
      block: block,
    });
  }
  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block._uid }
  );
};

export default DynamicComponent;
