import React from 'react'
import { Text, View } from 'react-native'

export const Posts = props => {
  const { data } = props
  if (data.length === 0) {
    return <Text>{'no data'}</Text>
  } else {
    return (
      <View>
        <Text>{`${data.length}件の private 投稿`}</Text>
        {data.map(post => (
          <View key={post.id}>
            <Text>{`[タイトル] ${post.title.rendered}`}</Text>
            <Text>{post.excerpt.rendered}</Text>
          </View>
        ))}
      </View>
    )
  }
}

export default Posts
