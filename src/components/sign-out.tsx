import { useLogto } from '@logto/react'

const SignOut = () => {
  const { signOut } = useLogto()

  return (
    <button onClick={() => signOut('http://localhost:5173')}>Sign out</button>
  )
}

export default SignOut
