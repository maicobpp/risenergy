import { Routes, Route } from 'react-router-dom';
import { Default } from './layouts/Default';
import { Customer } from './pages/Customer';
import { CustomersList } from './pages/CustomersList';
import { Dashboard } from './pages/Dashboard';
import { UnitsList } from './pages/UnitsList';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customers" element={<CustomersList />} />
        <Route path="/customer/:id" element={<Customer />} />
        <Route path="/units/:customer" element={<UnitsList />} />
      </Route>
    </Routes>
  );
}
