// ------------ import internal dependencies -------------
import { SkipToContentStyle } from "./style";

const SkipToContent = ({
  section,
  content,
}: {
  section: string;
  content: string;
}) => {
  return (
    <>
      <SkipToContentStyle href={`#${section}`} aria-label={content}>
        {content}
      </SkipToContentStyle>
    </>
  );
};

export default SkipToContent;
