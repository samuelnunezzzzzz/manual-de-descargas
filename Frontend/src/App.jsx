import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Home from "./componentes/home";
import SobreNosotros from "./componentes/sobrenosotros";
import Login from "./componentes/login";
import Registro from "./componentes/registro";
import Contactanos from "./componentes/contacto";
import PrivacyPolicy from "./componentes/politicaprivacidad";
import TermsConditions from "./componentes/terminosycondiciones";
import RecuperarContrasena from "./componentes/recuperar";

// Componentes médico
import LayoutMedico from "./componentesm/LayoutMedico";
import DashboardMedico from "./componentesm/DashboardMedico";
import CitasMedico from "./componentesm/citas";
import PacientesMedico from "./componentesm/pacientes";
import HistorialMedico from "./componentesm/historial";
import AjustesMedico from "./componentesm/ajustes";

// Componente de ruta protegida
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

// Ruta específica para médicos
const MedicoRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  if (user.id_rol !== 2) { // 2 = médico
    return <Navigate to="/" />;
  }
  
  return children;
};

function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Rutas PÚBLICAS */}
      <Route path="/" element={<Home />} />
      <Route path="/sobrenosotros" element={<SobreNosotros />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/contacto" element={<Contactanos />} />
      <Route path="/politicaprivacidad" element={<PrivacyPolicy />} />
      <Route path="/terminosycondiciones" element={<TermsConditions />} />
      <Route path="/recuperar" element={<RecuperarContrasena />} />

      {/* Rutas PROTEGIDAS del MÉDICO */}
      <Route path="/medico" element={
        <MedicoRoute>
          <LayoutMedico>
            <DashboardMedico />
          </LayoutMedico>
        </MedicoRoute>
      } />
      
      <Route path="/medico/citas" element={
        <MedicoRoute>
          <LayoutMedico>
            <CitasMedico />
          </LayoutMedico>
        </MedicoRoute>
      } />
      
      <Route path="/medico/pacientes" element={
        <MedicoRoute>
          <LayoutMedico>
            <PacientesMedico />
          </LayoutMedico>
        </MedicoRoute>
      } />
      
      <Route path="/medico/historial" element={
        <MedicoRoute>
          <LayoutMedico>
            <HistorialMedico />
          </LayoutMedico>
        </MedicoRoute>
      } />
      
      <Route path="/medico/ajustes" element={
        <MedicoRoute>
          <LayoutMedico>
            <AjustesMedico />
          </LayoutMedico>
        </MedicoRoute>
      } />

      {/* Redirecciones para mantener compatibilidad */}
      <Route path="/homem" element={<Navigate to="/medico" />} />
      <Route path="/citas" element={<Navigate to="/medico/citas" />} />
      <Route path="/usuarios" element={<Navigate to="/medico/pacientes" />} />
      <Route path="/ajustes" element={<Navigate to="/medico/ajustes" />} />

      {/* Ruta por defecto para usuarios autenticados */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          {user?.id_rol === 2 ? 
            <Navigate to="/medico" /> : 
            <Navigate to="/" />
          }
        </ProtectedRoute>
      } />

      {/* Ruta 404 */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}