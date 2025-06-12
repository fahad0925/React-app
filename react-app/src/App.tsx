import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Pakistan", "China", "Afganistan", "Indonesia"];
  return (
    <div>
      <ListGroup
        items={items}
        heading="Countries"
        onSelectItem={(item: string) => console.log(item)}
      />
    </div>
  );
}
export default App;
