import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert,} from 'react-native';

type Contact = {
  id: number;
  name: string;
  phone: string;
};

const Array = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    { id: 1, name: 'Linh', phone: '0889333444' },
    { id: 2, name: 'Hung', phone: '0368953708' },
    { id: 3, name: 'Thanh', phone: '096753578' },
  ]);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [search, setSearch] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleAddOrUpdate = () => {
    if (!name || !phone) return Alert.alert('Vui lòng nhập tên và số điện thoại!');
    if (editingId !== null) {
      setContacts(
        contacts.map(c =>
          c.id === editingId ? { ...c, name, phone } : c
        )
      );
      setEditingId(null);
    } else {
      const newContact: Contact = {
        id: Date.now(),
        name,
        phone,
      };
      setContacts([...contacts, newContact]);
    }
    setName('');
    setPhone('');
  };

  const handleEdit = (contact: Contact) => {
    setName(contact.name);
    setPhone(contact.phone);
    setEditingId(contact.id);
  };

  const handleDelete = (id: number) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  const filteredContacts = contacts.filter(
    c =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search)
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📒 Danh Bạ Cute</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập tên"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại"
        keyboardType="default"
        value={phone}
        onChangeText={setPhone}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAddOrUpdate}
      >
        <Text style={styles.addButtonText}>
          {editingId ? '💾 LƯU' : 'THÊM'}
        </Text>
      </TouchableOpacity>

      <TextInput
        style={styles.searchInput}
        placeholder="🔍 Tìm kiếm..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredContacts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.contactCard}>
            <Text style={styles.contactText}>👤 {item.name} - {item.phone}</Text>
            <View style={styles.actionButtons}>
              <TouchableOpacity onPress={() => handleEdit(item)}>
                <Text style={styles.icon}>✏️</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Text style={styles.icon}>🗑️</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Array;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff7fbff',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#CC66DA',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CC66DA',
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#CC66DA',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CC66DA',
    padding: 10,
    marginBottom: 15,
  },
  contactCard: {
    backgroundColor: '#f3ecf4ff',
    padding: 12,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  contactText: {
    fontSize: 16,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  icon: {
    fontSize: 18,
  },
});