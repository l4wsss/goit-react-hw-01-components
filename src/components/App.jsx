import {Profile} from "./Profile/Profile"
import {Stats} from "./Stats/Stats"
import {FriendList} from "./FriendList/FriendList"
import {TransactionHistory} from "./TransactionHistory/TransactionHistory"

import userInfo from "../data/user"
import statsInfo from "../data/data"
import friendInfo from "../data/friends"
import transactionInfo from '../data/transactions'

export const App = () => {
  return (
    <div>
      <Profile user={userInfo}  />
      <Stats title="Upload Stats"  stats={statsInfo}  />
      <FriendList friend={friendInfo} />
      <TransactionHistory items={transactionInfo} />
    </div>
  );
};
