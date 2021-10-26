
import {primaryColor, neutralColor} from "./colors"
import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white"
    },
    text:{
      primary: neutralColor
    }
    
  },
});

// export default  theme