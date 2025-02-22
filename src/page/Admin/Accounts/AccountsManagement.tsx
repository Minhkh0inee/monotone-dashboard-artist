import React from 'react'
import styles from './styles.module.scss'
import TitlePage from '@/shared/components/titlePage/TitlePage'
import RedirectCard from '@/shared/admin/RedirectCard/RedirectCard'
import { Outlet, useLocation } from 'react-router-dom'
import useAccountStore from '@/store/useAccountStore'
import AccountsPopup from './AccountsPopup/AccountsPopup'
import AccountsPopupDelete from './AccountsPopupDelete/AccountsPopupDelete'
import { Toaster } from "@/components/ui/toaster"


const AccountListView = () => {
  return (
    <div className={styles['card-wrapper']}>
      <RedirectCard title={['Artist']} to='/label/accounts-management/artist'/>
      <RedirectCard title={['Music Label']} to='/label/accounts-management/music-label'/>
      <RedirectCard title={['Distributor']} to='/label/accounts-management/distributor'/>
      <RedirectCard title={['Advertiser']} to='/label/accounts-management/advertiser'/>
    </div>
  );
};

const AccountsManagement = () => {
  const location = useLocation();
  const isRootPath = location.pathname === '/label/accounts-management';
  const {_id, showPopup, setShowPopup,setId, showPopupDelete} = useAccountStore()

  const handleClosePopup = () => {
    setId(null)
    setShowPopup(false)
  }

  return (
    <div className={styles.container}>
      <TitlePage title={['Accounts', 'Management']}/>

        {isRootPath ? <AccountListView /> : <Outlet />}

        {/* {showPopup && <AccountsPopup accountId={_id} onClose={handleClosePopup}/>}
        {showPopupDelete && <AccountsPopupDelete/>} */}
        {/* <Toaster/> */}
    </div>
  )
}

export default AccountsManagement