import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import Header from "./components/shared/Header/Header";

/*
function App() {
  return (
    <Box sx={{ width: 1, height: 1, bgcolor : '#ffffff' }}>
      <h1>RBM WEB</h1>  
    </Box>
  );
}
*/

function App() {
  return (
    <Box sx={{ width: 1, height: 1, bgcolor : '#ffffff' }}>
      <Header />
      <Box sx={{bgcolor : '#ffffff', m: 1, height: 1}}>
        <Box>
        </Box>   
      </Box>   
    </Box>
  );
}


export default App;
