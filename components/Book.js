'use client';

import styled from 'styled-components';

const BookWrapper = styled.div`
  z-index: 5;
  width: 200px;
  transform-style: preserve-3d;
  border-top-right-radius: 8px;
  transition: box-shadow 0.2s;
  display: block;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.24);

  transform: translate3d(0px, -50%, 0px) scale3d(1, 1, 1) rotateX(-20deg)
    rotateY(15deg) rotateZ(45deg) skew(0deg, 0deg);
  transition: transform 0.3s;

  position: absolute;
  top: 50%;
  left: -10px;

  /*&:hover {
    transform: translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(50deg) rotateZ(2deg) skew(0deg, 0deg);
  }*/
`;

const Cover = styled.div`
  width: 100%;
  height: 0;
  backface-visibility: visible;
  /*
  background-color: #7b61ff;
  background-image: url('https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6410f10aa7be8d613162a9af_grain.png'),
    linear-gradient(225deg, #7b61ff, #3e25bd);*/
  background-color: #3159ed;
  background-image: url('https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6410f10aa7be8d613162a9af_grain.png'),
    linear-gradient(225deg, #3159ed, #466aef);
  background-position: 50%, 0 0;
  background-repeat: no-repeat, repeat;
  background-size: cover, auto;
  border-top-left-radius: 2px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding-bottom: 141%;
  position: relative;

  overflow: hidden;
`;

const CoverPadding = styled.div`
  z-index: 100;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 9.3%;
  padding-right: 10.2%;
  display: flex;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
`;

const BookTitle = styled.img`
  z-index: 100;
  height: 120px;
  position: relative;
  top: 0;
  right: -7px;
  transform: rotate(-90deg);

  max-width: 100%;
  display: inline-block;
  vertical-align: middle;
`;

const BookSparkle = styled.img`
  z-index: 100;
  width: 26px;
  position: absolute;
  top: 48px;
  right: 82px;

  max-width: 100%;
  display: inline-block;
  vertical-align: middle;
`;

const BookOutline = styled.img`
  z-index: 100;
  width: 164px;
  max-width: 171px;
  min-width: 171px;
  opacity: 0.32;
  position: absolute;
  top: 6px;
  left: 20px;

  max-width: 100%;
  display: inline-block;
  vertical-align: middle;
`;

const CoverFold = styled.div`
  width: 7%;
  height: 100%;
  background-image: linear-gradient(
    90deg,
    transparent,
    rgba(0, 0, 0, 0.08) 34%,
    rgba(255, 255, 255, 0.22) 47%,
    rgba(255, 255, 255, 0) 59%,
    rgba(255, 255, 255, 0.12) 75%,
    rgba(255, 255, 255, 0)
  );
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: auto;
`;

const CoverFrontShadow = styled.div`
  background-image: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.1),
    rgba(252, 225, 25, 0.1)
  );
  border-top-right-radius: 8px;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
`;

const Spine = styled.div`
  width: 2vw;
  opacity: 1;
  transform-origin: 0%;
  transform-style: preserve-3d;
  background-image: url('https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6410f10aa7be8d613162a9af_grain.png'),
    linear-gradient(225deg, #3159ed, #466aef);
  background-position: 50%, 0 0;
  background-repeat: no-repeat, repeat;
  background-size: cover, auto;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: auto;
  transform: rotateX(0) rotateY(90deg) rotate(0);
`;

const SpineLogo = styled.img`
  width: 20px;
  transform-style: preserve-3d;
  position: absolute;
  top: 14px;
  right: 6px;
  transform: rotateX(0) rotateY(180deg) rotate(0);

  max-width: 100%;
  display: inline-block;
  vertical-align: middle;
`;

const SpineText = styled.img`
  width: 25px;
  transform-style: preserve-3d;
  position: absolute;
  top: 64px;
  right: 4px;
  transform: rotateX(0) rotateY(180deg) rotate(0);

  max-width: 100%;
  display: inline-block;
  vertical-align: middle;
`;

const Pages = styled.div`
  background-color: #fff;
  background-image: repeating-linear-gradient(
    rgba(0, 0, 0, 0.19),
    rgba(255, 255, 255, 0.1) 5%
  );
`;

const PagesTop = styled(Pages)`
  height: 1.9vw;
  transform-origin: 50% 0;
  transform-style: preserve-3d;
  position: absolute;
  top: 0%;
  bottom: auto;
  left: 0%;
  right: 0.5vw;
  transform: translateY(0.5vw) rotateX(-90deg) rotateY(0) rotate(0);
`;

const PagesBottom = styled(Pages)`
  height: 1.9vw;
  transform-origin: 50% 100%;
  transform-style: preserve-3d;
  position: absolute;
  top: auto;
  bottom: 0%;
  left: 0%;
  right: 0.5vw;
  transform: translateY(-0.5vw) rotateX(90deg) rotateY(0) rotate(0);
`;

const PagesSide = styled(Pages)`
  z-index: 1;
  width: 1.9vw;
  transform-origin: 100%;
  transform-style: preserve-3d;
  background-image: repeating-linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.19),
    rgba(255, 255, 255, 0.1) 5%
  );
  position: absolute;
  top: 0.5vw;
  bottom: 0.5vw;
  left: auto;
  right: 0%;
  transform: translate(-0.5vw) rotateX(0) rotateY(-90deg) rotate(0);
`;

const BackCover = styled.div`
  z-index: 100;
  transform-style: preserve-3d;
  background-image: url('https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6410f10aa7be8d613162a9af_grain.png'),
    linear-gradient(225deg, #3159ed, #466aef);
  background-position: 50%, 0 0;
  background-repeat: no-repeat, repeat;
  background-size: cover, auto;
  border-radius: 8px 0 0 8px;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  transform: translateZ(-2vw) rotateX(0) rotateY(180deg) rotate(0);

  overflow: hidden;
`;

const CoverFoldBack = styled(CoverFold)`
  left: auto;
  right: 0;
  transform: rotate(180deg);
`;

const BookOutlineBack = styled.img`
  width: 164px;
  max-width: none;
  min-width: 171px;
  opacity: 0.32;
  position: absolute;
  top: 6px;
  left: 11px;

  max-width: 100%;
  display: inline-block;
  vertical-align: middle;
`;

const BookLogoBack = styled.img`
  width: 70px;
  position: relative;
  top: 0;
  right: 0;

  max-width: 100%;
  display: inline-block;
  vertical-align: middle;
`;

export const Book = (props) => {
  return (
    <div {...props}>
      <BookWrapper>
        <BackCover>
          <CoverFoldBack />
          <CoverFrontShadow />
          <CoverPadding>
            <BookOutlineBack src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6411427cc858d99cbbb3f9fc_book-outline.svg" />
            <BookLogoBack src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641b39c8129134408ab85603_diagram-book-logo.png" />
          </CoverPadding>
        </BackCover>
        <Cover>
          <CoverPadding>
            {/*<BookTitle src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641144e24ccea2059b4bf327_The%20Magical%20Designer%20Spellbook.png" />*/}
            <BookTitle src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641148736a7d9553c3a057fd_Spellbook.png" />
            <BookSparkle src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6411468123a773394d67788a_%F4%80%AB%B8.svg" />
            <BookOutline src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6411427cc858d99cbbb3f9fc_book-outline.svg" />
          </CoverPadding>
          <CoverFold />
          <CoverFrontShadow />
        </Cover>
        <Spine>
          <SpineLogo src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6411468123a773394d67788a_%F4%80%AB%B8.svg" />
          <SpineText src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641148736a7d9553c3a057fd_Spellbook.png" />
        </Spine>
        <PagesTop />
        <PagesBottom />
        <PagesSide />
      </BookWrapper>
    </div>
  );
};
