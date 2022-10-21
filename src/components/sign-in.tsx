import { useLogto, UserInfoResponse } from '@logto/react'
import { useEffect, useState } from 'react'

const SignIn = () => {
  const [user, setUser] = useState<UserInfoResponse | undefined>(undefined)
  const { signIn, isAuthenticated, fetchUserInfo } = useLogto()

  useEffect(() => {
    fetchUserInfo().then((userInfo) => setUser(userInfo))
  }, [isAuthenticated])

  if (isAuthenticated) {
    return (
      <div>
        User <b>{user?.username}</b>
      </div>
    )
  }

  return (
    <button onClick={() => signIn('http://localhost:5173/callback')}>
      Sign In
    </button>
  )
}

export default SignIn
