import {
  Alert,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLOR } from '../../../misc';
import { EmptyCard, ItemCard } from '../../components';

interface Data {
  id: string;
  name: string;
}

const HomeScreen = () => {
  const [data, setData] = useState<Data[]>([]);
  const [input, setInput] = useState<string>('');

  const insets = useSafeAreaInsets();
  const styles = getStyles(insets);

  const _handleAddItem = () => {
    if (input.length === 0 || !input.trim()) {
      Alert.alert('Error', 'Name is required');
      return;
    }
    const newId = Date.now();
    const newItem: Data = { id: newId.toString(), name: input };
    setData(prev => [...prev, newItem]);
    setInput('');
  };

  const _handleDelete = (id: string) => {
    if (!id) return;
    const updated = data.filter(item => item.id != id);
    setData(updated);
  };

  return (
    <View style={styles.container}>
      {/* input & add button */}
      <View style={styles.headerCont}>
        <TextInput
          value={input}
          onChangeText={str => setInput(str)}
          style={styles.inputStyle}
          placeholder="Type name to add"
          placeholderTextColor={COLOR.placeholder}
          autoCapitalize="words"
          autoCorrect={false}
        />
        <TouchableOpacity onPress={_handleAddItem} style={styles.addBtnStyle}>
          <Text style={styles.addBtnString}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* lists */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ItemCard item={item} deleteUser={_handleDelete} />
        )}
        keyExtractor={(item, index) => `${item?.id}-${index}`}
        contentContainerStyle={{ gap: 8 }}
        ListEmptyComponent={() => <EmptyCard />}
      />
    </View>
  );
};

export default HomeScreen;

const getStyles = (insets: EdgeInsets) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLOR.background,
      gap: 16,
    },

    headerCont: {
      backgroundColor: COLOR.primaryLight,
      paddingTop: Platform.OS === 'android' ? insets.top + 12 : insets.top,
      paddingBottom: 12,
      paddingHorizontal: 12,
      flexDirection: 'row',
      gap: 8,

      elevation: 5,
      shadowColor: COLOR.black,
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    inputStyle: {
      backgroundColor: COLOR.background,
      borderWidth: 1,
      borderColor: COLOR.primary,
      flex: 1,
      height: 40,
      paddingLeft: 12,
      borderRadius: 8,
      color: COLOR.textPrimary,
    },
    addBtnStyle: {
      backgroundColor: COLOR.primary,
      paddingHorizontal: 16,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    addBtnString: {
      fontSize: 14,
      fontWeight: '500',
      color: COLOR.background,
      includeFontPadding: false,
    },
  });
