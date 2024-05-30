import React, { useState } from 'react';
import OTPTemplate from '../../templates/OTPTemplate';
import TransferModal from '../../organisms/TransferModal';
const OtpTransfer : React.FC = () => {
  const [visible,setVisible] = useState(false);
  const [codeEntered,setCodeEntered] = useState(false);
  const handleSubmit =  () => {
    if(codeEntered)
      {setVisible(true);}
  };
  return (
    <>
      <OTPTemplate  title="OTP" actionOnSubmit={handleSubmit} codeEntered={codeEntered} setCodeEntered={setCodeEntered} />
      <TransferModal visible={visible} setVisible={setVisible} />
    </>
  );
};
export default OtpTransfer;

