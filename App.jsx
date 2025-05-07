import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styled } from 'nativewind';

// 版本號 - 方便檢查是否成功部署
const APP_VERSION = "v1.0.1";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function App() {
  return (
    <StyledView className="flex-1 items-center justify-center bg-white">
      <StyledText className="text-2xl font-bold mb-4">自適應健身運動應用</StyledText>
      <StyledText className="text-lg mb-2">版本: {APP_VERSION}</StyledText>
      <StyledText className="text-base">NativeWind 兼容性問題已修復</StyledText>
    </StyledView>
  );
}
