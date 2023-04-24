import { createSlice, nanoid } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    list: [],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.list.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.list.findIndex(
        contact => contact.id === action.payload
      );
      state.list.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage: storage,
};

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
