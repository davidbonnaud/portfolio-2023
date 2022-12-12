import ParticlesComponent from './components/ParticlesComponent';
import Navbar from './components/Navbar';
//IMPLEMENT TSPARTICLES

// import TodoList from './components/TodoList';
// import NewTodo from './components/NewTodo';

function App() {
  // const todos = [{id: 't1', text: 'Finish the course'}];

  // const todoAddHandler = (text: string) => {
  //   console.log(text);
  // };

  // return (
  //   <div className="App">
  //     {/* <NewTodo onAddTodo={todoAddHandler} />
  //     <TodoList items={todos} /> */}
  //   </div>
  // );

  return (
    <div className='App'>
      <ParticlesComponent />
      <Navbar />
    </div>
  );
}

export default App;
