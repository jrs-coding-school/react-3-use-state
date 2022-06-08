import logo from './logo.svg';
import './App.css';
import MyBadComponent from './components/bad/MyBadComponent';
import ClickCounter from './components/stateful/ClickCounter';
import TwoWayCounter from './components/stateful/TwoWayCounter';
import BooleanState from './components/stateful/BooleanState';
import StringState from './components/stateful/StringState';
import ArrayState from './components/arrays-and-objects/ArrayState';
import ObjectState from './components/arrays-and-objects/ObjectState';
import ParentSmart from './components/parent-child/ParentSmart';

function App() {
  return (
    <div className="App">
      <h1>STATE!</h1>
      <p>
        Web sites are fun, but Web Apps are even more exciting.
      </p>
      <p>
        If we can make components that do something more interesting
        than display data, then we will have a lot of power.
      </p>
      <p>
        This typically involves having a component that manipulates some
        JavaScript values. And we can say if a component deals with some piece
        of data and that data changes during the lifecycle of the component,
        then that data is part of the <b>state</b> of the component
      </p>
      <p>
        And now, if we have a value that is stateful, then, in React, we
        will need to take advantage of the 'useState' hook.
      </p>

      <h3>A Bad Example</h3>
      <p>
        This component has a var 'count'
      </p>
      <p>
                clicking the + button executes this function: ()&nbsp;=>&nbsp;count++;
      </p>

      <MyBadComponent />
      <p>Sadly, this doesn't work. The count still says 0 in the window :(</p>

      <h3>A Good Example</h3>
      <p>
        To fix this problem, we have to  useState()
      </p>
      <p>
        The useState hook returns a statefulValue and a function to udate that state value
      </p>
      <h4>const [count, setCount] = useState();</h4>

      <p>
        Instead of executing <b>count++; </b>
        we are going to execute <b>setCount(count + 1)</b>
      </p>
      <ClickCounter />

      <p><b>
        Pause here and create a new click counter component that uses state
      </b></p>

      <ArrayState />
      <ObjectState />

      <TwoWayCounter />
      <BooleanState />
      <StringState />

      <ParentSmart />

    </div>
  );
}

export default App;
