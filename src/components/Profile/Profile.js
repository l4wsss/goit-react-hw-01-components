import { ProfileContainer, ProfileAvatarImg, ProfileUsername, ProfileLocation, ProfileList, ProfileListStats, ProfileListText, ProfileItem } from "./Profile.styled";

export const Profile = ({user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
return (
<ProfileContainer>
    <ProfileAvatarImg src={avatar} alt="avatar" />
    <ProfileUsername> {username} </ProfileUsername>
    <span> @{tag} </span>
    <ProfileLocation> {location} </ProfileLocation>
    <ProfileList>
        <ProfileItem> 
            <ProfileListText>Followers</ProfileListText>  
            <ProfileListStats>{followers}</ProfileListStats>
        </ProfileItem>
        <ProfileItem>
            <ProfileListText>Views</ProfileListText>  
            <ProfileListStats>{views}</ProfileListStats>
        </ProfileItem>
        <ProfileItem>
            <ProfileListText>Likes</ProfileListText>  
            <ProfileListStats>{likes}</ProfileListStats>
        </ProfileItem>
    </ProfileList>
</ProfileContainer>
);
}