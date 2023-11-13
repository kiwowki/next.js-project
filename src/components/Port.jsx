import React from 'react';
import { portText } from '../constants';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { useEffect } from 'react';

import Image from 'next/image';



const Port = () => {
  const horizontalRef = useRef(null);
  const sectionRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontal = horizontalRef.current;
    const sections = sectionRef.current;
  
    let scrollTween = gsap.to(sections, {
      xPercent: -120 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '#port',
        start: 'top 56px',
        end: () => "+=" + horizontal.offsetWidth,
        pin: true,
        scrub: 1,
        markers: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      }
    });
    return () => {
      scrollTween.kill();
    }
  }, []);
  return (
    
    <section id="port" ref={horizontalRef}>
      <div className="port_inner">
        <h2 className="port_title">
          portfolio <em>포폴 작업물</em>
        </h2>
        <div className="port_wrap">
          {
            portText.map((port, key) => (
              <article key={key} className={`port_item p${key + 1}`} ref={(el) => (sectionRef.current[key] = el)}>
                <a href="/" target='_blank' className='img' rel="noreferrer noopener" >
                  <Image src={port.img} alt={port.name} width={420} height={262} />
                </a>
                <h3 className="title">{port.title}</h3>
                <p className="desc">{port.desc}</p>
                <a href={port.view} className="btn" rel="noreferrer noopener">사이트 보기</a>
              </article>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Port