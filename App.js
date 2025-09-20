import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function App() {
  // Chat State
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hi! How can i help you?', sender: 'other' },
    { id: '2', text: 'Hello', sender: 'me' },
    { id: '3', text: 'What do you want?', sender: 'other' },
  ]);
  const [input, setInput] = useState('');

  // Comments State
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  // Send Chat Message
  const sendMessage = () => {
    if (input.trim() === '') return;

    const newMessage = {
      id: Date.now().toString(),
      text: input,
      sender: 'me',
    };

    setMessages([...messages, newMessage]);
    setInput('');
  };

  // Add Comment
  const addComment = () => {
    if (newComment.trim() === '') return;

    const comment = {
      id: Date.now().toString(),
      text: newComment,
    };

    setComments([...comments, comment]);
    setNewComment('');
  };

  // Render Chat Message
  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.message,
        item.sender === 'me' ? styles.myMessage : styles.otherMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  // Render Comment
  const renderComment = ({ item }) => (
    <View style={styles.commentBubble}>
      <Text style={styles.commentText}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollArea} contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Chat Section */}
        <Text style={styles.sectionTitle}>Chat</Text>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          style={styles.flatList}
          scrollEnabled={false}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            value={input}
            onChangeText={setInput}
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
        </View>

        {/* Comment Section */}
        <Text style={styles.sectionTitle}>Comments</Text>
        <FlatList
          data={comments}
          keyExtractor={(item) => item.id}
          renderItem={renderComment}
          style={styles.flatList}
          scrollEnabled={false}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add a comment..."
            value={newComment}
            onChangeText={setNewComment}
          />
          <TouchableOpacity style={styles.sendButton} onPress={addComment}>
            <Text style={styles.sendText}>Post</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
  scrollArea: {
    flex: 1,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: 'lightgreen',
    alignSelf: 'center',
  },
  flatList: {
    flexGrow: 0,
  },
  message: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: '70%',
    backgroundColor: 'Blue',
  },
  myMessage: {
    backgroundColor: 'yellow',
    alignSelf: 'flex-end',
  },
  otherMessage: {
    backgroundColor: 'yellow',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'column',
    paddingVertical: 10,
    alignItems: 'center',
    
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: 'Light Blue',
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    borderRadius: 20,
  },
  sendText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  commentBubble: {
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    alignSelf: 'center',
    maxWidth: '90%',
  },
  commentText: {
    fontSize: 16,
    color: '#333',
    
  },
});