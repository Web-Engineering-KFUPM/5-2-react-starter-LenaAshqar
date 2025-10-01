import './App.css'
import './components/StudentCard.jsx'
import StudentCard from "./components/StudentCard.jsx";

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
            <h1>Student Info</h1>
            <StudentCard name="Lena Ashqar" id="202282660" dept="ICS/SWE Department"/>
            <StudentCard name="Reema AlQahtani" id="202244660" dept="ICS/SWE Department"/>
        </div>
      </main>
    </div>
  )
}

export default App
