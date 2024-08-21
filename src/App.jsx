import Content from "./components/Content";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar></Sidebar>
      <Content></Content>
    </main>    
  );
}

export default App;
