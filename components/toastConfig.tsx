// components/toastConfig.ts
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export const toastConfig = {
  success: ({ text1, text2 }: any) => (
    <View style={[styles.base, styles.success]}>
      <Text style={styles.title}>{text1 || ''}</Text>
      {!!text2 && <Text style={styles.subtitle}>{text2}</Text>}
    </View>
  ),
  error: ({ text1, text2 }: any) => (
    <View style={[styles.base, styles.error]}>
      <Text style={styles.title}>{text1 || ''}</Text>
      {!!text2 && <Text style={styles.subtitle}>{text2}</Text>}
    </View>
  ),
  info: ({ text1, text2 }: any) => (
    <View style={[styles.base, styles.info]}>
      <Text style={styles.title}>{text1 || ''}</Text>
      {!!text2 && <Text style={styles.subtitle}>{text2}</Text>}
    </View>
  ),
};

const styles = StyleSheet.create({
  base: {
    paddingVertical: 40,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 10,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
  },
  success: {
    backgroundColor: '#22C55E', // Tailwind green-500
  },
  error: {
    backgroundColor: '#EF4444', // Tailwind red-500
  },
  info: {
    backgroundColor: '#3B82F6', // Tailwind blue-500
  },
});
