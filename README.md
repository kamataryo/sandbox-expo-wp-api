# SANDBOX Expo WP API

## Prerequisite

- MacOS
- Node.js >8

## Get started

First, install the [JWT Authentication for WP REST API](https://ja.wordpress.org/plugins/jwt-authentication-for-wp-rest-api/) WordPress plugin to your WordPress.

Secondly, configure your WordPress as described in the plugin readme.

Thirdly, run the app:

```shell
$ git clone git@github.com:kamataryo/sandbox-expo-wp-api.git
$ cd sandbox-expo-wp-api
$ yarn
$ cp secrets.sample.json secrets.json
$ vim secrets.json # Fill values
$ yarn start
```
