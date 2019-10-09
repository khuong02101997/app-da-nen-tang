import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createSwitchNavigator} from 'react-navigation';
import JoinRoomScreen from './screen/JoinRoom';
import ChatRoomScreen from './screen/ChatRoom';
const JoinStack = createStackNavigator({JoinRoom: JoinRoomScreen});
const ChatRoomStack = createStackNavigator({ChatRoom: ChatRoomScreen});
export default createAppContainer(
  createSwitchNavigator(
    {
      Join: {
        screen: JoinStack,
      },
      ChatRoom: {
        screen: ChatRoomStack,
      },
    },
    {
      initialRouteName: 'Join',
    },
  ),
);
