import { styled } from "styled-components";

export const ProfileContainer = styled.div`
  width: 400px;
  height: 500px;
  background-color: white;
  margin: 20px auto 200px auto;
  padding-top: 50px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 2px 11px 3px rgba(0, 0, 0, 0.71);
`
export const ProfileAvatarImg = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  overflow:hidden;
  margin: 0 auto;
  margin-bottom: 30px;
`

export const ProfileUsername = styled.h2`
  color: black;
  font-weight: 600;
  font-size: 26px;
  margin-bottom: 15px;
`;

export const ProfileLocation = styled.p`
  color: white-grey;
  font-size: 20px;
  font-weight: 500;
`

export const ProfileList = styled.ul`
  padding: 0;
  margin: 0;
  height: 100px;
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

`

export const ProfileItem = styled.li`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`

export const ProfileListText = styled.span`
color: gray;
  font-weight: 400;
`

export const ProfileListStats = styled.span`
  color: black;
  font-weight: 700;
  font-size: 18px;
  
`