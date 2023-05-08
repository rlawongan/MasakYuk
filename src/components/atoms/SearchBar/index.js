import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';

const SearchBar = ({placeholder, placeholderTextColor}) => {
  return (
    <View style={styles.searchInputWrapper}>
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchInputWrapper: {
    marginTop: 15,
    paddingHorizontal: 18,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#9EADBA',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
  },
});
