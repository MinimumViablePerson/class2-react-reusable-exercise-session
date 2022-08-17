import './App.css'
import { Button } from './components/BackButton'
import { CheckboxGroup } from './components/CheckboxGroup'

function App () {
  return (
    <div className='App'>
      <form
        onSubmit={event => {
          event.preventDefault()
          const foods = [...event.target.food]
            .filter(input => input.checked)
            .map(input => input.value)

          console.log(foods)
        }}
      >
        <CheckboxGroup
          question="What's your favourite food?"
          name='food'
          options={['Chocolate', 'Vegetables', 'Fruit', 'Potato']}
        />

        <CheckboxGroup
          question="What's your favourite color?"
          name='color'
          options={['Red', 'Blue', 'Green', 'Purple', 'Yes']}
        />

        <CheckboxGroup
          question='Why do you hate me?'
          name='hate'
          options={['Your hair', 'Your height', 'Your clothes']}
        />

        <br />
        <br />

        <Button
          // custom prop
          size='small'
          // generic prop that gets given to the button
          onClick={() => {
            console.log('Going back...')
          }}
        >
          {/* Children */}
          SUBMIT
        </Button>
      </form>
    </div>
  )
}

export default App
