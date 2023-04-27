import { RoutesAuth } from "./auth/routes/RoutesAuth"
import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme"


export const JournalApp = () => {
    return (
        <>
            {/* <RoutesAuth/> */}
            <AppTheme>
                <AppRouter />
            </AppTheme>

        </>
    )
}
