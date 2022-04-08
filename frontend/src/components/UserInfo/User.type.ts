import { Dispatch, SetStateAction } from 'react';

export interface ProfileEditor {
  isEditing: boolean;
  setEditingMode: Dispatch<SetStateAction<boolean>>;
}
