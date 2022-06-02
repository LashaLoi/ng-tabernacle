import { supabase } from '../../supabase'

interface State {
  name: string
  email: string
  message: string
}

export const sendFeedback = (state: State) =>
  supabase.from('Feedback').insert(state).then(console.log)
