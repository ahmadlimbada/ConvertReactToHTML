import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/countersComponent";
import Test from "./components/testComponent.jsx";
import NavBar from "./components/navbar";
import { render } from "@testing-library/react";
import { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import Publish from "./components/publishComponent";
class App extends Component {
  state = {
    counters: [
      { name: "Product1", id: 1, value: 3 },
      { name: "Product2", id: 2, value: 2 },
      { name: "Product3", id: 3, value: 1 },
      { name: "Product4", id: 4, value: 0 },
    ],
  };

  incrementHandler = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  decrementHandler = (counter) => {
    if (counter.value > 0) {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value--;
      this.setState({ counters });
    }
  };

  deleteHandler = (id) => {
    const counters = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters: counters });
  };
  render() {
    return <Test />;
    return (
      <div>
        <iframe
          src="https://view.officeapps.live.com/op/embed.aspx?src=[http://localhost:3000/Menu.pptx]"
          width="100%"
          height="600px"
        ></iframe>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onIncrement={this.incrementHandler}
            onDelete={this.deleteHandler}
            counters={this.state.counters}
            onDecrement={this.decrementHandler}
          />
        </main>
        <Publish />
      </div>
    );
  }
}

export default App;
