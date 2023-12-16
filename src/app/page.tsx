'use client'

import * as React from 'react';
import GjsEditor, {
  AssetsProvider,
  Canvas,
  ModalProvider,
  BlocksProvider,
  TraitsProvider
} from '@grapesjs/react';
import type { Editor, EditorConfig } from 'grapesjs';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomeCom from '@/components/home/index';
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    }
  },
});




export default function Home() {
  const onEditor = (editor: Editor) => {
    console.log('Editor loaded');
    (window as any).editor = editor;
  };

  return (
    // @ts-ignore
    <ThemeProvider theme={theme}>
      <HomeCom/>
      </ThemeProvider>
  );
}
