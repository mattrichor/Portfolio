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
              .pauseFor(2500)
              .deleteChars(30)
              .typeString(' Bicycle Racer!')
              .pauseFor(2500)
              .deleteChars(18)
              .typeString(' an Airplane Pilot!')
              .pauseFor(2500)
              .deleteChars(17)
              .typeString(' Musician!')
              .pauseFor(2500)
              .deleteChars(11)
              .typeString(' a Life-Long Leaner.')
              .pauseFor(2500)
              .deleteAll()
              .start()
          }}
        />
      </h3>
    </div>
  )
}

export default Typewrite
