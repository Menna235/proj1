import logo from "./logo.svg";
import "./App.css";
import Image from "./components/Image";
import Anchor from "./components/Anchor";
import Paragraph from "./components/Paragraph";
import Header from "./components/Header";
import test from "./test.svg";

function App() {
  return (
    <Header>
      <Image menna={test} />
      <Image menna={logo} />
      <Paragraph name="hi" />
      <Paragraph name2={`Edit menna`} />

      <Anchor link2="https://reactjs.org" />
    </Header>
  );
}

export default App;
