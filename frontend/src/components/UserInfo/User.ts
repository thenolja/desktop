import { SetStateAction } from 'react';

export interface User {
  id: string | null;
  nickname: string | null;
  email: string | null;
  phone?: string | null;
}

export interface UserInfoType {
  user: User;
  handleEditingMode: (value: SetStateAction<boolean>) => void;
  isEditing?: boolean;
}
