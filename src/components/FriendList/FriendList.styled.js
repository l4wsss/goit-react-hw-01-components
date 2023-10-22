import { styled } from "styled-components";

export const FriendsListContainer = styled.div `
  width: 250px;
  background-color: white;
  margin: 0 auto 200px auto;
  padding: 50px 25px;
  border-radius: 10px;
  box-shadow: 0px 2px 11px 3px rgba(0, 0, 0, 0.71);
`;
export const FriendsListItems = styled.ul `
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style-type: none;
`;

export const FriendsListItem = styled.li `
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  padding: 20px;
  outline: 2px solid LightSkyBlue;
  border-radius: 15px;
  gap: 20px;
  
`;

export const FriendsListImg = styled.img `
  height: 50px;
`;

export const FriendsListName = styled.p `
  font-weight: 500;
  font-size: 22px;
`;

export const FriendListStatus = styled.span `
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.$isOnline ? `green` : `red`)};
`;