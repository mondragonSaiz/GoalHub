import React, { useState } from 'react';

const ChangePasswordModal = ({ onClose }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangePassword = () => {
    // Validate old and new passwords here
    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    // Send a request to change the password to the server
    // You can use a mutation or API call here

    // Close the modal
    onClose();
  };

  return (
    <div> 
      
    </div>
    // Render your modal content here with input fields for old password, new password, and confirm password
  );
};

export default ChangePasswordModal;