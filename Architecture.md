The frontend folder structure is bootstrapte with CRA(Create-react-app). It is working with a DDD (Domain driven design) folder structure.

Api - This folder contain all api instance configuration and connection

Assets - This folder contain all necessary asset for the projects (images, icons)

Components - This folder contain overview components that is used across in the whole project

Css - Styled component is used in this project and written along in each screen or component folder. The css global folder house global css configuration.

Hooks - This folder contain custom hooks that are written across each project.

routes - This is where our routs configuration is done - and PrivateRoute component.

views - The screen folder contain the view folder for the applicatio. e.g (Dashboard, Profile-screen). This can contain it own sub-component folder (components, hooks). This are just component particular to a screen and hooks particular to a screen and not used within other screens.

Shared - This contain the shared folder e.g (A11Y(Accessibility configuration), Seo(React-helmet config))

Utils - This house the utility and helper functions for the general codebase.

stores - This house the folder for managing the state-manager or context for the app
