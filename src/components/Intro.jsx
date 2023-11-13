import React from 'react'

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro_inner">
        <h1 className="intro_title">
          developer <em>wolves</em>
        </h1>
        <div className="intro_lines" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        <div className="intro_text">
          <div className="text">
            <div>talent is</div>
            <div>found at the end of the</div>
            <div>effort</div>
          </div>
          <div className="img"></div>
        </div>

        <div className="intro_lines bottom" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

      </div>
    </section>
  )
}

export default Intro