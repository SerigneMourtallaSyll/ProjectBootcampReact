import React from 'react'
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtoolsPanel } from 'react-query/devtools'
// import App from './App.jsx';
import { createBrowserRouter, Link, RouterProvider, Outlet } from 'react-router-dom';
// import Article from '../src/Les composants/Article.jsx';
// import PageErreur from '../src/Les composants/PageErreur.jsx';
// import Contact from '../src/Les composants/Contact.jsx';
// import Emploi from '../src/Les composants/Emploi.jsx';
// import Erreur404 from './Les composants/Erreur404.jsx';
// import Blog from './Les composants/Blog.jsx';
// import Proteger from './Les composants/Proteger.jsx';
import Dashboard from '../src/Pages/dashboard/Dashboard.jsx';
import Connexion from '../src/Pages/connexion/Connexion.jsx';
import Inscription from '../src/Pages/inscription/Inscription.jsx'
import MyApp from './MyApp.jsx';
// const route = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <PageErreur />
//   },
//   {
//     path: "propos",
//     element: (
//       <Proteger estConnecte={false}>
//       <>
//         <h1>A propos</h1>
//         <p>je suis un paragraphe</p>
//         <Link to="/">Retour à l'acceuil</Link>
//         <div style={{display: "flex", gap: "10px"}}>
//           <Link to="/propos/contact">Contact</Link>
//           <Link to="/propos/emploi">Emploi</Link>
//         </div>
//         <div>
//           <Outlet />
//         </div>
//       </>
//       </Proteger>
//       ),
//     children: [
//       {
//         path: "/propos/contact",
//         element: <Contact />
//       },
//       {
//         path: "/propos/emploi",
//         element: <Emploi />
//       }
//     ]
//   },
//   {
//     path: "/blog",
//     element: <Proteger>
//       <Blog />
//     </Proteger>
//   },
//   {
//     path: "blog",
//     element: 
//       <>
//         <h2>Liste des articles</h2>
//         <Link to="/blog/200">Article 11</Link>
//       </>  
    
//   },
//   {
//     path: "blog/:id",
//     element: <Article />
//   },
//   {
//     path: "*",
//     element: <Erreur404 />
//   }
// ])
const queryClient = new QueryClient();
const route = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "/connexion",
    element: <Connexion />
  },
  {
    path: "/inscription",
    element: <Inscription />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <RouterProvider router={route}>
      </RouterProvider>
      {/*<ReactQueryDevtoolsPanel />*/}
    </QueryClientProvider>
  </React.StrictMode>,
)
