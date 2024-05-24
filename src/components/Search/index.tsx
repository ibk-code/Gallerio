// ---------- import external dependencies ------------

import styled from "styled-components";

function Search({ ...rest }) {
  return <Input placeholder="Search with keyword" type="search" {...rest} />;
}

export default Search;

// ------ component styles ------
const Input = styled.input`
  min-height: 45px;
  display: block;
  background: transparent;
  width: 100%;
  border: 1px solid var(--silver-lake);
  border-radius: 5px;
  padding: 0.5rem 1rem;

  &::placeholder {
  }

  &:focus {
    outline: 1px solid var(--oxford-blue);
  }
`;
