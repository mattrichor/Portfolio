import React from 'react'
import Typewriter from 'typewriter-effect'

const Typewrite = () => {
  return (
    <div>
      <h3>
        <Typewriter
          options={{ loop: true }}
          onInit={(typewriter) => {
            typewriter
              .typeString(`& I'm a Full-Stack Software Developer!`)
              .pauseFor(2000)
              .deleteChars(30)
              .typeString(' Bicycle Racer!')
              .pauseFor(2000)
              .deleteChars(18)
              .typeString(' a Fixed-Wing Airplane Pilot!')
              .pauseFor(2000)
              .deleteChars(28)
              .typeString(' a Life-Long Learner.')
              .pauseFor(2000)
              .deleteChars(20)
              .typeString('Pleased to Meet You!')
              .pauseFor(3000)
              .deleteAll()
              .start()
          }}
        />
      </h3>
    </div>
  )
}

export default Typewrite
