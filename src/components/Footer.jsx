import React from 'react'
import { footerText } from '../constants'

const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
    <div className="footer_inner">
      <h2 className="footer_text">
        <div>wolves</div>
        <div>@wolves941110</div>
      </h2>
      <div className="footer_info">
        <div className="left">
          <div className="title">
            <a href="/" rel="noreferrer noopener">sign up</a>
          </div>
          <p className="desc">회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
        </div>
        <div className="right">
          <h3>social</h3>
          <ul>
          {footerText.map((footer, key) => (
              <li key={key}>
                <a href={footer.link} rel="noreferrer noopener">{footer.title}</a>
                <em>{footer.desc}</em>
              </li>
          ))}
          </ul>
        </div>
      </div>
      <div className="footer_right">
        &copy; 2023 wolves941110<br />
        이 사이트는 비트를 이용하여 제작하였습니다.
      </div>
    </div>
  </footer>
  )
}

export default Footer