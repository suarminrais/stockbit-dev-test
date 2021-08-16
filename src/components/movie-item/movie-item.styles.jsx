import styled from "styled-components";

export const MovieItemContainer = styled.div`
  transition: transform .25s ease-out,-webkit-transform .25s ease-out;
  transform: translateZ(0);
  backface-visibility: hidden;
  border-radius: .5rem;
  border-width: .25rem;
  box-shadow: 4px 4px 8px 0 rgb(0 0 0 / 20%);
  margin: .5rem;
  display: inline-block;
  background:darkslategrey;

  &:hover, &:focus{
    transform: scale(1.05);
  }
`

export const MovieItemImage = styled.img`
  width:100%;
  height:320px;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  cursor:pointer;
`

export const MovieItemTitle = styled.h2`
  padding:1rem;
  margin:0;
  font-size:1.3rem;  
  & > a {
    text-decoration:none;
    color: #fff;
  }
  & > a:hover {
    color: lightgrey;
  }
`

export const MovieItemSub = styled.p`
  padding:1rem;
  padding-top:0;
  margin:0;
`