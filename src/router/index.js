import { useRoutes } from "react-router-dom";
import { APP_ROUTES } from "../constants/routes";
import Layout from "../layout";
import HomePage from "../pages/home";
import ContactPage from "../pages/contact";
import OrganizingCommitteePage from "../pages/committees/organizing";
import ProgramCommitteesPage from "../pages/committees/program";
import NotFoundPage from "../pages/not_found_page";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { useLocation } from "react-router-dom";

export const routes = [
    {
        element: <Layout />,
        isPrivate: false,
        children: [
            {
                title:
                    "SOICT 2023 - THE 12TH INTERNATIONAL SYMPOSIUM ON INFORMATION AND COMMUNICATION TECHNOLOGY",
                sectionTitle: "WELCOME TO SOICT 2023",
                path: APP_ROUTES.HOME,
                element: <HomePage />,
            },
            {
                title: "Organizing Committee - SOICT 2023",
                sectionTitle: "Organizing Committee",
                path: APP_ROUTES.ORGANIZING_COMMITTEE,
                element: <OrganizingCommitteePage />,
            },
            {
                title: "Program Committees - SOICT 2023",
                sectionTitle: "Program Committees",
                path: APP_ROUTES.PROGRAM_COMMITTEES,
                element: <ProgramCommitteesPage />,
            },
            {
                title: "Contact - SOICT 2023",
                path: APP_ROUTES.CONTACT,
                element: <ContactPage />,
            },
        ],
    },
    {
        path: "*",
        element: NotFoundPage,
        is404: true,
    },
];
// .map(route => {
//     if (route.isPrivate) {
//         return {
//             ...route,
//             element: (<PrivateRoute>{route.element}</PrivateRoute>)
//         }
//     }

//     return {
//         ...route,
//         element: (<PublicRoute>{route.element}</PublicRoute>)
//     }
// });

export default function AppRouter() {
    const location = useLocation();
    const filteredRoutes = routes
        .filter((route) => route.is404 || !route.isPrivate)
        .map((route) => {
            const currentPage = route.children
                ? route.children.find((r) => r.path === location.pathname)
                : null;

            if (route.isPrivate) {
                return {
                    ...route,
                    element: (
                        <PrivateRoute
                            title={currentPage?.title || ""}
                            sectionTitle={currentPage?.sectionTitle}
                        >
                            {route.element}
                        </PrivateRoute>
                    ),
                };
            }

            return {
                ...route,
                element: (
                    <PublicRoute
                        title={currentPage?.title || ""}
                        sectionTitle={currentPage?.sectionTitle}
                    >
                        {route.element}
                    </PublicRoute>
                ),
            };
        });
    return useRoutes(filteredRoutes);
}
