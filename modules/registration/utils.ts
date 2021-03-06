import { State } from './index'

import { supabase } from '../../supabase'

export const createAnimation = (y: number) => ({
  initial: { y: -y, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -y, opacity: 0 },
  transition: { duration: 0.2, type: 'tween' },
})

export const parseData = (state: State) => {
  console.log(state)

  return {
    full_name: state[0]?.value ?? '-',
    birth_day: state[1]?.value ?? '-',
    city: state[2]?.value ?? '-',
    phone: state[3]?.value ?? '-',
    email: state[4]?.value ?? '-',
    church: state[5]?.value ?? '-',
    minimisty: state[6]?.value ?? '-',
    other_ministry: state[7]?.value ?? '-',
    days: state[8]?.value ?? '-',
    q_1: state[9]?.value ?? '-',
    q_2: state[10]?.value ?? '-',
    q_3: state[11]?.value ?? '-',
    q_4: '-',
    master_q: state[12]?.value ?? '-',
    certificate: state[13]?.value ?? '-',
    buy_undershirt: state[14]?.value ?? '-',
    but_shopper: state[15]?.value ?? '-',
  }
}

export const register = (state: State) =>
  supabase.from('User').insert(parseData(state)).then(console.log)
