
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import './App.css';
import DragDrop from "./DragDrop";


export const classList = [
  // {
  //   id: 0,
  //   "category": "CSE",
  //   "course_num": "13S",
  //   "credits": 7,
  //   "description": "Focuses on C programming, command line, shell programming, editors, debuggers, source code control, and other tools. Examines basic computer systems, algorithm design, and development, data types, and program structures. Develops understanding of process model, compile-link-execute build cycle, language-machine interface, memory, and data representation. Students cannot receive credit for both CSE 13S and CSE 13E. Course is 7 credits with integrated laboratory.",
  //   "prereqs": "CSE 12 or BME 160.",
  //   "title": "Computer Systems and C Programming"
  // }
]

let i = 0
export function incrementId() {
  i += 1
  return i
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
