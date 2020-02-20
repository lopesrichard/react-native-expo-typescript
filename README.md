# React Native Template

A template for fast start development of react native apps.

## Features

- [Expo](https://github.com/expo/expo)
- [Typescript](https://github.com/Microsoft/TypeScript)
- [React Navigation v5](https://reactnavigation.org)
- [Redux](https://github.com/reduxjs/redux)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [Reactotron](https://github.com/infinitered/reactotron)
- [Axios](https://github.com/axios/axios)

## Custom Components

```jsx
import View from '~/components/view';
import Text from '~/components/text';
import Button from '~/components/button';

export default () => (
  <View.Center flex={1} color='maroon'>
    <Text.Bold size={50} color='white'>
      Welcome
    </Text.Bold>
    <View.Center mt={50}>
      <Button.Flat text='Register' />
      <Button.Flat text='Register' mt={10} disabled />
    </View.Center>
    <View.Center mt={20}>
      <Button.Rounded text='Login' />
      <Button.Rounded text='Login' mt={10} disabled />
    </View.Center>
  </View.Center>
);
```

This produces a screen like

<img src="docs/images/screen.jpeg" alt="example screen" width="200"/>
