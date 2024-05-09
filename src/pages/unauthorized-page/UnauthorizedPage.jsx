import './UnauthorizedPage.scss'
import { LoginButton } from '../../components'



export const UnauthorizedPage = () => {
  return (
    <>
      <main>
        <div>
          <h1>404 Unauthorized!</h1>
          <LoginButton />
        </div>
      </main>
    </>
  )
}
