import { supabase } from '../../supabase'

interface State {
  fullName: string
  message: string
}

export const parseData = (state: State) => ({
  full_name: state.fullName,
  message: state.message,
})

export const addQuestion = (state: State) =>
  supabase.from('Questions').insert(parseData(state)).then(console.log)
