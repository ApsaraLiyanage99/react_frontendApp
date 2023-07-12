import StandardContainer from "./StandardContainer";

function StandardContainerGroup({ data }) {
  return (
    <div className="grid grid-cols-2">
      {/* map is a higher order function; equivalent to iteration function; using map function can iterate through each item in array */}
      {data.map((item, index) => (
        <StandardContainer
          key={index} //index of this iterated item
          title={item.title}
          description={item.description}
          image={item.image}
          style={item.style}
        />
      ))}
    </div>
  );
}

export default StandardContainerGroup;
