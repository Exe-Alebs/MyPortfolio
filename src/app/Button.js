
const Button = ({text, link}) => {
  return (
    <div>
        <a href={link} className='btn'>{text}</a>
    </div>
  )
}

export default Button
