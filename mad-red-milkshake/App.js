import React from 'react';
import { WebView } from 'react-native-webview';

const MyStreamlitApp = () => {
  return <WebView source={{ uri: 'https://corsariousai.streamlit.app' }} style={{ flex: 1 }} />;
};

export default MyStreamlitApp;