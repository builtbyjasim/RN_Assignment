import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLOR } from '../../misc';

export type Item = {
  id: string;
  name: string;
};

interface Props {
  item?: Item;
  deleteUser?: (id: string) => void;
}

const ItemCard: React.FC<Props> = ({ item, deleteUser }) => {
  if (!item) return null;

  const { id, name } = item || {};

  return (
    <View style={styles.container}>
      <View style={styles.itemsCont}>
        <Text style={styles.nameString}>{name}</Text>
        <Text style={styles.idString}>{id}</Text>
      </View>

      {/* delete button */}
      <Pressable style={styles.deleteBtnStyle} onPress={() => deleteUser?.(id)}>
        <Text style={styles.deleteBtnString}>Delete</Text>
      </Pressable>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.surface,
    marginHorizontal: 12,
    padding: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
    shadowColor: COLOR.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  itemsCont: {
    flex: 1,
    rowGap: 2,
  },
  deleteBtnStyle: {
    backgroundColor: COLOR.error,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteBtnString: {
    fontSize: 12,
    fontWeight: '500',
    color: COLOR.background,
    includeFontPadding: false,
  },
  nameString: {
    fontSize: 12,
    fontWeight: '600',
    color: COLOR.textPrimary,
    includeFontPadding: false,
  },
  idString: {
    fontSize: 12,
    fontWeight: '400',
    color: COLOR.textSecondary,
    includeFontPadding: false,
  },
});
