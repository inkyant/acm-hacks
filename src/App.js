
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import './App.css';
import DragDrop from "./DragDrop";


export const classList = [
  {
    id: 0,
    title: "CSE30"
  },
  {
    id: 1,
    title: "CSE13"
  },
  {
    id: 2,
    title: "CSE20"
  },
  {
    id: 3,
    title: "AM10"
  },
  {
    id: 4,
    title: "CSE100"
  },
  {
    id: 5,
    title: "ECE13"
  },
]

export function getClassById(id) {
  const classListOne = classList.filter((card) => card.id === id)
  if (classListOne.length > 0) {
    return classListOne[0]
  } else {
    return null
  }
}

function App() {

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <DragDrop />
      </div>
    </DndProvider>
  );
}

export default App;
