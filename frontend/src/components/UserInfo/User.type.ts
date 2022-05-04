import { Dispatch, SetStateAction } from 'react';

export interface ProfileEditor {
  isEditingMode: boolean;
  setEditingMode: Dispatch<SetStateAction<boolean>>;
}
