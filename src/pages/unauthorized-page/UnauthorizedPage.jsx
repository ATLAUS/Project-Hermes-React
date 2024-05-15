import './UnauthorizedPage.scss'
import { LoginButton } from '../../components'
import LockPersonIcon from '@mui/icons-material/LockPerson';import { WidthNormal } from '@mui/icons-material';




export const UnauthorizedPage = () => {
  return (
    <>
      <main>
        <div className='unauthorized-container'>
          <div className='message-container'>
            <h1 className='unauthorized-title'>401</h1>
            <LockPersonIcon className='401-icon' sx={{ fontSize: 80}}/>
            <h2 className='unauthorized-message'>Unauthorized!</h2>
            <div className='vertical-divider'>
            </div>
            <p className='unauthorized-login'>Please log in</p>
            <LoginButton />
          </div>
        </div>
        
      </main>
    </>
  )
}
