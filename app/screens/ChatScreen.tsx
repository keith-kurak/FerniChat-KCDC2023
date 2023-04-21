import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import { useNavigation, useRoute } from '@react-navigation/native'
import { useHeader } from 'app/utils/useHeader'
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
    <Screen style={$root} preset="scroll">
      <Text text="chat" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
