// ----------- import external dependncies ------------
import styled from "styled-components";

// -------------- import internal dependncies --------------
import Seo from "../shared/Seo";
import Search from "../components/Search";
import Image from "../components/Image";
import useImages from "../hooks/useImages";
import Pagination from "../components/Pagination";

function Gallery() {
  // ------ intialize custom hooks ------
  const {
    images,
    search,
    setSearch,
    searchImages,
    getAllImages,
    pagination,
    loading,
    error,
  } = useImages();

  const handleSearchSubmit = (e: any) => {
    e.preventDefault();
    if (search) {
      searchImages(1);
    } else {
      getAllImages(1);
    }
  };

  const handlePagination = ({
    currentPage,
    size,
  }: {
    currentPage: number;
    size: number;
  }) => {
    if (search) {
      searchImages(currentPage, size);
    } else {
      getAllImages(currentPage, size);
    }
  };

  return (
    <Seo allowSkip>
      <main>
        {/* ------- search image section ------ */}
        <Container>
          <span className="block text-6xl mt-6 font-bold">Gallerio (:</span>
          <SearchWrapper>
            <form onSubmit={handleSearchSubmit}>
              <div>
                <label className="hidden" htmlFor="search">
                  Search
                </label>
                <Search
                  id="search"
                  value={search}
                  onChange={(e: any) => {
                    setSearch(e.target.value);
                  }}
                />
              </div>
              <Button>Search</Button>
            </form>
          </SearchWrapper>
        </Container>

        {/* ------ image container ------ */}
        <Container>
          {loading ? (
            <ImageWrapper>
              {Array.from(Array(6).keys()).map((ele) => (
                <Skeleton key={ele} />
              ))}
            </ImageWrapper>
          ) : null}

          {!loading && error ? (
            <div className="text-center text">
              Error Ocurred. Please refresh :(:
            </div>
          ) : null}

          {!loading && !error ? (
            <ImageWrapper>
              {images.map((image: any) => (
                <Image
                  key={image.id}
                  src={image?.src?.original as string}
                  alt={image.alt}
                />
              ))}
            </ImageWrapper>
          ) : null}

          {images.length > 0 && !loading ? (
            <Pagination
              totalPage={Math.round(
                (pagination?.total as number) / (pagination?.pageSize as number)
              )}
              currPage={pagination?.page as number}
              totalData={pagination?.total as number}
              paginate={handlePagination}
              pageSize={pagination?.pageSize as number}
              loading={loading}
            />
          ) : null}
        </Container>
      </main>
    </Seo>
  );
}

export default Gallery;

// ------ component styles -------
const Container = styled.section`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
`;

const SearchWrapper = styled.div`
  padding-top: 4rem;
  padding-bottom: 2rem;

  & > form {
    display: flex;
    width: 100%;
    gap: 20px;
    flex-wrap: wrap;

    & > div {
      width: 50%;
    }

    @media (max-width: 640px) {
      & > div {
        width: 100%;
      }
    }
  }
`;

const Button = styled.button`
  min-height: 45px;
  min-width: 200px;
  border: none;
  background: var(--oxford-blue);
  display: block;
  color: var(--white);
  border-radius: 5px;
  padding: 0.5rem 1rem;
`;

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const Skeleton = styled.div`
  height: 400px;
  background-color: var(--silver-lake);
  opacity: 0.2;
`;
