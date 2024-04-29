import React from "react";

type ContentType = {
  body: BlockType[];
};

type DataType = {
  content: ContentType;
};

type BlockType = {
  _uid: string;
  component: string;
  headline?: string;
  title?: string;
};

type ComponentsType = {
  [key: string]: React.ComponentType<any>;
};

export type { ContentType, DataType, BlockType, ComponentsType };
