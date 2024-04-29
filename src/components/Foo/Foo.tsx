type FooProps = {
  block: {
    headline: string;
  };
};

export default (props: FooProps) => (
  <div className="foo">
    <hr />
    Hi I'm a Foo component with the headline:
    <h2>{props.block.headline}</h2>
  </div>
);
