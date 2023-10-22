import { FriendListItem } from "./FriendListItem"
import {FriendsListContainer, FriendsListItems} from "./FriendList.styled"

export const FriendList = ({friend}) => {
    return <FriendsListContainer>
        <FriendsListItems> {friend.map(({avatar, name, isOnline, id}) => (
            <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
        ))}
            
        </FriendsListItems>
    </FriendsListContainer>
    
}