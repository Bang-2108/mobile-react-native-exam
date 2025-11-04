import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

interface Student {
    id: number,
    name: string,
    age: number,
    grade: number,
}

const Students: Student[] = [
    { id: 1, name: 'Nguyễn Văn A', age: 20, grade: 7.5 },
    { id: 2, name: 'Trần Thị B', age: 20, grade: 8.7 },
    { id: 3, name: 'Lê Văn C', age: 22, grade: 9.1 },
    { id: 4, name: 'Phạm Thị D', age: 18, grade: 6.9 },
    { id: 5, name: 'Hoàng Văn E', age: 21, grade: 8.0 },
]

const ArrayPractice = () => {
    const [students, setStudents] = useState<Student[]>(Students);
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [grade, setGrade] = useState('')

    const [editingID, setEditingId] = useState<number |null>(null);

    
    const handleDelete = (id: number) => {
        console.log('Xoá học sinh có id: ${id}');
        console.log(`Xóa học sinh có ID: ${id}`);
    }
    const handleEdit = (id: number) => {

    }
 
    const renderItem = ({ item, index }: { item: Student, index: number }) => (
        <View style={styles.row}>
            <Text style={[styles.cell, { flex: 0.5, textAlign: 'center' }]}>{index + 1}</Text>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.age}</Text>
            <Text style={styles.cell}>{item.grade.toFixed(1)}</Text>

            {/* <View style={styles.actionCell}>
                <TouchableOpacity 
                    style={[styles.actionButton, styles.editButton]}
                    onPress={() => handleEdit(item.id)}
                >
                    <Text style={styles.actionText}>Sửa</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.actionButton, styles.deleteButton]}
                    onPress={() => handleDelete(item.id)}
                >
                    <Text style={styles.actionText}>Xóa</Text>
                </TouchableOpacity>
            </View> */}
            <View>
                <TouchableOpacity onPress={()=>handleEdit(item.id)}>
                    <Text>Sửa</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>handleDelete(item.id)}>
                    <Text>Xoá</Text>
                </TouchableOpacity>
            </View>
        </View>
       
    )

    
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Quản lý danh sách Học Sinh </Text>
            <TextInput style={styles.input} placeholder='Tìm kiếm học sinh'></TextInput>
            <TextInput style={styles.input} placeholder='Nhập tên học sinh'></TextInput>
            <TextInput style={styles.input} placeholder='Nhập tuổi học sinh'></TextInput>
            <TextInput style={styles.input} placeholder='Nhập điểm học sinh'></TextInput>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.textbutton}>Thêm học sinh</Text>
            </TouchableOpacity>
            {/* <View>
        <Text>Danh sách học sinh</Text>
      </View> */}
            <View style={[styles.row, styles.headerRow]}>
                <Text style={[styles.cell, { flex: 0.5, fontWeight: 'bold', textAlign: 'center' }]}>STT</Text>
                <Text style={[styles.cell, { fontWeight: 'bold' }]}>Tên</Text>
                <Text style={[styles.cell, { fontWeight: 'bold' }]}>Tuổi</Text>
                <Text style={[styles.cell, { fontWeight: 'bold' }]}>Điểm</Text>
                <Text style={[styles.cell, { fontWeight: 'bold' }]}>Chức năng</Text>
            </View>



            <FlatList
                data={students}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />



            {/* Hiển thị danh sách học sinh không dùng FlatList */}
            {/* <View style={{ maxHeight: 300 }}>
                {students.map((student) => (
                    <View key={student.id} style={styles.row}>
                        <Text style={styles.cell}>{student.name}</Text>
                        <Text style={styles.cell}>{student.age}</Text>
                        <Text style={styles.cell}>{student.grade.toFixed(1)}</Text>
                    </View>
                ))}
            </View> */}
        </ScrollView>

    )
}

export default ArrayPractice

const styles = StyleSheet.create({
    container: {
        padding: 20,
        fontFamily: 'Roboto'
    },
    header: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FF8F8F',
        marginBottom: 15,
    },
    input: {
        borderWidth: 2,
        borderColor: '#F7A5A5',
        borderRadius: 5,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#FF8F8F',
        padding: 15,
        textAlign: 'center',
        borderRadius: 5,
    },
    textbutton: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        paddingVertical: 8,
    },
    headerRow: {
        backgroundColor: '#eee',
        paddingVertical: 10,
    },
    cell: {
        flex: 1,
        textAlign: 'center',
    },
    actionCell: {

    },
    actionButton: {

    },
    editButton: {

    },
    actionText: {

    },
    deleteButton: {

    }

})