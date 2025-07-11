import{
  createBrowserRouter,
  RouterProvider,
}from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPages'
import ArticlePage from './pages/ArticlePage'
import ArticleList from './pages/ArticlesList'
import Layout from './Layout'


const routes = [{
  path:'/',
  element:<Layout/>,  
  children: [{
    path:'/',
    element: <HomePage/>
  },{
    path:'/about',
    element: <AboutPage/>
  },{
    path:'/articles',
    element: <ArticleList/>
  },{
    path:'/articles/individual',
    element: <ArticlePage/>
  }]
}]

const router = createBrowserRouter(routes)

function App() {
  return (
    <>
    <RouterProvider router= {router}/>
    </>
  );
}

export default App
