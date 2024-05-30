import React, { useState } from 'react';
import OTPTemplate from '../../templates/OTPTemplate';
import { useNavigation, RouteProp, NavigationProp } from '@react-navigation/native';
import { AuthStackParamList } from './Auth';

type VerificationProps = {
  route: RouteProp<AuthStackParamList, 'verification'>;
};

const Verification: React.FC<VerificationProps> = ({ route }) => {
  const [codeEntered, setCodeEntered] = useState(false);
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

  const handleSubmit = () => {
    if(codeEntered)
      {navigation.navigate('SetPassword');}
  };

  return (
    <OTPTemplate
      title="Verification"
      number={route.params.phone}
      codeEntered={codeEntered}
      setCodeEntered={setCodeEntered}
      actionOnSubmit={handleSubmit}
      headerShown
    />
  );
};

export default Verification;
