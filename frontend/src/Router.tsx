import { Routes, Route } from 'react-router-dom';
import { Default } from './layouts/Default';
import { Customer } from './pages/Customer';
import { CustomersList } from './pages/CustomersList';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { Project } from './pages/Project';
import { ProjectsList } from './pages/ProjectsList';
import { UnitsList } from './pages/UnitsList';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customers" element={<CustomersList />} />
        <Route path="/customer/:id" element={<Customer />} />
        <Route path="/units/:customer" element={<UnitsList />} />
        <Route path="/projects" element={<ProjectsList />} />
        <Route path="/project/:id" element={<Project />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
