import Card from "./components/Card";
import HeartFilled from "@ux/icon/heart-filled";
import "@ux/icon/heart-filled/index.css";
import "./App.scss";

function App() {
  const heartFilledSize = 20;
  return (
    <div className="App p-xl">
      <Card bg="low-contrast">
        <h1 className="mb-l">Welcome, friend.</h1>
        <p className="mb-m">This template should provide you with a basic setup for your prototype. Now, go make it into something cool.</p>
        <p className="mb-l">Want to make this template better? Reach out to <a href="https://godaddy.slack.com/team/W01501H4BHV" target="_blank" rel="noreferrer">@enelmes</a> or <a href="https://github.com/enelmes-godaddy/prototype-template" target="_blank" rel="noreferrer">contribute</a>.</p>
        <div className="d-flex align-items-center">
          <p className="text--larger mr-s">Happy hacking!</p>
          <HeartFilled width={heartFilledSize} height={heartFilledSize} className="heart-filled-color"/>
        </div>
      </Card>
    </div >
  );
}

export default App;
