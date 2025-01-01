import React from 'react'

export const userDataContext = React.createContext()

function userContext({ children }) {

  const [user, setUser] = React.useState({
    fullname: 'test test',
    email: 'exampl@gmail.com',
    isCaptain: false,
    isUser: true,
    isLogged: false,
    token: 'token',
  })

  return (
    <div>
      <userDataContext.Provider value={user}>
        {children}
      </userDataContext.Provider>
    </div>
  )
}

export default userContext
