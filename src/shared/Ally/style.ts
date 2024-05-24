// --------------- import external dependencies -------------
import styled from "styled-components";

export const SkipToContentStyle = styled.a`
  position: fixed;
  left: 3rem;
  transition: 0.3s ease-in;
  z-index: 2050;
  font-size: 1rem;
  font-weight: 300;
  background-color: var(--oxford-blue);
  text-decoration: none !important;
  top: -12rem;
  outline: none;
  padding: 0.5rem 2rem;
  color: var(--white);

  &:focus {
    top: 0;
  }
`;
