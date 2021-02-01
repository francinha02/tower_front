interface FormProps {
  name: string
}

const Form: React.FC<FormProps> = props => {
  return <div>{props.name}</div>
}

export default Form
