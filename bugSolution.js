```javascript
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const MyComponent = () => {
  const [myVariable, setMyVariable] = useState(null); // Initialize with null

  useEffect(() => {
    setTimeout(() => {
      setMyVariable('Hello');
    }, 1000);
  }, []);

  return (
    <View>
      {/* Conditional rendering: only render if myVariable is defined */}
      {myVariable ? (
        <Text>{myVariable}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default MyComponent;
```