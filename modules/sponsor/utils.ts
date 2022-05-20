import { supabase } from '../../supabase'
import { State } from '../registration'

export const parseData = (state: State) => ({
  full_name: state[1]?.value ?? '-',
  email: state[2]?.value ?? '-',
  phone: state[3]?.value ?? '-',
  price: state[4]?.value ?? '-',
  message: state[5]?.value ?? '-',
})

export const addSponsor = (state: State) =>
  supabase.from('Sponsor').insert(parseData(state))
// .then(console.log)
