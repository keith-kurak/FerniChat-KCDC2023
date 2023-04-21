import React, { FC, useState, useCallback, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import { useNavigation, useRoute } from '@react-navigation/native'
import { useHeader } from 'app/utils/useHeader'
import { GiftedChat } from 'react-native-gifted-chat'
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `Chat: undefined` to AppStackParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="Chat" component={ChatScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type

export const ChatScreen: FC<AppStackScreenProps<"Chat">> = observer(function ChatScreen() {
  const route = useRoute<AppStackScreenProps<"Chat">['route']>();
  const navigation = useNavigation();

  useHeader({
    title: route.params.channelId,
    leftIcon: "back",
    onLeftPress: navigation.goBack,
  })

  return (
    <Screen contentContainerStyle={$root} preset="fixed" safeAreaEdges={['bottom']} >
      <Example />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

function Example() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}