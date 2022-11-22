import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Gs from "../../styles/theme.config";
import Link from "next/link";
import { AiFillSound } from "react-icons/ai";
import Media from "../../styles/media-breackpoint";
import UserImg01 from "../../public/images/user-ico.jpg";
import DImg01 from "../../public/images/img-01.jpg";
import DImg02 from "../../public/images/img-02.jpg";
import { useRouter } from "next/router";
import Sticky from "react-stickynode";
import { API_BASE_URL } from "../../constants";
import Image from "next/image";
import Head from "next/head";

const BlogDetail = (props) => {
  const location = useRouter();
  const splitLocation = location.pathname.split("/");
  const slug = splitLocation[splitLocation.length - 1];

  useEffect(() => {
    // window.scrollTo(0, 10)
  }, []);

  useEffect(() => {
    fetchBlog();
  }, []);

  const [blog, setBlog] = useState({});

  const fetchBlog = async () => {
    if (slug) {
      await fetch(`${API_BASE_URL}/post/${slug}`)
        .then((response) => response.json())
        .then((data) => setBlog(data));
    }
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{blog?.post_title}</title>
        <meta property="og:title" content={`${blog?.fb_og_title}`} />
        <meta property="og:description" content={`${blog?.post_content}`} />
      </Head>
      <HomeBG>
        <Gs.Container className="blFont">
          <Section1>
            {/* <Fade cascade bottom delay={300} duration={1600}> */}

            <MainHeadS>
              <h1>
                Centralized (CEX) vs Decentralized Exchanges (DEX):
                <span>What You Need to Know</span>
              </h1>

              <CateLink>
                <Link  href={""}>
                  DeFi,
                </Link>
                <Link  href={""}>
                  Blockchain
                </Link>
              </CateLink>
            </MainHeadS>

            <BodyContent id="BodyBX">
              <BLeftBX>
                <Sticky enabled={true} top={120} bottomBoundary={"#BodyBX"}>
                  <div className="blContainer">
                    <Ltitle01>TABLE OF CONTENTS</Ltitle01>
                    <LlinkBX>
                      {/* <Link to='#tag01' className='active'>Quick Takes</Link>
                  <Link to=''>What is a Centralized Exchange (CEX)?</Link>
                  <Link to=''>Pros and Cons of Centralized Exchanges</Link>
                  <Link to=''>Examples of Centralized Exchanges Failing Their Users</Link>
                  <Link to=''>What is a Decentralized Exchange (DEX)?</Link>
                  <Link to=''>Pros and Cons of Decentralized Exchanges</Link> */}
                    </LlinkBX>
                  </div>
                </Sticky>
              </BLeftBX>

              <BCenterBX>
                <UserInfoBX>
                  <div className="ImgBX">
                    <Image src={UserImg01} alt="user" />
                  </div>
                  By <span>Max</span>
                  <div className="secondSBX">
                    <button>
                      <AiFillSound /> Listen Article
                    </button>
                  </div>
                  <div className="trdSBX">Estimated reading: 18 mins</div>
                </UserInfoBX>

                <BlogMContent>
                  <figure>
                    <Image src={DImg01} alt="figure" />
                  </figure>
                  <h2>Quick Takes</h2>
                  <ul>
                    <li>
                      The fundamental difference between centralized vs
                      decentralized exchanges is not having custody over your
                      coins vs having custody over your coins, respectively.
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
                    centralized exchangesor CEXs for short. They’re
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
                    transferring financial ownership to the company and{" "}
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
                      <h4>Know Your Customer (KYC)</h4> for user’s
                      proof-of-identity and proof-of-address
                    </li>
                    <li>
                      <h4>Anti-Money Laundering (AML) compliance</h4>, which is
                      one reason CEXs can offer <h4>crypto-fiat</h4> services
                    </li>
                    <li>
                      <h4>Terms and Conditions</h4> set by the company that
                      users must follow to avoid <h4>balance freezes</h4>
                    </li>
                  </ul>
                  <h2>Examples of Centralized Exchanges</h2>
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

                  <h2>Pros and Cons of Centralized Exchanges</h2>
                  <p>
                    Centralized exchanges are not totally ‘bad’, they come with
                    various advantages and disadvantages.
                  </p>
                  <figure>
                    <img src={DImg02} alt="" />
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

                  <p>
                    These cons aren’t theoretical risks. They happen all the
                    time, and several CEXs have gone out of business because of
                    them.
                  </p>
                </BlogMContent>
              </BCenterBX>

              <BRightBX>3</BRightBX>
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
  }
`;
const BCenterBX = styled(FlexDiv)`
  width: calc(100% - 552px);
  padding: 0 66px;
`;
const BRightBX = styled(FlexDiv)`
  width: 276px;
  padding: 0 16px 0 0;
  justify-content: flex-end;
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
    margin-left: auto;
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
`;

export default BlogDetail;
