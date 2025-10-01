import './App.css'
import ControlledComponent from './components/Form/ControlledComponent'
import FormAction from './components/Form/FormAction'
import FormThroughTarget from './components/Form/FormThroughTarget'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Module 44 : Form Submission</h1>
      
      <FormThroughTarget></FormThroughTarget>
      <FormAction></FormAction>
      <ControlledComponent></ControlledComponent>
    </>
  )
}

export default App
