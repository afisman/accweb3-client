import React, { useContext, createContext } from 'react';

import { useAddress, useContract, useMetamask, useContractWrite, useDisconnect, useConnectionStatus } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {



    const address = useAddress();
    const connect = useMetamask();
    const disconnect = useDisconnect();

    const connectionStatus = useConnectionStatus()




    return <StateContext.Provider
        value={{
            address,
            connect,
            disconnect,
            connectionStatus,

        }}
    >
        {children}
    </StateContext.Provider>
}

export const useStateContext = () => useContext(StateContext)