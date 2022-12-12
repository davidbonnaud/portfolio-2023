import ParticlesComponent from './components/ParticlesComponent';
import NavbarComponent from './components/NavbarComponent';
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
      <NavbarComponent />
      <ParticlesComponent />
    </div>
  );
}

export default App;
