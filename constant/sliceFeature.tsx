import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NumberDomain } from 'recharts/types/util/types';

interface FormProps {
  name: string;
  value: string;
}

interface Event {
  eventName: string;
  id: number;
  date: string;
  speaker: string;
  status: string;
  description: string;
}

interface initialStateProps {
  row: number;
  search: string;
  data: Event[];
  filtered_data: Event[];
  date: string;
  status: string;
  speaker: string;
  sorting: string;
  getId: string;
  isModalOpen: boolean;
  getModalData: Event[];
}

const initialState: initialStateProps = {
  row: 10,
  search: '',
  data: [],
  date: '',
  status: '',
  speaker: '',
  filtered_data: [],
  sorting: 'most recent',
  getId: '',
  isModalOpen: false,
  getModalData: [],
};

// { payload }: PayloadAction<Appointment[]>

const featureSlice = createSlice({
  name: 'slices',
  initialState,
  reducers: {
    changeTableRow: (state, { payload }: PayloadAction<number>) => {
      state.row = payload;
    },
    sortingData: (state, { payload }: PayloadAction<FormProps>) => {
      const { name, value } = payload;
      if (name === 'search') {
        state.search = value;
      } else if (name === 'date') {
        state.date = value;
      } else if (name === 'status') {
        state.status = value;
      } else if (name === 'speaker') {
        state.speaker = value;
      } else if (name === 'sorting') {
        state.sorting = value;
      }
    },

    fetchAndSort: (state, { payload }: PayloadAction<Event[]>) => {
      state.data = payload;
    },

    sortData: (state) => {
      const { data } = state;
      const { search, speaker, status, date, sorting } = state;
      let tempData: Event[] = [...data];
      if (search) {
        tempData = tempData.filter((item) => {
          return item.eventName.toLowerCase().includes(search.toLowerCase()); //startsWith or includes
        });
      }
      if (speaker) {
        tempData = tempData.filter((item) => {
          return item.speaker.toLowerCase() === speaker.toLowerCase();
        });
      }
      if (date) {
        tempData = tempData.filter((item) => {
          return item.date === date;
        });
      }
      if (status) {
        tempData = tempData.filter((item) => {
          return item.status === status;
        });
      }
      tempData.sort((a, b) => {
        const dateA = new Date(a.date).getTime(); // Convert to timestamp
        const dateB = new Date(b.date).getTime(); // Convert to timestamp

        if (sorting === 'most recent') {
          return (dateB - dateA) as number; // Descending order
        } else if (sorting === 'least recent') {
          return (dateA - dateB) as number; // Ascending order
        } else {
          return 0;
        }
      });
      state.filtered_data = tempData;
    },
    openModal: (state, { payload }: PayloadAction<number>) => {
      const modalData = state.data.filter((item) => item.id === payload);
      state.getModalData = modalData;
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const sliceReducers = featureSlice.reducer;
export const {
  changeTableRow,
  sortingData,
  fetchAndSort,
  sortData,
  openModal,
  closeModal,
} = featureSlice.actions;
