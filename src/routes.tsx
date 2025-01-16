import { RouteObject } from "react-router-dom";
import { HomePage } from "./Pages/Home/HomePage";
import { UserDetailsPage } from "./Pages/UserDetails/UserDetailsPage";
import { CompanyDetailsPage } from "./Pages/CompanyDetails/CompanyDetailsPage";
import { NotFoundPage } from "./Pages/NotFound/NotFoundPage";


export const routes: Array<RouteObject> = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/user",
        children: [
            {
                index: true,
                element: <NotFoundPage/>
            },
            {
                path: ":userId",
                element: <UserDetailsPage />
            }
        ],
    },
    {
        path: "/company",
        children: [
            {
                index: false,
            },
            {
                path: ":companyId",
                element: <CompanyDetailsPage />
            }
        ]
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
];

