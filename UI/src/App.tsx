import './App.css'
import './components/menu.tsx'
import Menu from "./components/menu.tsx";

function App() {
  return (
    <>
        <div className={"grid gap-10"}>
            <div className={""}>
                <Menu></Menu>
            </div>
            <div>
                Main content
            </div>
        </div>
    </>
  )
}

export default App
