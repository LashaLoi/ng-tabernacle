import { supabase } from '../../supabase'
import { State } from '../registration'

export const parseData = (state: State) => ({
  full_name: state[0]?.value ?? '-',
  email: state[1]?.value ?? '-',
  phone: state[2]?.value ?? '-',
  price: state[3]?.value ?? '-',
  message: state[4]?.value ?? '-',
})

export const addSponsor = (state: State) =>
  supabase.from('Sponsor').insert(parseData(state)).then(console.log)
