import './App.scss';
import { Navigate, Outlet, Route, Routes } from 'react-router';
// import { RenderErrorBoundary } from 'react-router/dist/lib/hooks';
import { Main } from './apps/main/Main';
import { Workers } from './apps/workers/Workers';
import { Header } from './apps/header/Header';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header/>}>
        <Route index element={<Main/>}/>
        <Route path='workers' element={<Workers/>}/>
        <Route path='*' element={<Navigate to={'/'}/>}/>
      </Route>
    </Routes>
    // <Outlet/>
  );
}

export default App;
