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
          {/* TODO: Import and render StudentCard components here */}
            <StudentCard />
        </div>
      </main>
    </div>
  )
}

export default App
