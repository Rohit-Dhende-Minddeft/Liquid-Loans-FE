import React, { useEffect, useRef, useState } from "react";
import Gs from "../styles/theme.config";
import { Fade } from "react-reveal";
import styled from "styled-components";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import Collapse from "@kunukn/react-collapse";

import Media from "../styles/media-breackpoint";

import DarkLogo from "../public/images/darkLogo.png";
import LightLogo from "../public/images/lightLogo.png";
import SpriteIMG from "../public/images/sprite.png";
import Image from "next/image";


function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [headerClass, setHeaderClass] = useState(false);
  const [headerUp, setHeaderUp] = useState(false);

  const knowledgeRef = useRef(null);
  const companyRef = useRef(null);
  const articleRef = useRef(null);

  const onInit = ({ state, style, node }) => {
    setIsOpen(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 100) setHeaderClass(true);
    else setHeaderClass(false);
  };

  const trackMouse = (event) => {
    if (knowledgeRef.current && !knowledgeRef.current.contains(event.target)) {
      setIsOpen(false);
    }
    if (companyRef.current && !companyRef.current.contains(event.target)) {
      setIsOpen2(false);
    }
    if (articleRef.current && !articleRef.current.contains(event.target)) {
      setIsOpen5(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mouseover", trackMouse);
  }, []);

  return (
    <HeaderOuter className={[headerClass ? "fly" : "", headerUp ? "down" : ""]}>
      <Fade bottom>
        <Gs.Container>
          <Mainheadbox>
            <button
              className={"MMenu  " + (isOpen3 ? "active" : "")}
              onClick={() => setIsOpen3((state) => !state)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div
              className={"Menuouter02  " + (isOpen3 ? "active" : "")}
              onClick={() => setIsOpen3((state) => !state)}
            >
              &nbsp;
            </div>
            <HeadLeftbox>
              <Logo>
                <Link href="/">
                  <Image
                    src={props.isDarkTheme ? DarkLogo : LightLogo}
                    alt=""
                  />
                </Link>
              </Logo>
            </HeadLeftbox>

            <Collapse
              onInit={onInit}
              isOpen={isOpen3}
              className="SmenuFix collapse-css-transition"
            >
              <HeadRMBX className={isOpen4 ? "SMfix01" : ""}>
                <HeadCenterBox>
                  <nav className="desktop-menu">
                    <div className="menuFixer001" ref={articleRef}>
                      <button onMouseEnter={() => setIsOpen5(true)}>
                        All Articles <BiChevronDown />
                      </button>
                      <MenuBox className="">
                        <Collapse onInit={onInit} isOpen={isOpen5}>
                          <div className="MenuBoxInner">
                            <div
                              className={
                                "arrow-up  " + (isOpen5 ? "active" : "")
                              }
                            ></div>
                            {props.categories?.map((categorie, index) => {
                              return (
                                <Link
                                  key={index}
                                  href=""
                                  onClick={() => {
                                    setIsOpen(false);
                                    setIsOpen5(false);
                                  }}
                                >
                                  {categorie.cat_name}
                                </Link>
                              );
                            })}
                          </div>
                        </Collapse>
                      </MenuBox>
                    </div>

                    <div className="menuFixer001" ref={knowledgeRef}>
                      <button onMouseEnter={() => setIsOpen(true)}>
                        Knowledge <BiChevronDown />
                      </button>
                      <MenuBox className="SBox v2">
                        <Collapse onInit={onInit} isOpen={isOpen}>
                          <div className="MenuBoxInner">
                            <div
                              className={
                                "arrow-up a01 " + (isOpen ? "active" : "")
                              }
                            ></div>
                            <Link
                              href="/how-it-works"
                              onClick={() => {
                                setIsOpen(false);
                                setIsOpen3(false);
                              }}
                            >
                              <div className="Mi Mi1"></div>How It Works
                            </Link>
                            <Link
                              href="/video"
                              onClick={() => {
                                setIsOpen(false);
                                setIsOpen3(false);
                              }}
                            >
                              <div className="Mi Mi2"></div>Videos
                            </Link>
                            <Link
                              href="/podcasts"
                              onClick={() => {
                                setIsOpen(false);
                                setIsOpen3(false);
                              }}
                            >
                              <div className="Mi Mi16"></div>Podcasts
                            </Link>
                            <Link
                              target="_blank"
                              onClick={() => {
                                setIsOpen(false);
                                setIsOpen3(false);
                              }}
                              href={{
                                pathname: "https://docs.liquidloans.io/",
                              }}
                            >
                              <div className="Mi Mi3"></div>Knowledge
                            </Link>
                            <Link
                              href="/faq"
                              onClick={() => {
                                setIsOpen(false);
                                setIsOpen3(false);
                              }}
                            >
                              <div className="Mi Mi4"></div>FAQs
                            </Link>
                            <a
                              href="https://liquidloans.io/learn/"
                              onClick={() => {
                                setIsOpen(false);
                                setIsOpen3(false);
                              }}
                            >
                              <div className="Mi Mi5"></div>Learn
                            </a>
                          </div>
                        </Collapse>
                      </MenuBox>
                    </div>
                    <div className="menuFixer001" ref={companyRef}>
                      <button onMouseEnter={() => setIsOpen2(true)}>
                        Company <BiChevronDown />
                      </button>
                      <MenuBox className="SBox">
                        <Collapse onInit={onInit} isOpen={isOpen2}>
                          <div
                            className="MenuBoxInner"
                            onMouseLeave={() => setIsOpen2(false)}
                          >
                            <div
                              className={
                                "arrow-up a02  " + (isOpen2 ? "active" : "")
                              }
                            ></div>
                            <Link
                              href="/about"
                              onClick={() => {
                                setIsOpen2(false);
                                setIsOpen3(false);
                              }}
                            >
                              <div className="Mi Mi6"></div>About Us
                            </Link>
                            <Link
                              href="/about-pulsechain"
                              onClick={() => {
                                setIsOpen2(false);
                                setIsOpen3(false);
                              }}
                            >
                              <div className="Mi Mi7"></div>PulseChain
                            </Link>

                            <Link
                              href="/dapp"
                              onClick={() => {
                                setIsOpen2(false);
                                setIsOpen3(false);
                              }}
                            >
                              <div className="Mi Mi17"></div>Dapp
                            </Link>

                            <Link
                              target="_blank"
                              href={{
                                pathname: "https://testnet.liquidloans.io/",
                              }}
                              onClick={() => {
                                setIsOpen2(false);
                                setIsOpen3(false);
                              }}
                            >
                              <div className="Mi Mi15"></div>Testnet
                            </Link>

                            <Link
                              href="/resources"
                              onClick={() => {
                                setIsOpen2(false);
                                setIsOpen3(false);
                              }}
                            >
                              <div className="Mi Mi10"></div>Resources
                            </Link>
                            <Link
                              href="/downloads"
                              onClick={() => {
                                setIsOpen2(false);
                                setIsOpen3(false);
                              }}
                            >
                              <div className="Mi Mi13"></div>Downloads
                            </Link>
                            <Link
                              href="/connect"
                              onClick={() => {
                                setIsOpen2(false);
                                setIsOpen3(false);
                              }}
                            >
                              <div className="Mi Mi11"></div>Connect
                            </Link>
                          </div>
                        </Collapse>
                      </MenuBox>
                    </div>
                    <Link
                      href="/dapp"
                      onClick={() => {
                        setIsOpen(false);
                        setIsOpen3(false);
                      }}
                    >
                      <div className="Mi Mi1"></div>Dapp
                    </Link>
                  </nav>
                </HeadCenterBox>
                <HeadRightbox>
                  <BorrowBtn>
                    <Link
                      target="_blank"
                      href={{ pathname: "https://testnet.liquidloans.io/" }}
                      style={{ color: "white" }}
                    >
                      LAUNCH TESTNET
                    </Link>
                  </BorrowBtn>
                  <Collapse
                    onInit={onInit}
                    isOpen={isOpen4}
                    className="collapse-css-transition"
                  >
                    <LaungDDBX className={"  " + (isOpen4 ? "active" : "")}>
                      <div id="google_translate_element"></div>
                    </LaungDDBX>

                    <div
                      className={"Menuouter  " + (isOpen4 ? "active" : "")}
                      onClick={() => setIsOpen4((state) => !state)}
                    ></div>
                  </Collapse>
                </HeadRightbox>
              </HeadRMBX>
            </Collapse>
          </Mainheadbox>
        </Gs.Container>
      </Fade>
    </HeaderOuter>
  );
}
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const HeaderOuter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 500ms;

  ${Media.xl} {
    padding: 0 25px;
  }
  ${Media.sm} {
    padding: 0 0;
  }

  /* &.down{ top:40px;} */

  &.fly {
    background-color: ${(props) => props.theme.HeadBG};
    -webkit-box-shadow: 0 0 25px 1px ${(props) => props.theme.Headshadow};
    box-shadow: 0 0 25px 1px ${(props) => props.theme.Headshadow};
  }
  #lannguage_ul {
    opacity: 0;
    width: 1px;
    height: 1px;
    overflow: hidden;
    left: 0;
    top: 0;
    margin: 0;
    padding: 0;
  }
`;

const Mainheadbox = styled(FlexDiv)`
  justify-content: space-between;
  min-height: 90px;
  position: relative;

  .MMenu {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 15px;
    top: 14px;
    width: 44px;
    height: 42px;
    padding: 6px 2px;
    span {
      width: 100%;
      height: 2px;
      background: ${(props) => props.theme.TextWhite};
      display: block;
      margin: 4px;
      transition: all 100ms;
    }
    &.active {
      span:nth-child(01) {
        transform: rotate(-45deg) translate(-4px, 3px);
      }
      span:nth-child(02) {
        display: none;
      }
      span:nth-child(03) {
        transform: rotate(45deg) translate(-7px, -6px);
      }
    }
  }
  .Menuouter02 {
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    display: none;
    min-height: 100vh;
  }
  .Menuouter02.active {
    display: block;
  }

  @media (min-width: 768px) {
    .SmenuFix {
      overflow: visible !important;
      height: auto !important;
      visibility: visible !important;
      width: 100%;
    }
    .MMenu {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    .SmenuFix {
      overflow: visible !important;
      height: auto !important;
      visibility: visible !important;
      width: 100%;
    }
  }

  ${Media.sm} {
    min-height: 65px;
    .SmenuFix {
      position: absolute;
      right: 15px;
      top: 80px;
      left: 15px;
      overflow-y: auto !important;
      overflow-x: hidden !important;
      max-height: 80vh;
    }
  }
`;

const Logo = styled.div`
  margin: 0 auto 0 0;
  width: 140px;
  height: 47px;

  ${Media.sm} {
    width: 100px;
    height: 40px;
  }
`;
const HeadLeftbox = styled.div`
  display: flex;
  position: absolute;
  left: 6px;
  top: 23px;
  z-index: 11;
  align-items: center;
  justify-content: center;
  width: 30%;
  ${Media.md} {
    width: auto;
  }
  ${Media.md2} {
    left: 0;
  }
  ${Media.sm} {
    width: 50%;
    padding-top: 0;
  }
`;

const HeadRMBX = styled(FlexDiv)`
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  display: block;

  ${Media.sm} {
    width: 100%;
    padding-top: 15px;
    background-color: ${(props) => props.theme.HeadBG};
    padding: 20px;
    margin: 10px 0 0 0;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  ${Media.md} {
    flex-wrap: nowrap;
  }
  ${Media.sm} {
    flex-wrap: wrap;

    &.SMfix01 {
      padding-bottom: 120px;
    }
  }
`;
const HeadRightbox = styled.div`
  display: flex;
  position: absolute;
  right: 15px;
  top: -16px;
  z-index: 12;
  align-items: center;
  justify-content: flex-end;
  width: auto;
  ${Media.md2} {
    right: -10px;
  }
  ${Media.sm} {
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 0 0 10px 0;
    position: relative;
    right: auto;
    top: auto;
  }

  .Menuouter {
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    display: none;
    min-height: 100vh;
    z-index: 1;
  }
  .Menuouter.active {
    display: block;
    ${Media.sm} {
      display: none;
    }
  }
`;
const HeadCenterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: 0 16px 0 0;

  ${Media.sm} {
    width: 100%;
    align-items: flex-start;
    padding: 0 0 10px 0;
  }
  .desktop-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .menuFixer001 {
      :hover {
        z-index: 100;
      }
    }
    .menuFixer001 button {
      margin: 0 auto;
    }
    a,
    button {
      color: ${(props) => props.theme.MenuColor};
      font-size: 19px;
      padding: 0px 16px;
      background-color: transparent;
      border-radius: 30px;
      display: flex;
      align-items: center;
      justify-content: center;

      ${Media.md} {
        padding: 0px 8px;
        font-size: 16px;
      }
      ${Media.sm} {
        padding: 0;
        font-size: 22px;
        margin-bottom: 10px;
        line-height: 36px;
      }
      :hover {
        color: ${(props) => props.theme.Menuhover};
      }
    }
    ${Media.sm} {
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }
  }
`;

const LaungDDBX = styled(FlexDiv)`
  width: 190px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.LanDDBG};
  min-height: 80px;
  position: absolute;
  top: calc(100% + 10px);
  right: 5px;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 2;

  &.active {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  ${Media.sm} {
    width: 100%;
  }
`;

const BorrowBtn = styled.button`
  font-size: 19px;
  line-height: 19px;
  padding: 17px 28px;
  border-radius: 30px;
  color: #fff;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.GColor1},
    ${(props) => props.theme.GColor2}
  );

  a {
    color: #fff;
  }

  &.grayBTN {
    background: linear-gradient(90deg, #a2a2a2, #707070);
  }

  &:hover {
    opacity: 0.8;
  }
  ${Media.md} {
    font-size: 16px;
  }
  ${Media.md2} {
    font-size: 16px;
    padding: 17px 8px;
  }
`;

const ThemeChanger = styled(FlexDiv)`
  background-color: ${(props) => props.theme.ThemeChangerBg};
  border: 1px solid ${(props) => props.theme.ThemechangerBorder};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-left: 10px;
  cursor: pointer;
  box-shadow: 0px 4px 16px 1px ${(props) => props.theme.ThemeChangerShadow};

  &:hover {
    opacity: 0.8;
  }
  svg {
    font-size: 24px;
    color: ${(props) => props.theme.Moon};
  }

  &.v2 {
    position: relative;
    svg path {
      stroke: ${(props) => props.theme.Moon} !important;
    }
  }
`;

const MenuBox = styled.div`
  position: absolute;
  padding-top: 28px;
  left: -65px;
  ${Media.sm} {
    position: relative;
    top: auto;
    left: auto;
  }
  &.SBox {
    right: 0;
    left: auto;
    ${Media.sm} {
      right: auto;
      left: auto;
    }
  }
  .Menuouter {
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    display: none;
    min-height: 100vh;
  }
  .Menuouter.active {
    display: block;
    ${Media.sm} {
      display: none;
    }
  }

  &.v2 {
    right: auto;
    left: 40px;
  }

  .collapse-css-transition {
    transition: all 250ms ease-in-out;
    box-shadow: 0px 0px 30px 0px ${(props) => props.theme.MenuBoxShadow};
    ${Media.sm} {
      box-shadow: none;
    }
  }

  .MenuBoxInner {
    min-width: 250px;
    background-color: #fff;
    /* background-color:${(props) => props.theme.TextWhite};  */
    border-radius: 5px;
    padding: 35px 0px;
    position: relative;
    z-index: 2;
    ${Media.sm} {
      padding-top: 10px;
      background-color: ${(props) => props.theme.HeadBG};
    }

    .arrow-up {
      position: fixed;
      top: 75px;
      left: calc(50% - 190px);
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #fff;
      display: none;
      ${Media.lg} {
        left: calc(50% - 84px);
      }
      &.a01 {
        left: calc(50% - 60px);
        ${Media.lg} {
          left: calc(50% - 8px);
        }
      }
      &.a02 {
        left: calc(50% - -70px);
        ${Media.lg} {
          left: calc(50% - 8px);
        }
      }
    }
    .arrow-up.active {
      display: block;
      ${Media.sm} {
        display: none;
      }
    }

    a {
      font-size: 17px;
      color: ${(props) => props.theme.MDDText};
      justify-content: flex-start;
      padding: 0px 20px 20px;
      :last-child {
        padding-bottom: 0px;
      }
      ${Media.sm} {
        padding-left: 0;
        width: 100%;
        justify-content: center;
        color: ${(props) => props.theme.MenuColor};
        border-radius: 0;
      }
    }
    .Mi {
      width: 40px;
      height: 40px;
      margin-right: 18px;
      background: url(${SpriteIMG.src}) no-repeat;
      &.Mi1 {
        background-position: -12px -79px;
      }
      &.Mi2 {
        background-position: -72px -79px;
      }
      &.Mi3 {
        background-position: -132px -79px;
      }
      &.Mi4 {
        background-position: -192px -79px;
      }
      &.Mi5 {
        background-position: -252px -79px;
      }
      &.Mi6 {
        background-position: -312px -79px;
      }
      &.Mi7 {
        background-position: -372px -79px;
      }
      &.Mi8 {
        background-position: -72px -139px;
      }
      &.Mi9 {
        background-position: -12px -139px;
      }
      &.Mi10 {
        background-position: -132px -139px;
      }
      &.Mi11 {
        background-position: -192px -139px;
      }
      &.Mi12 {
        background-position: -252px -139px;
      }
      &.Mi13 {
        background-position: -313px -139px;
      }
      &.Mi14 {
        background-position: -372px -139px;
      }
      &.Mi15 {
        background-position: -343px -183px;
      }
      &.Mi16 {
        background-position: -280px -183px;
      }
      &.Mi17 {
        background-position: -222px -183px;
      }
      ${Media.sm} {
        display: none;
      }
    }
  }
`;

export default Header;
