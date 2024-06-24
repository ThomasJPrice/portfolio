const TestimonialText = ({ text }) => {
  const words = text.split(' ')

  return (
    <p>
      {words.map((word, index) => {
        let newWord = word
        let classStyle = ''

        if (word[0] === '*') {
          newWord = word.substring(1)
          classStyle = 'text-[#5BBA6F] text-[20px] font-[600]'
        } else {
          newWord = word
          classStyle = ''
        }

        return (
          <span key={word + index} className={classStyle}>
            {newWord}{" "}
          </span>
        )
      })}
    </p>
  )
}

export default TestimonialText