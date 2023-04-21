// Interested in migrating from FlatList to FlashList? Check out the recipe in our Ignite Cookbook
// https://ignitecookbook.com/docs/recipes/MigratingToFlashList
import { useHeader } from "app/utils/useHeader"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import {
  ActivityIndicator,
  FlatList,
  ImageStyle,
  ViewStyle,
} from "react-native"
import {  Card, EmptyState, Screen } from "../components"
import { isRTL } from "../i18n"
import { useStores } from "../models"
import { Episode } from "../models/Episode"
import { MainTabScreenProps } from "../navigators/MainNavigator"
import { spacing } from "../theme"

const channels = [
  {
    id: "1",
    title: "llamas-who-code",
  },
  {
    id: "2",
    title: "pizza-toppings",
  },
  {
    id: "3",
    title: "taylor-swifts-favorite-cars",
  },
]

export const ChannelsScreen: FC<MainTabScreenProps<"Channels">> = observer(
  function ChannelsScreen(_props) {
    const { navigation } = _props
    const [refreshing, setRefreshing] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)

    useHeader({
      title: "Channels",
    })

    return (
      <Screen preset="fixed" safeAreaEdges={[]} contentContainerStyle={$screenContentContainer}>
        <FlatList<any>
          data={channels}
          contentContainerStyle={$flatListContentContainer}
          refreshing={refreshing}
          ListEmptyComponent={
            isLoading ? (
              <ActivityIndicator />
            ) : (
              <EmptyState
                preset="generic"
                style={$emptyState}
                imageStyle={$emptyStateImage}
                ImageProps={{ resizeMode: "contain" }}
              />
            )
          }
          renderItem={({ item }) => (
            <ChannelItem
              key={item.id}
              channel={item}
              onPress={() => {
                navigation.navigate("Chat", { channelId: item.id })
              }}
            />
          )}
        />
      </Screen>
    )
  },
)

const ChannelItem = observer(function ChannelItem({
  channel,
  onPress,
}: {
  channel: any
  onPress: () => void
}) {
  return <Card style={$item} onPress={onPress} content={`#${channel.title}`} />
})

// #region Styles
const $screenContentContainer: ViewStyle = {
  flex: 1,
}

const $flatListContentContainer: ViewStyle = {
  paddingHorizontal: spacing.large,
  // paddingTop: spacing.large + spacing.extraLarge,
  paddingBottom: spacing.large,
}

const $item: ViewStyle = {
  padding: spacing.medium,
  marginTop: spacing.medium,
}

const $emptyState: ViewStyle = {
  marginTop: spacing.huge,
}

const $emptyStateImage: ImageStyle = {
  transform: [{ scaleX: isRTL ? -1 : 1 }],
}
// #endregion

// @demo remove-file
