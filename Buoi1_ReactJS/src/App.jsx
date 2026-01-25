// cau1:
// import ProductCard from "./components/ProductCard/ProductCard";

// function App() {
//   return (
//     <div style={{ padding: "40px" }}>
//       <ProductCard />
//     </div>
//   );
// }

// export default App;

// cau2:
import Button from "./components/Button/Button";

function App() {
  return (
    <div style={{ padding: "40px", display: "flex", gap: "12px" }}>
      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="danger">Danger</Button>
    </div>
  );
}

export default App;
