'use client';

import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navLinks = {
  home: '/',
  projects: '/projects',
  ['our team']: '/our-team',
  sponsors: '/sponsors',
  contact: '/contact',
};

const HeaderComponent = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 200px;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
  font-family: var(--montserrat-font);
  pointer-events: none;
`;

const HeaderWrapper = styled.div`
  position: relative;
  width: calc(100% - 100px);
  margin-left: 50px;
  pointer-events: auto;
`;

const LogoWrapper = styled.div`
  position: absolute;
  display: block;
  left: 0;
  top: 25px;
  cursor: pointer;

  img {
    height: 11vh;
    width: calc(11vh * 3.49426666667);
  }
  @media screen and (max-width: 992px) {
    img {
      height: 60px;
      width: 209.656px;
    }
  }
`;

const NavButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
  float: right;
  padding-left: 15px;
  padding-top: 15px;
  margin-top: 26px;
  transition: all 0.3s ease-out;

  .menu-icon {
    height: 30px;
    width: 30px;
    position: relative;
    z-index: 2;
    cursor: pointer;
    display: block;
  }

  .menu-icon__line {
    height: 2px;
    width: 30px;
    display: block;
    background-color: #fff;
    margin-bottom: 7px;
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.5s ease;
  }

  .menu-icon__line-left {
    width: 16.5px;
    transition: all 200ms linear;
  }

  .menu-icon__line-right {
    width: 16.5px;
    float: right;
    transition: all 200ms linear;
  }

  .menu-icon:hover .menu-icon__line-left,
  .menu-icon:hover .menu-icon__line-right {
    width: 30px;
  }

  body.nav-active & .menu-icon__line {
    background-color: #fff;
    -webkit-transform: translate(0px, 0px) rotate(-45deg);
    transform: translate(0px, 0px) rotate(-45deg);
  }
  body.nav-active & .menu-icon__line-left {
    width: 15px;
    -webkit-transform: translate(2px, 4px) rotate(45deg);
    transform: translate(2px, 4px) rotate(45deg);
  }
  body.nav-active & .menu-icon__line-right {
    width: 15px;
    float: right;
    -webkit-transform: translate(-3px, -3.5px) rotate(45deg);
    transform: translate(-3px, -3.5px) rotate(45deg);
  }
  body.nav-active & .menu-icon:hover .menu-icon__line-left,
  body.nav-active & .menu-icon:hover .menu-icon__line-right {
    width: 15px;
  }
`;

const NavButton = ({ onClick }) => {
  return (
    <NavButtonWrapper>
      <div className="menu-icon hover-target" onClick={onClick}>
        <span className="menu-icon__line menu-icon__line-left"></span>
        <span className="menu-icon__line"></span>
        <span className="menu-icon__line menu-icon__line-right"></span>
      </div>
    </NavButtonWrapper>
  );
};

const NavWrapper = styled.div`
  position: fixed;
  z-index: 98;
  font-family: var(--montserrat-font);

  &:before,
  &:after {
    content: '';
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(20, 21, 26, 0.6);
    border-bottom-left-radius: 200%;
    z-index: -1;
    transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s,
      border-radius linear 0.8s;
    transform: translateX(100%) translateY(-100%);
  }

  &:after {
    background: rgba(9, 9, 12, 1);
    transition-delay: 0s;
  }

  &:before {
    transition-delay: 0.2s;
  }

  body.nav-active &:before,
  body.nav-active &:after {
    transform: translateX(0%) translateY(0%);
    border-radius: 0;
  }
  body.nav-active &:after {
    transition-delay: 0.1s;
  }
  body.nav-active &:before {
    transition-delay: 0s;
  }
`;

const NavContent = styled.div`
  position: fixed;
  visibility: hidden;
  top: 50%;
  margin-top: 20px;
  transform: translate(0%, -50%);
  width: 100%;
  text-align: center;

  body.nav-active & {
    visibility: visible;
  }
`;

const NavList = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
  z-index: 2;
`;

const NavItem = styled.div`
  position: relative;
  display: block;
  transition-delay: 0.8s;
  opacity: 0;
  text-align: center;
  color: #fff;
  overflow: hidden;
  font-size: min(8vh, 8vw + 1.2rem);
  font-weight: 900;
  line-height: 1.15;
  letter-spacing: 3px;
  transform: translate(100px, 0%);
  transition: opacity 0.2s ease, transform 0.3s ease;
  margin-top: 0;
  margin-bottom: 0;

  & a {
    position: relative;
    text-decoration: none;
    color: ${(props) =>
      props.active ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.6)'};
    overflow: hidden;
    cursor: pointer;
    padding-left: 5px;
    padding-right: 5px;
    font-weight: 900;
    z-index: 2;
    display: inline-block;
    text-transform: uppercase;
    transition: all 200ms linear;
  }

  & a:after {
    position: absolute;
    content: '';
    top: 50%;
    margin-top: -2px;
    left: 50%;
    width: 0;
    height: 0;
    opacity: 0;
    background-color: #0129ff;
    z-index: 1;
    transition: all 200ms linear;
    ${(props) =>
      props.active
        ? `
    height: 0.15em;
    transform: translateY(-25%);
    opacity: 1;
    left: 0;
    width: 100%;`
        : ''}
  }

  & a:hover:after {
    height: 0.15em;
    transform: translateY(-25%);
    opacity: 1;
    left: 0;
    width: 100%;
  }

  & a:hover {
    color: rgba(255, 255, 255, 1);
  }

  body.nav-active & {
    opacity: 1;
    transform: translateX(0%);
    transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease;
  }

  ${Object.keys(navLinks)
    .map(
      (_, i) => `body.nav-active &:nth-child(${i + 1}) {
    transition-delay: ${0.8 + i / 10}s;
  }`
    )
    .join('')}
`;

const toggleClass = function toggleClass(element, stringClass) {
  if (element.classList.contains(stringClass))
    element.classList.remove(stringClass);
  else element.classList.add(stringClass);
};

const Nav = () => {
  const path = usePathname();
  return (
    <NavWrapper>
      <NavContent>
        <NavList>
          {Object.keys(navLinks).map((page, i) => (
            <NavItem key={i} active={navLinks[page] == path}>
              <Link
                href={navLinks[page]}
                onClick={() => {
                  toggleClass(document.querySelector('body'), 'nav-active');
                }}
                className="hover-target"
              >
                {page}
              </Link>
            </NavItem>
          ))}
        </NavList>
      </NavContent>
    </NavWrapper>
  );
};

export const Header = () => {
  return (
    <>
      <HeaderComponent>
        <HeaderWrapper className="fade-up">
          <LogoWrapper>
            <Link href="/" className="hover-target">
              <Image
                src="/TS21233-logo.png"
                alt=""
                width={209.656}
                height={60}
                priority={true}
              />
            </Link>
          </LogoWrapper>
          <NavButton
            onClick={() => {
              toggleClass(document.querySelector('body'), 'nav-active');
            }}
          />
        </HeaderWrapper>
      </HeaderComponent>
      <Nav />
    </>
  );
};
