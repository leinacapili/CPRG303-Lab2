import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

function ToDoList({ tasks }) {
    return (
        <ScrollView>
                <Pressable>
                    <View style={[styles.task]}>
                        {tasks.map((item) => (<View key={item.task_id}><Text style={styles.list}>{item.task_name}</Text></View>))}
                    </View>
                </Pressable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
    taskText: {
        fontSize: 16,
    },
});

export default ToDoList;
