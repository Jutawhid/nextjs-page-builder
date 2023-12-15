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
import { MAIN_BORDER_COLOR } from '../components/common';
import CustomModal from '../components/CustomModal';
import CustomAssetManager from '../components/CustomAssetManager';
import Topbar from '../components/headers/Topbar';
import CenterArea from '../components/center';
import RightSidebar from '../components/RightSidebar';
import { Grid, Stack } from '@mui/material';
import CustomBlockManager from '@/components/CustomBlockManager';
import CustomTraitManager from '@/components/CustomTraitManager';
import LeftBlock from '@/components/leftBlock'
// import './style.css';

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

const gjsOptions: EditorConfig = {
  height: '100vh',
  storageManager: false,
  undoManager: { trackSelection: false },
  selectorManager: { componentFirst: true },
  projectData: {
    assets: [
      'https://via.placeholder.com/350x250/78c5d6/fff',
      'https://via.placeholder.com/350x250/459ba8/fff',
      'https://via.placeholder.com/350x250/79c267/fff',
      'https://via.placeholder.com/350x250/c5d647/fff',
      'https://via.placeholder.com/350x250/f28c33/fff',
    ],
    pages: [
      {
        name: 'Home page',
        component: `<h1>GrapesJS React Custom UI</h1>`,
      },
    ],
  },
};

export default function Home() {
  const onEditor = (editor: Editor) => {
    console.log('Editor loaded');
    (window as any).editor = editor;
  };

  return (
    // @ts-ignore
    <ThemeProvider theme={theme}>
      <GjsEditor
        className="gjs-custom-editor"
        grapesjs="https://unpkg.com/grapesjs"
        grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
        options={gjsOptions}
        plugins={[
          {
            id: 'gjs-blocks-basic',
            src: 'https://unpkg.com/grapesjs-blocks-basic',
          },
        ]}
        onEditor={onEditor}
      >
        <Grid container style={{ backgroundColor: '#2B2B2B', color: "#fff"}}>
          <Grid sm={12}>
            <Topbar className="min-h-[48px]" />
          </Grid>
          <Grid sm={12}>
            <Grid container>
              <Grid sm={2}>
                <LeftBlock/>
                {/* <BlocksProvider>
                  {(props) => <CustomBlockManager {...props} />}
                </BlocksProvider> */}
              </Grid>
              <Grid sm={8}>
                {/* <Canvas className="flex-grow gjs-custom-editor-canvas" /> */}
                <CenterArea/>
              </Grid>
              <Grid sm={2}>
                {/* <RightSidebar
                  className={`gjs-column-r w-[300px] border-l ${MAIN_BORDER_COLOR}`}
                /> */}
                <TraitsProvider>
                  {(props) => <CustomTraitManager {...props} />}
                </TraitsProvider>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
        <ModalProvider>
          {({ open, title, content, close }) => (
            <CustomModal
              open={open}
              title={title}
              children={content}
              close={close}
            />
          )}
        </ModalProvider>
        <AssetsProvider>
          {({ assets, select, close, Container }) => (
            <Container>
              <CustomAssetManager
                assets={assets}
                select={select}
                close={close}
              />
            </Container>
          )}
        </AssetsProvider>
      </GjsEditor>
    </ThemeProvider>
  );
}
