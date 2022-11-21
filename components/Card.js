import BlogImg01 from "../public/images/bimg-01.jpg";
import UserImg01 from "../public/images/user-ico.jpg";
import styled from "styled-components";
import parse from "react-html-parser";
import Image from "next/image";

const Card = (props) => {
  const { title, content, author } = props;
  return (
    <>
      <div className="BimgBX01">
        <Image src={BlogImg01} alt="" />
      </div>
      <div className="blogPostTitle01">
        <span>Defi, Blockchain</span>
        <span>18 mins</span>
      </div>
      {title && <div className="blogPostTitle02">{title}</div>}
      {content && <div className="blogPostText01">{parse(content)}</div>}
      <UserInfoBX className="v2">
        <div className="ImgBX">
          <Image src={UserImg01} alt="" />
        </div>
        {author && (
          <>
            By
            <span>{author}</span>
          </>
        )}
      </UserInfoBX>
    </>
  );
};

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
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
      content: "●";
      border: none;
      position: absolute;
      left: -15px;
    }
  }
`;

export default Card;
