import React, { Component, useEffect, useState } from "react";
import styled from "styled-components";
import ReadingProgress from "react-reading-progress";
import Gs from "../../styles/theme.config.js";
import Link from "next/link";
import Image from "next/image";
import { Zoom, Fade } from "react-reveal";
import ReactTooltip from "react-tooltip";
import { Timeline } from "react-twitter-widgets";
import {
  AiFillSound,
  AiOutlineSearch,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { FaFacebook, FaReddit, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Media from "../../styles/media-breackpoint";
import UserImg01 from "../../public/images/user-ico.jpg";
import DImg01 from "../../public/images/img-01.jpg";
import DImg02 from "../../public/images/img-02.jpg";
import VideoThumb from "../../public/images/video-thumb.jpg";
import VideoThumb02 from "../../public/images/video-thumb02.png";
import BTMBXico01 from "../../public/images/faq-ico.png";
import CLback01 from "../../public/images/telegram-back.png";
import CLback02 from "../../public/images/utube-back.png";

import UserImg02 from "../../public/images/user-img01.jpg";

import Sticky from "react-stickynode";

const BlogDetail = (props) => {
  const [isOpen01, setIsOpen01] = useState(false);
  const [headerClass, setHeaderClass] = useState(false);
  const handleScroll02 = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 110) setHeaderClass(true);
    else setHeaderClass(false);
  };

  useEffect(() => {
    // window.scrollTo(0, 10)
    window.addEventListener("scroll", handleScroll02);
  }, []);

  return (
    <>
      <HomeBG>
        <ReadingProgress
          className={"Rprogresor " + [headerClass ? " active" : ""]}
        />
        <Gs.Container className="blFont">
          <Section1>
            {/* <Fade cascade bottom delay={300} duration={1600}> */}

            <MainHeadS>
              <h1>
                Centralized (CEX) vs Decentralized Exchanges (DEX):{" "}
                <span>What You Need to Know</span>
              </h1>

              <CateLink>
                <Link href="">DeFi,</Link> <Link href="">Blockchain</Link>
              </CateLink>
            </MainHeadS>

            <BodyContent id="BodyBX">
              <BLeftBX>
                <Sticky enabled={true} top={120} bottomBoundary={"#BodyBX"}>
                  <div className="blContainer">
                    <Ltitle01>TABLE OF CONTENTS</Ltitle01>
                    <LlinkBX>
                      <Link href="#tag01" className="active">
                        Quick Takes
                      </Link>
                      <Link href="">What is a Centralized Exchange (CEX)?</Link>
                      <Link href="">Pros and Cons of Centralized Exchanges</Link>
                      <Link href="">
                        Examples of Centralized Exchanges Failing Their Users
                      </Link>
                      <Link href="">What is a Decentralized Exchange (DEX)?</Link>
                      <Link href="">
                        Pros and Cons of Decentralized Exchanges
                      </Link>
                    </LlinkBX>
                  </div>
                </Sticky>
              </BLeftBX>

              <BCenterBX>
                <UserInfoBX>
                  <div className="ImgBX">
                    <Image src={UserImg01} alt="User" />{" "}
                  </div>{" "}
                  By <span>Max</span>
                  <div className="trdSBX">Estimated reading: 18 mins</div>
                  <div className="secondSBX">
                    <button>
                      <AiFillSound /> Listen To Article
                    </button>
                  </div>
                </UserInfoBX>

                <BlogMContent>
                  <figure>
                    <Image src={DImg01} alt="DImage" />
                  </figure>
                  <h2>Quick Takes</h2>
                  <ul>
                    <li>
                      The fundamental difference between centralized vs
                      decentralized exchanges is not having custody over your
                      coins vs having custody over your coins, respectively.{" "}
                    </li>
                    <li>
                      Centralized Exchanges are notorious for losing and/or
                      freezing user funds, high middleman fees, and lack of
                      transparency
                    </li>
                    <li>
                      Decentralized Exchanges offer peer-to-peer, trustless, and
                      permissionless exchange of digital assets without
                      middlemen.
                    </li>
                  </ul>

                  <h2>What is a Centralized Exchange (CEX)?</h2>
                  <p>
                    The first ever crypto trading platforms started as{" "}
                    centralized exchanges or CEXs for short. They’re
                    essentially companies that provide trading services, except
                    they manage cryptocurrencies instead of traditional
                    currencies. Like every financial organization, they’re
                    subject to regulations, security checks, and investment
                    insurance (better known in the US as FDIC).
                  </p>
                  <p>
                    While they never advertise as such, CEXs are asset managers.
                    Whenever you trade cryptocurrencies from these platforms,
                    you’re{" "}
                    transferring financial ownership to the companyand{" "}
                    trusting that they will use your balance as
                    intended. In practice, your money goes to a collective
                    wallet that automatically fulfills everyone’s orders.{" "}
                  </p>
                  <p>
                    We call them custodial wallets. Binance, Coinbase,
                    Kraken, KuCoin, eToro, and all CEXs have one. In finance,
                    trust is backed by legal procedures such as:
                  </p>
                  <p>
                    In finance, trust is backed by legal procedures such as:
                  </p>

                  <ul>
                    <li>
                      Know Your Customer (KYC) for user’s
                      proof-of-identity and proof-of-address
                    </li>
                    <li>
                      Anti-Money Laundering (AML) compliance, which is
                      one reason CEXs can offer crypto-fiat services
                    </li>
                    <li>
                      Terms and Conditions set by the company that
                      users must follow to avoid balance freezes
                    </li>
                  </ul>
                  Examples of Centralized Exchanges
                  <p>
                    Hundreds of CEXs have appeared since Bitcoin’s inception
                    (the first one being Mt.Gox in 2010). Many are inactive,
                    others shut down, and some of them have become the most
                    popular exchanges worldwide until today. The top 10 by
                    market volume are:
                  </p>
                  <ul className="v2">
                    <li>Binance (2017) and Binance US</li>
                    <li>Coinbase (2012)</li>
                    <li>FTX (2019)</li>
                    <li>Kraken (2011)</li>
                    <li>Kucoin (2017)</li>
                    <li>Gate.io (2013)</li>
                    <li>Bitstamp (2011)</li>
                    <li>Gemini (2015)</li>
                    <li>Coincheck (2012)</li>
                    <li>Huobi Global (2013)</li>
                  </ul>

                  <p>
                    These tend to offer the most token variety. If payment
                    options and fees are more important to you, the most
                    recommended are national CEXs. For example, there’s Voyager
                    for the USA, Newton for Canada, Swyftx for Australia and New
                    Zealand, and CEX.io for most of Europe.
                  </p>
                  <p>
                    Almost all CEXs are crypto-fiat (otherwise you’re better off
                    using DEXs). National CEXs only support the
                    country’s official currency while platforms like Binance
                    have the 5-10 most used worldwide. Still, almost every
                    crypto pair is either in BTC or USD, and fiat-fiat pairs are
                    very rare.
                  </p>
                  <p>
                    Examples of fiat-only CEXs are TDAmeritrade, Fidelity, and
                    Charles Schwab. Those that expanded with cryptocurrencies
                    are the minority (e.g., Interactive Brokers), which is to
                    offer Bitcoin, Ethereum, and three altcoins at most.
                  </p>

                  <h2 id="tag01">Pros and Cons of Centralized Exchanges</h2>
                  <p>
                    Centralized exchanges are not totally ‘bad’, they come with
                    various advantages and disadvantages.
                  </p>
                  <figure>
                    <Image src={DImg02} alt="DImage" />
                  </figure>
                  <h5>Pros of Centralized Exchanges (CEXs)</h5>
                  <p>
                    What are some of the reasons you might want to use CEXs?
                  </p>

                  <ul>
                    <li>
                      <h4>CEXs are more beginner-friendly</h4>. Companies
                      increase revenue and liquidity through adoption, which is
                      why they’re simpler and more attractive than DEXs. More
                      exchanges now have minimalistic “Lite” versions to avoid
                      overwhelming first-time crypto buyers. Not every exchange
                      can become Binance, so a different selling point is to
                      make exchanges feature-light, aesthetic, and with many
                      fiat payment methods.
                    </li>
                    <li>
                      CEXs abide by regulations. They’ve been verified to meet
                      basic security standards, which brings confidence to
                      beginner crypto investors. And because they’re regulated,{" "}
                      <h4>CEXs can offer several regulated services</h4> that
                      unregulated platforms don’t. International CEXs become
                      all-in-one crypto platforms, offering prediction markets
                      trading, lending, debit cards, gift cards, OTC liquidity,
                      margin trading, and crypto-fiat ramps.
                    </li>
                    <li>
                      <h4>CEXs have the most crypto on-ramps and off-ramps.</h4>{" "}
                      Provided that you can verify an account, you’ll be able to
                      access more payment methods than any DEX provides in 2022.
                      Especially <h4>national</h4> exchanges offer the most
                      options (but smaller coin selections). CEXs can sell you
                      crypto for fiat(via credit cards, P2P markets, bank
                      transfers, Paypal…) or send you fiat money in exchange for
                      crypto (via bank transfer or cards).
                    </li>
                    <li>
                      Beginners also like that{" "}
                      <h4>CEXs have customer support </h4>to guide them through
                      the adoption. Unfortunately, CEXs get a bad rap because
                      companies don’t prioritize support enough (there are
                      exceptions), there are more users than agents, and users
                      have unrealistic expectations. Read reviews and carefully
                      decide, because you don’t want to have a suspended account
                      and waste weeks on support tickets.
                    </li>
                  </ul>

                  <div className="teleBX">
                    Join The Leading Crypto Channel
                    <button>JOIN</button>
                  </div>

                  <h5>Cons of Centralized Exchanges (CEXs)</h5>
                  <p>
                    While CEXs seem like the best place to start with crypto,
                    it’s not a good idea to stay on them:
                  </p>

                  <ul>
                    <li>
                      You need <h4>constant</h4> verification: KYC is the first
                      step that allows you <h4>temporary</h4> access to the
                      services. You may have to re-upload files every few months
                      or whenever the company updates the Terms. Don’t forget
                      there’s an algorithm to detect “suspicious” activity,
                      which can suspend your account anytime for the most
                      ridiculous reasons.
                    </li>
                    <li>
                      <h4>CEXs don’t support enough coins.</h4> They offer, at
                      best, a few hundred coins and often skip important ones
                      (e.g., CoinBase exchange). DEXs can trade any coin in the
                      blockchain (1000s). CEXs don’t list new coins until months
                      later, which puts you in the late investor majority.
                    </li>
                    <li>
                      They’re <h4>custodial wallets.</h4> If the founders do an
                      exit scam or there’s an important cyber-attack, you will
                      lose crypto. When that happens, they will deny the
                      incident and hide the loss with “temporary” withdrawal
                      suspensions. Also, CEXs can change terms without notice
                      and interpret your compliance. They neither have the
                      obligation to justify account decisions.
                    </li>
                    <li>
                      They lack <h4>transparency.</h4> You don’t know how
                      they’re using your idle crypto, and you don’t know who’s
                      behind the trades. A custodial exchange can trade against
                      itself or convert user funds to create fake trading volume
                      and price action. Costs aren’t transparent either, as the
                      promoted fees aren’t that low compared to the bid-ask
                      spread (e.g., CoinMarketCap shows ETH at $2,000 but CEXs
                      offer it at $2,050).
                    </li>
                    <li>
                      <h4>CEXs can trade against you.</h4> While you don’t have
                      transparency, the company can see everyone’s orders and
                      capitalize on them (via scam wicks or volume incentives).
                      You might blame the whales when it’s really insiders
                      front-running the trades.
                    </li>
                  </ul>

                  <div className="utubeBX">
                    Watch Our Latest Videos.
                    <button>SUBSCRIBE</button>
                  </div>

                  <p>
                    These cons aren’t theoretical risks. They happen all the
                    time, and several CEXs have gone out of business because of
                    them.
                  </p>
                </BlogMContent>

                <NexPreBLGBX>
                  <button className="prev ">
                    <i>
                      <AiOutlineLeft />
                    </i>
                    <span>Previous</span>
                    Top 9 Crypto Security Tips the Professionals Use
                  </button>
                  <button className="next ">
                    <i>
                      <AiOutlineRight />
                    </i>
                    <span>Next</span>
                    What are Decentralized Blockchain Oracles?
                  </button>
                </NexPreBLGBX>
              </BCenterBX>

              <BRightBX>
                <UserMBX>
                  <UserImgBX>
                    <Image src={UserImg02} alt="UserImage" />
                  </UserImgBX>
                  <h4>About Max</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque venenatis sit amet metus a dapibus. Duis a euismod
                    orci, ut sem.
                  </p>
                </UserMBX>

                <SearchBX>
                  <input type="text" placeholder="Search here ...." />
                  <i>
                    <AiOutlineSearch />
                  </i>
                </SearchBX>

                <div className="blContainer v2">
                  <Ltitle01>Categories</Ltitle01>
                  <LlinkBX className="v2">
                    <Link href="">Blockchain</Link>
                    <Link href="">DeFi</Link>
                    <Link href="">Liquid Loans</Link>
                    <Link href="">PulseChain</Link>
                    <Link href="">Stablecoins</Link>
                    <Link href="">Traditional Finance</Link>
                    <Link href="">All Articles</Link>
                  </LlinkBX>
                </div>

                <div className="blContainer v2">
                  <Ltitle01>Latest Video</Ltitle01>

                  <Link
                    className="VideoLink ani-1"
                    target="_blank"
                    href={{ pathname: "https://www.youtube.com/c/liquidloans" }}
                  >
                    <Image src={VideoThumb} alt="VideoThumb" />
                  </Link>
                </div>

                <div className="blContainer v2">
                  <Ltitle01>Latest Podcast</Ltitle01>
                  <Link
                    className="VideoLink ani-1"
                    target="_blank"
                    href={{ pathname: "https://www.youtube.com/c/liquidloans" }}
                  >
                    <Image src={VideoThumb02} alt="VideoThmb" />
                  </Link>

                  <BtmSbx02>
                    <button className="BTMSbox01">
                      {" "}
                      <Image src={BTMBXico01} alt="FAQs"/> FAQ’s
                    </button>
                  </BtmSbx02>
                </div>

                <div className="blContainer v2">
                  {/* <Ltitle01>Latest Tweets</Ltitle01>  */}
                  <Timeline
                    dataSource={{
                      sourceType: "profile",
                      screenName: "liquidloansio",
                    }}
                    options={{
                      height: "400",
                      maxWidth: "300",
                    }}
                  />
                </div>

                <Sticky enabled={true} top={120} bottomBoundary={"#BodyBX"}>
                  <div className="blContainer v2">
                    <Ltitle01>Subscribe</Ltitle01>
                    <SearchBX className="v2">
                      <input type="text" placeholder="Enter your email" />
                      <button>SUBMIT</button>
                    </SearchBX>
                  </div>

                  <div className="blContainer v2">
                    <Ltitle01>Share This Article</Ltitle01>
                    <SocialLinkBX>
                      <Link href="">
                        <FaFacebook />
                      </Link>
                      <Link href="">
                        <AiFillLinkedin />
                      </Link>
                      <Link href="">
                        <AiFillTwitterCircle />
                      </Link>
                      <Link href="">
                        <FaReddit />
                      </Link>
                      <Link href="">
                        <FaTelegram />
                      </Link>
                      <Link href="">
                        <MdEmail />
                      </Link>
                    </SocialLinkBX>
                  </div>
                </Sticky>
              </BRightBX>
            </BodyContent>

            {/* </Fade> */}
          </Section1>
        </Gs.Container>
      </HomeBG>
    </>
  );
};

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const HomeBG = styled.div`
  background-image: url("${(props) => props.theme.BodyBg02}");
  background-repeat: no-repeat;
  background-position: top left;
  .Rprogresor {
    z-index: 1000;
    top: 90px;
    transition: all 0.3s ease;
    opacity: 0;
    &.active {
      opacity: 1;
    }

    ${Media.sm} {
      top: 65px;
    }
  }
`;
const Section1 = styled.div`
  padding: 160px 0px 85px;
  ${Media.sm} {
    padding: 110px 0px 60px;
  }
`;
const MainHeadS = styled(FlexDiv)`
  width: 100%;
  background-color: #fff;
  border-radius: 30px;
  -webkit-box-shadow: 0 10px 10px 1px rgba(0, 0, 0, 0.06);
  box-shadow: 0 10px 10px 1px rgba(0, 0, 0, 0.06);
  padding: 40px;
  min-height: 245px;
  flex-direction: column;
  h1 {
    font-size: 38px;
    color: #000;
    line-height: 48px;
    letter-spacing: -1px;
    font-weight: 600;
    max-width: 740px;
    text-align: center;
    span {
      color: #8224e9;
    }
  }
  ${Media.sm} {
    h1 {
      font-size: 26px;
      line-height: 38px;
    }
  }
  ${Media.xs} {
    padding: 20px;
  }
`;
const CateLink = styled(FlexDiv)`
  font-size: 15px;
  color: #a7a7a7;
  margin: 10px 0 0 0;
  a {
    color: #a7a7a7;
    margin-right: 6px;
    :hover {
      text-decoration: underline;
    }
  }
`;
const BodyContent = styled(FlexDiv)`
  width: 100%;
  margin: 30px 0 0 0;
  align-items: flex-start;
  justify-content: flex-start;
`;
const BLeftBX = styled(FlexDiv)`
  width: 276px;
  padding: 0 0 0 16px;
  justify-content: flex-start;
  align-items: flex-start;
  .blContainer {
    width: 276px;
    height: auto;
    &.v2 {
      width: 100%;
      max-width: 276px;
    }
  }

  ${Media.sm} {
    display: none;
  }
`;
const BCenterBX = styled(FlexDiv)`
  width: calc(100% - 552px);
  padding: 0 66px;

  ${Media.md} {
    width: calc(100% - 276px);
    padding: 0 20px 0 0;
  }
  ${Media.sm} {
    width: 100%;
    padding: 0 10px;
  }
`;
const BRightBX = styled(FlexDiv)`
  width: 276px;
  padding: 0 16px 0 0;
  display: block;
  .blContainer {
    width: 276px;
    height: auto;
    margin-bottom: 40px;
    &.v2 {
      width: 260px;
    }
  }
  .VideoLink {
    width: 100%;
    max-width: 276px;
    margin: 0 auto 0 auto;
    border: 1px solid #b3b3b3;
    padding: 10px;
    display: flex;
    img {
      max-width: 100%;
      height: auto;
    }
    :hover {
      filter: brightness(1.2);
    }
  }

  ${Media.md} {
    margin-left: auto;
    padding: 16px 16px 0 16px;
    width: calc(100% - 276px);
    background-color: #f7f7f7;
    .blContainer {
      width: 100%;
      max-width: 100%;
      &.v2 {
        width: 100%;
        max-width: 100%;
      }
    }
    .VideoLink {
      width: 100%;
      max-width: 250px;
      margin-left: 0;
    }
  }
  ${Media.sm} {
    width: 100%;
  }
`;
const Ltitle01 = styled(FlexDiv)`
  width: 100%;
  justify-content: flex-start;
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin: 0 0 24px 0;
`;
const LlinkBX = styled(FlexDiv)`
  width: 100%;
  justify-content: flex-start;
  font-size: 16px;
  a {
    color: #828282;
    width: 100%;
    max-width: 210px;
    line-height: 20px;
    padding: 12px 0;
    border-bottom: 1px solid #f2f2f2;
    &:nth-child(1) {
      padding-top: 0;
    }
    :hover,
    &.active {
      color: #8224e9;
    }
  }
  ${Media.md} {
    &.v2 {
      a {
        width: 50%;
        max-width: none;
      }
    }
  }
  ${Media.xs} {
    &.v2 {
      a {
        width: 100%;
        max-width: none;
      }
    }
  }
`;
const UserInfoBX = styled(FlexDiv)`
  width: 100%;
  justify-content: flex-start;
  margin: 0 0 50px 0;
  font-size: 15px;
  span {
    color: #000;
    font-weight: 600;
    margin: 0 6px 0 3px;
  }
  .ImgBX {
    width: 29px;
    border-radius: 50%;
    overflow: hidden;
    height: 29px;
    margin: 0 6px 0 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .secondSBX {
    margin: 0 0 0 25px;
    position: relative;
    button {
      background-color: transparent;
      color: #656565;
      display: flex;
      line-height: 15px;
      svg {
        fill: #8224e9;
        margin-right: 6px;
      }
      :hover {
        color: #8224e9;
      }
    }
  }
  .trdSBX {
    margin-right: auto;
    margin-left: 8px;
  }

  ${Media.xs} {
    .secondSBX {
      margin: 8px 0 0 0;
    }
  }
`;
const BlogMContent = styled(FlexDiv)`
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 18px;
  color: #2a2a2a;
  line-height: 28px;
  font-weight: 400;
  figure {
    width: 100%;
    border-radius: 15px;
    margin-bottom: 48px;
    overflow: hidden;
    img {
      width: 100%;
      border-radius: 15px;
      max-width: 100%;
      height: auto;
    }
  }
  h2 {
    font-size: 30px;
    font-weight: 600;
    color: #000000;
    letter-spacing: -1px;
    margin-bottom: 28px;
  }
  h3,
  h4 {
    font-weight: 600;
    color: #000000;
    display: inline;
  }
  h5 {
    font-weight: 600;
    color: #000000;
    display: inline;
    font-size: 22px;
  }

  p {
    margin: 0 0 32px 0;
    color: #2a2a2a;
  }
  ul {
    margin: 0;
    padding-left: 25px;
    li {
      margin-bottom: 26px;
      color: #2a2a2a;
      list-style-type: none;
      position: relative;
      :after {
        content: "●";
        border: none;
        color: #8224e9;
        position: absolute;
        left: -19px;
        top: -2px;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }

    &.v2 {
      li {
        width: 50%;
        display: inline-block;
      }
    }
  }
  ul ~ h2,
  p ~ h2 {
    margin-top: 70px;
  }
  ul ~ h5,
  p ~ h5 {
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .teleBX,
  .utubeBX {
    width: 100%;
    min-height: 112px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    color: #ffffff;
    background: url(${CLback01.src}) left top no-repeat;
    margin-top: 30px;
    background-size: cover;
    padding: 15px 15px 15px 105px;
    button {
      font-size: 18px;
      padding: 10px 20px;
      background: transparent;
      border-radius: 10px;
      color: #ffffff;
      border: 2px solid #fff;
      :hover {
        background-color: #fff;
        color: #000000;
      }
    }
  }
  .utubeBX {
    background: url(${CLback02.src}) left top no-repeat;
    padding: 15px 15px 15px 136px;
  }
  .utubeBX ~ p {
    margin-top: 10px;
  }

  ${Media.sm} {
    ul.v2 {
      li {
        width: 100%;
      }
    }
  }
  ${Media.xs} {
    .teleBX,
    .utubeBX {
      flex-direction: column;
      font-size: 16px;
      line-height: 22px;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
`;
const UserMBX = styled(FlexDiv)`
  width: 100%;
  max-width: 260px;
  flex-direction: column;
  h4 {
    font-size: 16px;
    font-weight: 600;
    color: #000000;
  }
  p {
    max-width: 242px;
    text-align: center;
    color: #838383;
    font-size: 15px;
  }
  ${Media.md} {
    max-width: 100%;
    p {
      max-width: 90%;
    }
  }
`;
const UserImgBX = styled(FlexDiv)`
  width: 84px;
  height: 84px;
  border-radius: 50px;
  overflow: hidden;
  margin: 0 0 22px 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50px;
  }
`;
const SearchBX = styled(FlexDiv)`
  width: 100%;
  max-width: 260px;
  position: relative;
  margin: 10px auto 45px auto;
  i {
    position: absolute;
    top: 12px;
    right: 10px;
    font-size: 22px;
  }
  input {
    width: 100%;
    height: 44px;
    border-radius: 0;
    border: 1px solid #b3b3b3;
    padding: 12px 40px 12px 12px;
  }
  button {
    font-size: 17px;
    line-height: 15px;
    padding: 12px 16px;
    color: #fff;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.GColor1},
      ${(props) => props.theme.GColor2}
    );
    width: 100%;
    text-align: center;
    margin-top: 12px;
    &:hover {
      opacity: 0.8;
    }
  }
  &.v2 {
    margin-bottom: 0;
  }

  ${Media.md} {
    max-width: 100%;
    p {
      max-width: 90%;
    }
  }
`;
const BtmSbx02 = styled(FlexDiv)`
  width: 100%;
  max-width: 260px;
  position: relative;
  margin: 30px auto 20px auto;
  .BTMSbox01 {
    width: 100%;
    background-color: #f9f9f9;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #000;
    font-size: 20px;
    font-weight: 600;
    img {
      margin: 12px 20px 0 25px;
      max-width: 62px;
    }
    :hover {
      background-color: #e9e5e5;
    }
  }

  ${Media.md} {
    margin-left: 0%;
    .BTMSbox01 {
      border: 1px solid #b3b3b3;
    }
  }
`;

const SocialLinkBX = styled(FlexDiv)`
  width: 100%;
  border: 1px solid #b3b3b3;
  padding: 10px;
  justify-content: space-between;

  a {
    font-size: 25px;
    display: inline-flex;
    color: #b097ca;
    :hover {
      color: #5408ca;
    }
  }
  ${Media.md} {
    max-width: 300px;
  }
`;
const NexPreBLGBX = styled(FlexDiv)`
  justify-content: space-between;
  margin-bottom: 30px;

  button {
    min-height: 106px;
    background-color: #f9f9f9;
    width: 47%;
    text-align: left;
    padding: 12px 12px 12px 60px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 16px;
    color: #2a2a2a;
    transition: all 0.1s ease-in-out;
    span {
      color: #9b9b9b;
      font-size: 14px;
    }
    i {
      position: absolute;
      left: 18px;
      top: 36%;
      font-size: 24px;
    }
    &.next {
      padding: 12px 60px 12px 12px;
      text-align: right;
      align-items: flex-end;
      i {
        left: auto;
        right: 18px;
      }
    }
    :hover {
      background: linear-gradient(
        90deg,
        ${(props) => props.theme.GColor1},
        ${(props) => props.theme.GColor2}
      );
      color: #fff !important;
    }
  }

  ${Media.sm} {
    button {
      width: 100%;
      margin-bottom: 15px;
    }
  }
`;

export default BlogDetail;
