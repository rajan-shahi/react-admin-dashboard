import { RouterProvider } from 'react-router-dom';
import '@smastrom/react-rating/style.css';

import { router } from 'router';

function App() {
  return (
    <div className="max-w-[1920px]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
