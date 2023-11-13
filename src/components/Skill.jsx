import React from 'react'

import { skillText } from '../constants'

const Skill = () => {
  return (
    <section id="skill">
      <div className="skill_inner">
        <h2 className="skill_title">
          challenge <em>나의 도전</em>
        </h2>
        <div className="skill_desc">
          {
            skillText.map((skill, key) => (
              <div key={key}>
                <span>{key + 1}.</span>
                <h3 key={key}>{skill.title}</h3>
                <p>{skill.desc}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Skill