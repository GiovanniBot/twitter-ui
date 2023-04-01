import './BlueButton.css'

interface ButtonProps {
  content: string;
  type?: 'button' | 'submit' | 'reset';
}

export function BlueButton(props: ButtonProps) {
  return (
    <div className="new-tweet-btn">
      {props.content}
    </div>
  )
}