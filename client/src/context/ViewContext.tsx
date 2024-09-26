import ChatsView from "@/components/sidebar/sidebar-views/ChatsView"
import UsersView from "@/components/sidebar/sidebar-views/UsersView"
import useWindowDimensions from "@/hooks/useWindowDimensions"
import { VIEWS, ViewContext as ViewContextType } from "@/types/view"
import { ReactNode, createContext, useContext, useState } from "react"
import { PiChats, PiUsers } from "react-icons/pi"

const ViewContext = createContext<ViewContextType | null>(null)

export const useViews = (): ViewContextType => {
    const context = useContext(ViewContext)
    if (!context) {
        throw new Error("useViews must be used within a ViewContextProvider")
    }
    return context
}

function ViewContextProvider({ children }: { children: ReactNode }) {
    const { isMobile } = useWindowDimensions()
    const [activeView, setActiveView] = useState<VIEWS>(VIEWS.CHATS)
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(!isMobile)
    const [viewComponents] = useState({
        [VIEWS.CLIENTS]: <UsersView />,
        [VIEWS.CHATS]: <ChatsView />,
    })
    const [viewIcons] = useState({
        [VIEWS.CLIENTS]: <PiUsers size={30} />,
        [VIEWS.CHATS]: <PiChats size={30} />,
    })

    return (
        <ViewContext.Provider
            value={{
                activeView,
                setActiveView,
                isSidebarOpen,
                setIsSidebarOpen,
                viewComponents,
                viewIcons,
            }}
        >
            {children}
        </ViewContext.Provider>
    )
}

export { ViewContextProvider }
export default ViewContext
