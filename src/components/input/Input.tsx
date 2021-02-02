import { IconName } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: IconName
}

const Input: React.FC<InputProps> = props => {
  return (
    <div className="input-field">
      <FontAwesomeIcon icon={['fas', props.icon]} size="lg" />
      <input type={props.type} placeholder={props.placeholder} {...props} />
    </div>
  )
}

export default Input
