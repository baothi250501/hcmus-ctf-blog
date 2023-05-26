import { PaletteMode } from "@mui/material";
import {createTheme as createThemeMui} from '@mui/material/styles';
import { dark, light } from "@mui/material/styles/createPalette";

export const createTheme = (mode: PaletteMode) => {
    const theme = createThemeMui({
        palette: mode === 'light' ? light : dark,
        typography: fonts,
    })
}