import styled from "styled-components";

export const MovieDetailContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  margin-left:2rem;
  margin-right:2rem;
  justify-content:center;
  align-items:center;
`
export const MovieDetailSeparator = styled.div`
  padding:1rem;
  ${({ w }) => `width:${w}%;`}
`

export const MovieDetailImg = styled.img`
  width:100%;
  border-radius:1rem;
`

export const MovieDetailContent = styled.p`
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
`