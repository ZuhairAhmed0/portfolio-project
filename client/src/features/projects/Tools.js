function Tools({ tools }) {
  return (
    <div className="tools">
      <h3>Tools</h3>
      <p>
        {tools.length > 0 &&
          tools.map((tool) => <span key={tool}>{tool}</span>)}
      </p>
    </div>
  );
}

export default Tools;
