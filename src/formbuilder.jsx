import { create } from 'zustand';

const userFormStore = create(
    (set) => ({
        formdata: {},
        formSchema: [],
        addFieldtoSchema: (field) => set(
            (state) => ({
         formSchema: [...state.formSchema, { ...field, id: Date.now().toString() }]
            })
        ),
        removeFieldFromSchema: (id) => set(
            (state) => ({
                formSchema: state.formSchema.filter((field) => field.id !== id)
            })
        ),
        updateFieldInSchema: (id, updatedField) => set(
            (state) => ({
                formSchema: state.formSchema.map((field) =>
                    field.id === id ? { ...field, ...updatedField } : field
                )
            })
        ),
        updateFormData: (data) => set(
            (state) => ({
                formdata: { ...state.formdata, ...data }
            })
        ),
        resetFormData: () => set(
            () => ({
                formdata: {}
            })
        ),
        resetFormSchema: () => set(
            () => ({
                formSchema: []
            })
        )
    })
)