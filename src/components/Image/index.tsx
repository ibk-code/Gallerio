// ----------- import external dependncies ------------
import styled from "styled-components";

interface Props {
  src: string;
  alt: string;
}

function Image({ src, alt }: Props) {
  return (
    <ImgWrapper>
      <Img src={src} alt={alt} loading="eager" />
      <ImgOverlay>
        <div>
          <span className="title">Title:</span>
          <span className="desc">{alt}</span>
        </div>
      </ImgOverlay>
    </ImgWrapper>
  );
}

export default Image;

// ------ component styles -------

const ImgWrapper = styled.div`
  position: relative;

  &:hover > div {
    opacity: 0.8;
  }
`;

const Img = styled.img`
  height: 400px;
  width: 100%;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
  opacity: 1;
  backface-visibility: hidden;
  transition: 0.5s ease;
`;

const ImgOverlay = styled.div`
  background: var(--oxford-blue);
  height: 400px;
  position: absolute;
  height: 400px;
  width: 100%;
  top: 50%;
  opacity: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease;
  z-index: 1;
  display: flex;
  align-items: end;
  padding: 1rem;
  z-index: 1;

  & > div {
    display: flex;
    gap: 10px;
    align-items: center;

    & .title {
      color: var(--white);
      font-size: 1.125rem;
    }

    & .desc {
      color: var(--white);
    }
  }
`;
