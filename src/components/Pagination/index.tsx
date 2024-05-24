// ----------- import external dependencies ------------
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Menu, MenuButton, MenuItem, MenuList } from "@reach/menu-button";

interface PaginationProps {
  totalPage: number;
  totalData: number;
  currPage: number;
  pageSize: number;
  paginate?: (obj: any) => void;
  loading?: boolean;
}

function Pagination({
  totalPage,
  currPage,
  paginate,
  pageSize,
  totalData,
  loading,
}: PaginationProps) {
  // ------ component state managers ------
  const [size, setSize] = useState(pageSize);
  const [total, setTotal] = useState(totalPage);
  const [active, setActive] = useState(currPage);
  const [lastIndex, setLastIndex] = useState(currPage < 5 ? 5 : currPage + 1);

  useEffect(() => {
    setSize(pageSize);
    setTotal(totalPage);
    setActive(currPage);
    setLastIndex(currPage < 5 ? 5 : currPage + 1);
  }, [totalPage, pageSize, currPage, loading]);

  return (
    <>
      <Wrapper>
        <div className="flex flex-wrap items-center gap-2">
          {/* ----- prev button pagination control ------ */}
          <PaginationBtn
            disabled={active === 1 || loading}
            onClick={() => {
              setActive(active - 1);
              if (paginate) {
                paginate({ currentPage: active - 1, size });
              }
            }}
          >
            Prev
          </PaginationBtn>

          {/* ------ pagination navigation ------ */}
          <nav role="navigation" aria-label="Pagination Navigation">
            <PaginationList>
              {/* ------- when curr page is 1 ------- */}
              <li>
                <PaginationLink
                  className={active === 1 ? "active" : ""}
                  onClick={() => {
                    if (active !== 1) {
                      setActive(1);
                      setLastIndex(5);
                      if (paginate) {
                        paginate({ currentPage: 1, size });
                      }
                    }
                  }}
                >
                  1
                </PaginationLink>
              </li>

              {active > 4 && total > 5 && (
                <li>
                  <a href="#" className="text-4xl text-text-light">
                    &#8230;
                  </a>
                </li>
              )}

              {active <= 5 &&
                lastIndex <= 5 &&
                Array.from(
                  { length: total < 5 ? total - 1 : 4 },
                  (_: number, i: number) => i + 2
                ).map((ele, ind, arr) => (
                  <li key={ind}>
                    <PaginationLink
                      className={active === ele ? "active" : ""}
                      onClick={() => {
                        if (active !== ele) {
                          setActive(ele);

                          if (paginate) {
                            paginate({ currentPage: ele, size });
                          }
                        }

                        if (arr.length - 1 === ind) {
                          setLastIndex(ele + 1);
                        }
                      }}
                    >
                      {ele}
                    </PaginationLink>
                  </li>
                ))}

              {active > 4 &&
                total > 5 &&
                Array.from(
                  { length: 4 },
                  (_: any, i: number) => i + (lastIndex - 2)
                ).map(
                  (ele, ind) =>
                    ele < total && (
                      <li key={ind}>
                        <PaginationLink
                          className={active === ele ? "active" : ""}
                          onClick={() => {
                            if (loading !== false) {
                              if (active !== ele) {
                                setActive(ele);

                                if (paginate) {
                                  paginate({ currentPage: ele, size });
                                }
                              }

                              // ------ check if pagination is moving backward ------
                              if (ind === 0) {
                                setLastIndex(lastIndex - 1);
                              }

                              // ------ check if pagination is moving forward ------
                              if (ele > lastIndex) {
                                setLastIndex(lastIndex + 1);
                              }
                            }
                          }}
                        >
                          {ele}
                        </PaginationLink>
                      </li>
                    )
                )}

              {/* ------ last page if totalPage is more then 5 ------- */}
              {total > 5 && (
                <>
                  {total - lastIndex > 0 && (
                    <li>
                      <a href="#" className="text-4xl text-text-light">
                        &#8230;
                      </a>
                    </li>
                  )}
                  <li>
                    <PaginationLink
                      className={active === total ? "active" : ""}
                      onClick={() => {
                        if (loading !== false) {
                          if (active !== total) {
                            setActive(total);

                            if (paginate) {
                              if (paginate) {
                                paginate({ currentPage: total, size });
                              }
                            }
                          }

                          if (total - lastIndex > 2) {
                            setLastIndex(total - 2);
                          }
                        }
                      }}
                    >
                      {total}
                    </PaginationLink>
                  </li>
                </>
              )}
            </PaginationList>
          </nav>

          {/* ------ next screen pagination control ------ */}
          <PaginationBtn
            disabled={active === total || loading}
            onClick={() => {
              setActive(active + 1);
              if (paginate) {
                paginate({ currentPage: active + 1, size });
              }
            }}
          >
            Next
          </PaginationBtn>

          {/* ------- pagination size menu ------- */}
          <Menu>
            <PaginationSize>{size} / Page</PaginationSize>
            <PaginationSizeList>
              <MenuItem
                disabled={loading}
                onSelect={() => {
                  setSize(10);
                  if (paginate) {
                    paginate({
                      currentPage:
                        active <= Math.ceil(totalData / 10)
                          ? active
                          : Math.ceil(totalData / 10),
                      size: 10,
                    });
                  }
                }}
              >
                10 / Page
              </MenuItem>
              <MenuItem
                disabled={loading}
                onSelect={() => {
                  setSize(20);
                  if (paginate) {
                    paginate({
                      currentPage:
                        active <= Math.ceil(totalData / 20)
                          ? active
                          : Math.ceil(totalData / 20),
                      size: 20,
                    });
                  }
                }}
              >
                20 / Page
              </MenuItem>
              <MenuItem
                disabled={loading}
                onSelect={() => {
                  setSize(50);
                  if (paginate) {
                    paginate({
                      currentPage:
                        active <= Math.ceil(totalData / 50)
                          ? active
                          : Math.ceil(totalData / 50),
                      size: 50,
                    });
                  }
                }}
              >
                50 / Page
              </MenuItem>
              <MenuItem
                disabled={loading}
                onSelect={() => {
                  setSize(100);
                  if (paginate) {
                    paginate({
                      currentPage:
                        active > Math.ceil(totalData / 100)
                          ? Math.ceil(totalData / 100)
                          : active,
                      size: 100,
                    });
                  }
                }}
              >
                100 / Page
              </MenuItem>
              <MenuItem
                disabled={loading}
                onSelect={() => {
                  setSize(200);
                  if (paginate) {
                    paginate({
                      currentPage:
                        active > Math.ceil(totalData / 200)
                          ? Math.ceil(totalData / 200)
                          : active,
                      size: 200,
                    });
                  }
                }}
              >
                200 / Page
              </MenuItem>
            </PaginationSizeList>
          </Menu>
        </div>
      </Wrapper>
    </>
  );
}

export default Pagination;

// ----- component styles ------
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const PaginationBtn = styled.button`
  min-width: 30px;
  min-height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  background: transparent;
  border-radius: 5px;
  border: 1px solid var(--oxford-blue);
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const PaginationLink = styled.a`
  min-width: 30px;
  min-height: 35px;
  background: transparent;
  display: flex;
  border-radius: 5px;
  border: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0.2rem;

  &.active {
    background: transparent;
    border: 1px solid var(--oxford-blue);
  }
`;

const PaginationSize = styled(MenuButton)`
  background: var(--background-1);
  border-radius: 5px;
  color: var(--text-light);
  min-width: 30px;
  min-height: 35px;
  border-radius: 5px;
  border: none;
`;

const PaginationSizeList = styled(MenuList)`
  box-shadow: 0px 0px 5px rgba(145, 145, 145, 0.25);
  border-radius: 5px;
  background: var(--white);
  min-width: 120px;
  position: absolute;
  bottom: 30px;
  z-index: 5;

  & > div {
    cursor: pointer;
    padding: 0.5rem 0.8rem;

    &:hover {
      background: var(--white);
    }
  }
`;

const PaginationList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  gap: 0.5rem;
  margin-top: 0.2rem;
`;
