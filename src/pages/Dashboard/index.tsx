import React from 'react';

import { View } from 'react-native';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { logout } = useAuth();
  return (
    <View>
      <Button onPress={logout}>Logoff</Button>
    </View>
  );
};

export default Dashboard;
