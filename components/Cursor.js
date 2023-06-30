'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import styled from 'styled-components';

const CursorWrapper = styled.div`
  #cursor,
  #cursor2,
  #cursor3 {
    position: fixed;
    border-radius: 50%;
    transform: translateX(-50%) translateY(-50%);
    pointer-events: none;
    left: -100px;
    top: 50%;
    mix-blend-mode: difference;
    transition: all 300ms linear;
  }
  #cursor {
    background-color: #fff;
    height: 0;
    width: 0;
    z-index: 1000000;
  }
  #cursor2,
  #cursor3 {
    height: 36px;
    width: 36px;
    z-index: 999999;
    transition: all 0.3s ease-out;
  }
  #cursor2.hover,
  #cursor3.hover {
    transform: scale(2) translateX(-25%) translateY(-25%);
    border: none;
  }
  #cursor2 {
    border: 2px solid #fff;
    box-shadow: 0 0 22px rgba(255, 255, 255, 0.6);
  }
  #cursor2.hover {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.2);
  }

  @media screen and (max-width: 1200px) {
    #cursor,
    #cursor2,
    #cursor3 {
      display: none;
    }
  }
`;

export const Cursor = () => {
  const pathname = usePathname();
  const hoverTargets = '.hover-target, #hover-target, a, button';

  useEffect(() => {
    document
      .getElementsByTagName('html')[0]
      .addEventListener('mousemove', function (n) {
        (t.style.left = n.clientX + 'px'),
          (t.style.top = n.clientY + 'px'),
          (e.style.left = n.clientX + 'px'),
          (e.style.top = n.clientY + 'px'),
          (i.style.left = n.clientX + 'px'),
          (i.style.top = n.clientY + 'px');
      });
    var t = document.getElementById('cursor'),
      e = document.getElementById('cursor2'),
      i = document.getElementById('cursor3');
    e.classList.remove('hover'), i.classList.remove('hover');
    for (
      var r = document.querySelectorAll(hoverTargets), a = r.length - 1;
      a >= 0;
      a--
    ) {
      r[a].addEventListener('mouseover', () => {
        e.classList.add('hover'), i.classList.add('hover');
      });
      r[a].addEventListener('mouseout', () => {
        e.classList.remove('hover'), i.classList.remove('hover');
      });
    }
  }, []);

  useEffect(() => {
    var t = document.getElementById('cursor'),
      e = document.getElementById('cursor2'),
      i = document.getElementById('cursor3');
    e.classList.remove('hover'), i.classList.remove('hover');
    for (
      var r = document.querySelectorAll(hoverTargets), a = r.length - 1;
      a >= 0;
      a--
    ) {
      r[a].addEventListener('mouseover', () => {
        e.classList.add('hover'), i.classList.add('hover');
      });
      r[a].addEventListener('mouseout', () => {
        e.classList.remove('hover'), i.classList.remove('hover');
      });
    }
  }, [pathname]);

  return (
    <CursorWrapper>
      <div id="cursor"></div>
      <div id="cursor2"></div>
      <div id="cursor3"></div>
    </CursorWrapper>
  );
};
