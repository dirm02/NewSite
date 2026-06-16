/* eslint-disable @typescript-eslint/no-explicit-any */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AllRoutes from './feature-module/router/router';
import store from './core/data/redux/store';
import { base_path } from './environment';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import "../src/assets/style/icon/tabler-icons/webfont/tabler-icons.css";
import "../src/assets/style/icon/feather/css/iconfont.css";
import 'aos/dist/aos.css';
import '../src/assets/style/css/iconsax.css';
import '../src/assets/style/css/feather.css';
import './index.css';


if (window.location.pathname.includes("admin")) {
  import('./assets/style/admin/css/admin.css');
} else {
  import('./assets/style/scss/main.scss');
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Provider store={store}>
        <BrowserRouter basename={base_path}>  
          <AllRoutes />
        </BrowserRouter>
      </Provider>
  </StrictMode>
)