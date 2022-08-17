type Props = {
  question: string
  name: string
  options: string[]
}

export function CheckboxGroup ({ question, name, options }: Props) {
  return (
    <>
      <h3>{question}</h3>
      {options.map(option => (
        <label>
          {option}
          <input type='checkbox' name={name} value={option.toLowerCase()} />
        </label>
      ))}
    </>
  )
}
