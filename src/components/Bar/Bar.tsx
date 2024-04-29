type BarProps = {
  block: {
    title: string;
  };
};

export default (props: BarProps) => (
  <div className="bar">
    <hr />
    Hi I'm a Bar component with the title:
    <h2>{props.block.title}</h2>
  </div>
);
