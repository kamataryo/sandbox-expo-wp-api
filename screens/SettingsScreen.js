import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import Posts from '../components/posts'
import axios from 'axios'
import secrets from '../secrets.json'
import { connect } from 'react-redux'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Login'
  }

  state = {
    username: '',
    password: '',
    token: '',
    posts: [],
    error: false
  }

  onAuth = () => {
    const { username, password } = this.state
    axios
      .post(`${secrets.ENDPOINT}jwt-auth/v1/token`, { username, password })
      .then(res => {
        const { token } = res.data
        this.setState({ token })

        return axios.get(`${secrets.ENDPOINT}wp/v2/posts?status=private`, {
          headers: { Authorization: `Bearer ${token}` }
        })
      })
      .then(({ data: posts }) => this.setState({ posts }))
      .catch(err => this.setState({ error }))
  }

  render() {
    const { error } = this.state

    if (error) {
      return <Text>{'login error'}</Text>
    }

    const { username, password, token, posts } = this.state
    const isLoggedIn = !!token

    return (
      <View>
        {isLoggedIn ? (
          <View>
            <Posts data={posts} />
          </View>
        ) : (
          <View>
            <Text>{'username'}</Text>
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={false}
              autoFocus={true}
              keyboardType={'ascii-capable'}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
            />
            <Text>{'password'}</Text>
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={false}
              autoFocus={false}
              keyboardType={'ascii-capable'}
              secureTextEntry={true}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
            <Button
              onPress={this.onAuth}
              title={'Login'}
              disabled={!username || !password}
            />
          </View>
        )}
      </View>
    )
  }
}

export const mapStateToProps = state => ({
  username: state.login.username,
  password: state.login.password,
  token: state.login.token
})

export const mapDispatchToProps = dispatch => ({
  // setUsername:
})
