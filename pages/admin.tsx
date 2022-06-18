import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Users } from '../modules/admin'

import { PrimaryButton } from '../components/buttons'
import { Input } from '../components/input'
import { useComplexState } from '../hooks/useComplexState'
import { supabase } from '../supabase'
import { useLocalStorage } from '../modules/registration/hooks'

const availableEmails = ['lashaloi1409@gmail.com', 'esthervoronenko@gmail.com']
const adminPassword = 'av2022skinia'

export default function Admin({ users }: any) {
  const [loading, setLoading] = useState(false)
  const [isLogged, setIsLogged] = useLocalStorage('isLogged', false)
  const [{ email, password, error }, setState] = useComplexState({
    email: '',
    password: '',
    error: '',
  })

  useEffect(() => {
    setLoading(true)
  }, [])

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    if (!availableEmails.includes(email.toLocaleLowerCase())) {
      setState({ error: 'У вас нет прав на вход' })

      return
    }

    setState({ error: '' })

    if (password !== adminPassword) {
      setState({ error: 'Неверный логин или пароль' })

      return
    }

    setState({
      email: '',
      password: '',
    })
    setIsLogged(true)
  }

  if (!loading) return null

  if (isLogged) {
    return <Users users={users} />
  }

  return (
    <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
              Войти
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Сюда заходят только избранные
            </p>
          </div>
          <div className="m-7">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Почта
                </label>
                <Input
                  value={email}
                  onChange={({ target: { value } }) =>
                    setState({ email: value })
                  }
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                />
              </div>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    Пароль
                  </label>
                </div>
                <Input
                  value={password}
                  onChange={({ target: { value } }) =>
                    setState({ password: value })
                  }
                  type="password"
                  name="password"
                  id="password"
                  placeholder="strongpassword"
                />
              </div>
              {!!error && <p className="mb-2 text-red-400">{error}</p>}
              <div className="mb-6">
                <PrimaryButton>Войти</PrimaryButton>
              </div>
              <p className="text-sm text-center text-gray-400">
                Не знаете что тут делаете? Переходите на{' '}
                <Link href="/" passHref>
                  <a className="text-indigo-900 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">
                    Главная
                  </a>
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const { data: users } = await supabase.from('User').select()

  return {
    props: {
      users,
    },
  }
}
