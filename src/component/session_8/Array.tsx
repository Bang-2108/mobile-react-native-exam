import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform, Alert, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'

interface Student {
  id: number;
  name: string;
  age: number;
  grade: number;
}

const initialStudents: Student[] = [
  { id: 1, name: 'Nguyễn Văn A', age: 20, grade: 8.5 },
  { id: 2, name: 'Trần Thị B', age: 21, grade: 7.8 },
  { id: 3, name: 'Lê Văn C', age: 19, grade: 9.2 },
  { id: 4, name: 'Phạm Thị D', age: 20, grade: 6.7 },
  { id: 5, name: 'Hoàng Văn E', age: 22, grade: 8.0 },
];

const ArrayPractice = () => {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [filtered, setFiltered] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState(''); 

  const handleAddOrUpdate = () => {
    if (!name || !age || !grade) {
      Alert.alert('Thông báo', 'Vui lòng nhập đầy đủ thông tin học sinh!');
      return;
    }

    if (editingId !== null) {
      const updatedStudents = students.map((s) =>
        s.id === editingId ? { ...s, name, age: Number(age), grade: Number(grade) } : s
      );
      setStudents(updatedStudents);
      setEditingId(null);
      Alert.alert('✅ Thành công', 'Cập nhật học sinh thành công!');
    } else {
      const newStudent: Student = {
        id: students.length + 1,
        name: name.trim(),
        age: Number(age),
        grade: Number(grade),
      };
      setStudents([...students, newStudent]);
      Alert.alert('🎉 Thành công', 'Thêm học sinh mới thành công!');
    }

    setName('');
    setAge('');
    setGrade('');
  };

  const handleEdit = (student: Student) => {
    setName(student.name);
    setAge(student.age.toString());
    setGrade(student.grade.toString());
    setEditingId(student.id);
  };

  const handleDelete = (id: number) => {
    const student = students.find((s) => s.id === id);
    Alert.alert('Xác nhận xóa', `Bạn có chắc muốn xóa học sinh "${student?.name}" không?`, [
      { text: 'Hủy', style: 'cancel' },
      {
        text: 'Xóa',
        style: 'destructive',
        onPress: () => {
          const updatedList = students.filter((s) => s.id !== id);
          setStudents(updatedList);
          Alert.alert('🗑️ Đã xóa', 'Học sinh đã được xóa khỏi danh sách.');
        },
      },
    ]);
  };

  const handleSortByGrade = () => {
    const sorted = [...students].sort((a, b) => b.grade - a.grade);
    setStudents(sorted);
    Alert.alert('📊 Đã sắp xếp', 'Danh sách đã được sắp xếp theo điểm từ cao đến thấp!');
  };

  const handleFilterExcellent = () => {
    if (!filtered) {
      const filteredList = students.filter((s) => s.grade >= 8);
      setStudents(filteredList);
      setFiltered(true);
      Alert.alert('🌟 Lọc thành công', 'Đang hiển thị học sinh có điểm ≥ 8.');
    } else {
      setStudents(initialStudents);
      setFiltered(false);
      Alert.alert('↩️ Đã trở lại', 'Hiển thị toàn bộ danh sách học sinh.');
    }
  };

  // 🔍 Lọc danh sách theo tên nhập vào
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item, index }: any) => (
    <View style={styles.row}>
      <Text style={[styles.cell, { flex: 0.5 }]}>{index + 1}</Text>
      <Text style={[styles.cell, { flex: 2 }]}>{item.name}</Text>
      <Text style={[styles.cell, { flex: 1 }]}>{item.age}</Text>
      <Text style={[styles.cell, { flex: 1 }]}>{item.grade.toFixed(1)}</Text>

      <View style={[styles.cell, styles.actionCell, { flex: 1.5 }]}>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: '#FFD966' }]}
          onPress={() => handleEdit(item)}
        >
          <Text style={styles.actionText}>Sửa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: '#FF6F61' }]}
          onPress={() => handleDelete(item.id)}
        >
          <Text style={styles.actionText}>Xóa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView>
        <Text style={styles.header}>Quản lý danh sách Học Sinh</Text>

        <TextInput
          style={styles.searchInput}
          placeholder="🔍 Nhập tên học sinh để tìm kiếm..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nhập tên học sinh"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Nhập tuổi học sinh"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Nhập điểm học sinh"
            value={grade}
            onChangeText={setGrade}
            keyboardType="decimal-pad"
          />

          <TouchableOpacity style={styles.button} onPress={handleAddOrUpdate}>
            <Text style={styles.textbutton}>
              {editingId !== null ? 'Cập nhật học sinh' : 'Thêm học sinh'}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#6FA8DC', marginBottom: 8 }]}
          onPress={handleSortByGrade}
        >
          <Text style={styles.textbutton}>Sắp xếp theo điểm ↓</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#93C47D', marginBottom: 15 }]}
          onPress={handleFilterExcellent}
        >
          <Text style={styles.textbutton}>
            {filtered ? 'Hiển thị tất cả học sinh' : 'Lọc học sinh giỏi (≥8)'}
          </Text>
        </TouchableOpacity>

        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.cell, { flex: 0.5, fontWeight: 'bold' }]}>STT</Text>
          <Text style={[styles.cell, { flex: 2, fontWeight: 'bold' }]}>Tên</Text>
          <Text style={[styles.cell, { flex: 1, fontWeight: 'bold' }]}>Tuổi</Text>
          <Text style={[styles.cell, { flex: 1, fontWeight: 'bold' }]}>Điểm</Text>
          <Text style={[styles.cell, { flex: 1.5, fontWeight: 'bold' }]}>Chức năng</Text>
        </View>

        <FlatList
          data={filteredStudents}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ArrayPractice;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF5F5', padding: 20 },
  header: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF8F8F',
    marginBottom: 15,
  },
  searchInput: {
    borderWidth: 1.5,
    borderColor: '#F7A5A5',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: '#fff',
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#F7A5A5',
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#FF8F8F',
    padding: 12,
    borderRadius: 8,
    marginTop: 5,
  },
  textbutton: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingVertical: 8,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerRow: {
    backgroundColor: '#FFE8E8',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingVertical: 10,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    color: '#1A2A4F',
    fontSize: 14,
    paddingHorizontal: 4,
  },
  actionCell: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  actionButton: {
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 6,
    minWidth: 25,
    alignItems: 'center',
  },
  actionText: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
});
