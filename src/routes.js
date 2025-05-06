import Main_page from "./pages/main_page";
import Table_page from "./pages/table_page";
import { MAIN_ROUTE, TABLE_ROUTE } from "./utils/consts";

export const publicRoutes =[
    {
        path: MAIN_ROUTE,
        Component: Main_page 
    },
    {
        path: TABLE_ROUTE,
        Component: Table_page 
    }
]