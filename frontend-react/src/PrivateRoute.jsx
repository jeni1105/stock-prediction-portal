import {useContext} from 'react'
import { AuthContext } from './components/AuthProvider'

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext)
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" />
  )

}

export default PrivateRoute