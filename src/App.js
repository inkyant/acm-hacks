
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import './App.css';
import DragDrop from "./DragDrop";


export const classList = [
  {
    id: 0,
    title: "CSE30",
    text: "woah",
    credits: 7,
  },
  {
    id: 1,
    title: "CSE13",
    text: "woah",
    credits: 5,
  },
  {
    id: 2,
    title: "CSE20",
    text: "woah",
    credits: 7,
  },
  {
    id: 3,
    title: "AM10",
    text: "woah",
    credits: 5,
  },
  {
    id: 4,
    title: "CSE100",
    text: "hard",
    credits: 7,
  },
  {
    id: 5,
    title: "ECE13",
    text: "yeee",
    credits: 5,
  },
  {
    id: 6,
    title: "CMPM17",
    text: "easy",
    credits: 3,
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
