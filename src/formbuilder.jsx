import { useState, useEffect } from 'react';

// Zustand store implementation
const createStore = (initializer) => {
  let state = {};
  let listeners = [];
  
  const setState = (updater) => {
    const newState = typeof updater === 'function' ? updater(state) : updater;
    state = { ...state, ...newState };
    listeners.forEach(listener => listener(state));
  };

  const getState = () => state;
  
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  state = initializer(setState, getState);
  
  return {
    getState,
    setState,
    subscribe
  };
};

// User form store
const store = createStore((set) => ({
  formdata: {},
  formSchema: [],
  addFieldtoSchema: (field) => set((state) => ({
    formSchema: [...state.formSchema, { ...field, id: Date.now().toString() }]
  })),
  removeFieldFromSchema: (id) => set((state) => ({
    formSchema: state.formSchema.filter((field) => field.id !== id)
  })),
  updateFieldInSchema: (id, updatedField) => set((state) => ({
    formSchema: state.formSchema.map((field) =>
      field.id === id ? { ...field, ...updatedField } : field
    )
  })),
  updateFormData: (data) => set((state) => ({
    formdata: { ...state.formdata, ...data }
  })),
  resetFormData: () => set(() => ({
    formdata: {}
  })),
  resetFormSchema: () => set(() => ({
    formSchema: []
  }))
}));

export default createStore