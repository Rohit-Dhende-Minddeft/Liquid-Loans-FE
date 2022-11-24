import React, { Component, useEffect, useState } from 'react';
import styled from 'styled-components';
import Gs from '../../styles/theme.config';
import Link from 'next/link';
import Image from 'next/image';
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import Media from '../../styles/media-breackpoint';
import Masonry from 'react-masonry-css';

import HeroImg from '../../public/images/banner-01.jpg';
import UserImg01 from '../../public/images/user-ico.jpg';
import ShadowBX from '../../public/images/banner-shadown.jpg';
import IcoSearch from '../../public/images/search-symbol.png';
import HowitwrkBG from '../../public/images/bxbg01.jpg';
import UserImg02 from '../../public/images/user-img02.png';

import BlogImg01 from '../../public/images/bimg-01.jpg';
import BlogImg02 from '../../public/images/bimg-02.jpg';
import BlogImg03 from '../../public/images/bimg-03.jpg';
import BlogImg04 from '../../public/images/bimg-04.jpg';
import BlogImg05 from '../../public/images/bimg-05.jpg';
import BlogImg06 from '../../public/images/bimg-06.jpg';

import BTMBXico01 from '../../public/images/faq-ico.png';
import BTMBXico02 from '../../public/images/utube-ico.png';

import { getAuthorsPost, getBlogs, getCategories } from '../api/blogs';
import Card from '../../components/Card';

export const getServerSideProps = async (context) => {
  const authorId = context.params.authorId;
  const authorPosts = await getAuthorsPost(authorId);
  const blogs = await getBlogs();
  const categories = await getCategories();

  if (authorPosts.length !== 0) {
    return {
      props: { authorPosts, blogs, categories },
    };
  } else {
    return { notFound: true };
  }
};

const Home = (props) => {
  const [isOpen01, setIsOpen01] = useState(false);
  const { authorPosts, blogs, categories, setCategory } = props;

  useEffect(() => {
    // window.scrollTo(0, 10)
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    768: 2,
    600: 1,
  };

  const imagePerRow = 2;

  const [next, setNext] = useState(imagePerRow);
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

  const [filter, setFilter] = useState('all');
  const [filteredData, setFilteredData] = useState(blogs);

  //Handle filter function
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  //Filters the blogs according to the option selected
  useEffect(() => {
    const filteredData = blogs?.filter((item) => {
      if (filter === 'all') {
        return item;
      } else if (
        item.post_title?.toLowerCase().includes(filter.toLowerCase()) ||
        item.category
          ?.map((cat) => cat.slug?.toLowerCase())
          .includes(filter.toLowerCase()) ||
        item.author?.toLowerCase().includes(filter.toLowerCase())
      ) {
        return item;
      }
    });
    setFilteredData(filteredData);
  }, [filter]);

  useEffect(() => {
    setCategory(categories);
  }, [categories, setCategory]);
  return (
    <>
      <HomeBG>
        <Gs.BContainer>
          <Section1>
            {/* <Fade cascade bottom delay={300} duration={1600}> */}

            <MainHeadBX>
              <HeadSbx>
                <div className="userBX">
                  <i>
                    <Image
                      src={UserImg02}
                      alt="User"
                      width="auto"
                      height="auto"
                    />
                  </i>
                  <h2>{authorPosts.length > 0 && authorPosts[0].author}</h2>
                </div>
                <div className="userInfoContent">
                  <h3>
                    About {authorPosts.length > 0 && authorPosts[0].author}
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis ultrices lorem nec arcu blandit imperdiet. Quisque
                    gravida, nis andit imperdiet. Quisque gravida, nisl id ie
                    gravida, nis andit imperdiet. Quisque gravida, n
                    condimentum, velit leo maximus ante, nec aliquam neque leo
                    eu diam.
                  </p>
                  <div className="userbioLinkBX">
                    <Link href="">
                      <AiFillLinkedin />
                    </Link>
                    <Link href="">
                      <AiFillTwitterSquare />
                    </Link>
                  </div>
                </div>
              </HeadSbx>
            </MainHeadBX>

            <BTitle01>
              <BSubbox01>
                <h1> Popular Articles</h1>
              </BSubbox01>
              <BSubbox02>
                <div className="SearchBX ani-1">
                  <div
                    className={
                      'searchInputBX ani-1 ' + (isOpen01 ? 'active' : '')
                    }
                  >
                    <input
                      type="text"
                      placeholder="Search ..."
                      onChange={handleFilterChange}
                    />
                    <button
                      className="closBTN"
                      onClick={() => setIsOpen01((state) => !state)}
                    >
                      X
                    </button>
                  </div>
                  <button
                    className="SearchICO"
                    onClick={() => setIsOpen01((state) => !state)}
                  ></button>
                </div>
              </BSubbox02>
            </BTitle01>

            <BodyContent>
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {filteredData?.slice(0, next)?.map((blog, index) => {
                  return (
                    <div className="postMbx" key={index}>
                      <Link href={`/${blog.slug}`}>
                        <Card
                          key={index}
                          title={blog.post_title}
                          content={blog.descrption}
                          author={blog.author}
                          readingTime={blog.reading_time}
                          categories={blog.category}
                        />
                      </Link>
                    </div>
                  );
                })}
              </Masonry>

              <ButtonBar01>
                {next < filteredData?.length ? (
                  <button
                    onClick={handleMoreImage}
                    type="button"
                    className="btn01"
                  >
                    Load More +
                  </button>
                ) : (
                  <h1>You catched up with all the articles </h1>
                )}
              </ButtonBar01>

              <BottomMBX>
                <BtmSbx01>
                  <BtmSSubbx>
                    <div className="ssbxtitle01">
                      How It Works
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean nisl elilis id feugiat in.
                      </span>
                      <button>READ MORE</button>
                    </div>
                  </BtmSSubbx>
                </BtmSbx01>

                <BtmSbx02>
                  <button className="BTMSbox01 firstChild">
                    {' '}
                    <Image src={BTMBXico01} alt="Faq" /> FAQ’s
                  </button>
                  <button className="BTMSbox01">
                    {' '}
                    <Image src={BTMBXico02} alt="Videos" /> Videos
                  </button>
                </BtmSbx02>
              </BottomMBX>
            </BodyContent>

            {/* </Fade> */}
          </Section1>
        </Gs.BContainer>
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
  background-image: url('${(props) => props.theme.BodyBg}');
  background-repeat: no-repeat;
  background-position: top left;
`;
const Section1 = styled.div`
  padding: 160px 0px 105px;
  ${Media.sm} {
    padding: 110px 0px 60px;
  }
`;
const MainHeadBX = styled(FlexDiv)`
  width: 100%;
  background: ${(props) => props.theme.BHbxColor};
  padding: 30px;
  -webkit-box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.03);
  border-radius: 30px;
  align-items: center;
  position: relative;
  margin-bottom: 92px;
  min-height: 340px;
  &:after {
    content: '';
    border: none;
    position: absolute;
    top: calc(100% - -2px);
    left: 0;
    right: 0;
    height: 100px;
    display: block;
    background: url(${ShadowBX.src}) center bottom no-repeat;
    background-size: 100%;
    mix-blend-mode: multiply;
  }

  ${Media.md2} {
    &:after {
      top: calc(100% - 27px);
    }
  }
  ${Media.xs} {
    padding: 15px;
  }
`;

const HeadSbx = styled(FlexDiv)`
  width: 100%;
  max-width: 790px;
  padding-left: 20px;

  .userBX {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 26px;
    font-weight: 600;
    letter-spacing: -1px;
    color: #000000;
    i {
      width: 192px;
      height: 192px;
      border-radius: 100px;
      border: 5px solid #ededed;
      overflow: hidden;
      margin-bottom: 8px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .userInfoContent {
    width: calc(100% - 192px);
    padding: 8px 8px 8px 70px;
    h3 {
      font-size: 18px;
      font-weight: 600;
      letter-spacing: -1px;
      color: #000000;
    }
    p {
      font-size: 18px;
      font-weight: 400;
      color: #818181;
      line-height: 24px;
    }
  }
  .userbioLinkBX {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 32px;
    a {
      color: #b097ca;
      margin: 0 9px 0 0;
      :hover {
        color: #7239ae;
      }
    }
  }

  ${Media.sm} {
    flex-direction: column;
    padding: 8px;
    .userBX {
      width: 100%;
      i {
        width: 110px;
        height: 110px;
      }
    }
    .userInfoContent {
      width: 100%;
      padding: 10px;
      text-align: center;
    }
    .userbioLinkBX {
      justify-content: center;
    }
  }
`;

const UserInfoBX = styled(FlexDiv)`
  width: 100%;
  justify-content: flex-start;
  margin: 40px 0 0 0;
  &.v2 {
    padding: 0 12px 8px 12px;
    margin: 0;
  }
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
    &:after {
      content: '●';
      border: none;
      position: absolute;
      left: -15px;
    }
  }
`;
const BTitle01 = styled(FlexDiv)`
  width: 100%;
  justify-content: space-between;
  padding: 0 10px;
  font-size: 40px;
  font-weight: 600;
  color: #000;

  ${Media.xs} {
    width: 100%;
    justify-content: center;
  }
`;
const BSubbox01 = styled(FlexDiv)`
  letter-spacing: -1px;
`;
const BSubbox02 = styled(FlexDiv)`
  position: relative;

  .SearchBX {
    position: relative;
    .searchInputBX {
      position: absolute;
      display: flex;
      height: 48px;
      border-radius: 30px;
      background-color: #fff;
      -webkit-box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.05);
      box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.05);
      border: 1px solid #dbdbdb;
      top: -1px;
      right: -2px;
      z-index: 5;
      width: 0;
      opacity: 0;
      visibility: hidden;
      &.active {
        width: 380px;
        opacity: 1;
        visibility: visible;
      }
      .closBTN {
        position: absolute;
        right: 8px;
        top: 12px;
        font-size: 16px;
        display: flex;
        width: 25px;
        height: 25px;
        :hover {
          opacity: 0.8;
        }
      }
      input {
        width: 100%;
        padding: 4px 50px 4px 12px;
        background-color: transparent;
        border: none;
        font-size: 16px;
        font-weight: 400;
        border-radius: 30px;
      }
    }
  }
  .SearchICO {
    display: block;
    width: 45px;
    height: 45px;
    border: none;
    background: url(${IcoSearch.src}) 50% 50% no-repeat;
    :hover {
      filter: brightness(1.2);
    }
  }
  .CateBX {
    width: 196px;
    overflow: hidden;
    border: 1px solid #d0d0d0;
    border-radius: 12px;
    height: 44px;
    display: block;
    background-color: #fff;
    position: relative;
    margin: 0 20px 0 0;
    select {
      font-size: 16px;
      font-weight: 600;
      height: 44px;
      border: none;
      width: 110%;
      float: left;
      padding: 0 0 0 10px;
    }
    &:after {
      content: '';
      border-width: 5px;
      border-style: solid;
      border-color: #000 transparent transparent transparent;
      position: absolute;
      right: 12px;
      top: 19px;
    }
  }

  ${Media.xs} {
    width: 100%;
    justify-content: center;
    margin-top: 15px;

    .searchInputBX.active {
      width: calc(100vw - 80px) !important;
    }
  }
`;
const BodyContent = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 50px 0 0 0;
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -40px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 40px; /* gutter size */
    background-clip: padding-box;
  }
  /* Style your items */
  .my-masonry-grid_column > .postMbx {
    background-color: #fff;
    -webkit-box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.05);
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.05);
    margin-bottom: 40px;
    padding: 10px;
    border-radius: 20px;
    transition: all 400ms ease-in-out;
    transform: translateY(0);
    :hover {
      -webkit-box-shadow: 0 10px 15px 1px rgba(0, 0, 0, 0.2);
      box-shadow: 0 10px 15px 1px rgba(0, 0, 0, 0.2);
      transform: translateY(-3px);
      cursor: pointer;
    }
  }
  .BimgBX01 {
    width: 100%;
    height: 204px;
    overflow: hidden;
    border-radius: 20px;
    margin: 0 0 16px 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.v2 {
      height: 244px;
    }
  }
  .blogPostTitle01 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    color: #a7a7a7;
    padding: 0 12px;
    margin-bottom: 28px;
    .readingTime {
      color: #656565;
    }
  }
  .blogPostTitle02 {
    font-size: 21px;
    color: #000;
    line-height: 26px;
    font-weight: 600;
    padding: 0 12px;
    margin-bottom: 20px;
  }
  .blogPostText01 {
    padding: 0 12px;
    font-size: 16px;
    line-height: 24px;
    color: #818181;
    margin-bottom: 36px;
  }
`;

const ButtonBar01 = styled(FlexDiv)`
  width: 100%;
  margin: 35px 0 100px 0;
  .btn01 {
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    background-color: #eee7f5;
    border: 1px solid #d1bbe8;
    border-radius: 40px;
    padding: 8px 10px;
    width: 100%;
    max-width: 370px;
    :hover {
      background-color: #d6c6e7;
    }
  }
`;
const BottomMBX = styled(FlexDiv)`
  width: 100%;
`;
const BtmSbx01 = styled(FlexDiv)`
  width: 55%;
  min-height: 340px;
  background: url(${HowitwrkBG.src}) 50% 50% no-repeat;
  background-size: cover;
  padding: 15px;
  align-items: stretch;
  justify-content: stretch;

  ${Media.md2} {
    width: 100%;
    min-height: 280px;
  }

  ${Media.xs} {
    background-size: 200%;
    background-position: 0 0;
  }
`;

const BtmSSubbx = styled(FlexDiv)`
  width: 100%;
  border: 1px solid #cfd2f0;
  justify-content: flex-start;
  padding: 0 0 0 26px;
  .ssbxtitle01 {
    color: #000;
    font-size: 32px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    span {
      font-size: 16px;
      color: #3a3a3a;
      font-weight: 400;
      max-width: 230px;
      margin: 15px 0;
    }
    button {
      font-size: 19px;
      line-height: 19px;
      padding: 14px 14px;
      border-radius: 30px;
      color: #fff;
      background: linear-gradient(
        90deg,
        ${(props) => props.theme.GColor1},
        ${(props) => props.theme.GColor2}
      );
      max-width: 160px;
      &:hover {
        opacity: 0.9;
      }
    }
  }
`;
const BtmSbx02 = styled(FlexDiv)`
  width: 45%;
  min-height: 340px;
  padding-left: 38px;

  .BTMSbox01 {
    width: 100%;
    background-color: #f9f9f9;
    height: 158px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #000;
    font-size: 32px;
    font-weight: 600;

    img {
      margin: 12px 20px 0 25px;
    }
    :hover {
      background-color: #e9e5e5;
    }
    &.firstChild {
      margin-bottom: 25px;
    }
  }

  ${Media.md2} {
    width: 100%;
    min-height: auto;
    padding: 15px 0 0 0;
    .BTMSbox01 {
      width: 48%;
      &.firstChild {
        margin-bottom: 0;
        margin-right: 4%;
      }
    }
  }

  ${Media.sm} {
    .BTMSbox01 img {
      max-width: 60px;
    }
    .BTMSbox01 {
      font-size: 26px;
    }
  }
  ${Media.xs} {
    .BTMSbox01 {
      font-size: 20px;
      width: 100%;
      height: 100px;
      &.firstChild {
        margin-bottom: 8px;
        margin-right: 0;
      }
    }
  }
`;

export default Home;
