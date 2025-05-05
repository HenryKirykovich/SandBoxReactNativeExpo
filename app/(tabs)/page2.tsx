import { Box, Text, Button } from '@gluestack-ui/themed';
import React, { useState } from 'react';
import MyInput from '@/components/ui/MyInput';

export default function Page2() {
  const [getter, setter] = useState('');
  const [getAdd, setAdd] = useState<string[]>([]);
  const [showList, setShowList] = useState(false); // 👈 новое состояние

  return (
    <Box flex={1} justifyContent="center" alignItems="center" bg="$blue100">
      <Text color="$black" size="lg" fontWeight="$bold">
        Hello from Page 2!
      </Text>

      <Box width="80%" alignItems="center" bg="$main" p={4} borderRadius={8}>
        <MyInput
          label="First Name:"
          value={getter}
          onChangeText={setter}
          placeholder="Enter your username"
          helperText="Don't use special characters"
          iconName="person"
        />
      </Box>

      <Button
        mt="$4"
        onPress={() => {
          if (getter.trim() !== '') {
            setAdd((prevItems) => [...prevItems, getter.trim()]);
            setter('');
            alert('Successfully added');
            setShowList(false); // 👈 прячем список до нажатия Retrieve
          }
        }}
      >
        Add
      </Button>

      <Button
        mt="$2"
        onPress={() => {
          if (getAdd.length > 0) {
            setShowList(true); // 👈 теперь показываем список
          } else {
            alert('No items to retrieve');
          }
        }}
      >
        <Text>Retrieve</Text>
      </Button>

      {/* 👇 Список показывается только если showList === true */}
      {showList && (
        <Box mt="$6" width="80%" alignItems="flex-start">
          {getAdd.map((item, index) => (
            <Text key={index} color="$black" size="md">
              {index + 1}. {item}
            </Text>
          ))}
        </Box>
      )}
    </Box>
  );
}
