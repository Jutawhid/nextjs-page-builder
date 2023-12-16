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
import { MAIN_BORDER_COLOR } from '../../components/common';
import CustomModal from '../../components/CustomModal';
import CustomAssetManager from '../../components/CustomAssetManager';
import Topbar from '../../components/headers/Topbar';
import CenterArea from '../../components/center';
import RightSidebar from '../../components/RightSidebar';
import { Grid, Stack } from '@mui/material';
import CustomTraitManager from '@/components/CustomTraitManager';
import LeftBlock from '@/components/leftBlock'
import HeroImage from '@/components/theme/HeroImage';
import styles from '../../components/theme/leftblock.module.css'
import imgIcon from '../assets/picture 1.svg';
import CustomButton from '@/components/theme/CustomButton';
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
const svgText = `<svg style="width:12px;height:12px" viewBox="0 0 24 24">
<path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
</svg>`;
const svgLink = `<svg style="width:12px;height:12px" viewBox="0 0 24 24">
<path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z" />
</svg>`;
const svgImage = `<svg style="width:12px;height:12px" viewBox="0 0 24 24">
<path fill="currentColor" d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
</svg>`;

const blocks = [
  {
    id: 'image',
    label: 'Hero Image',
    category: 'My Custom',
    media: svgImage,
    activate: true,
    content: { type: 'image', style: { padding: '10px' } }
  },
  {
    id: 'button',
    label: 'Button',
    category: 'My Custom',
    media: svgImage,
    activate: true,
    content: {
      type: 'button',
      content: <CustomButton text="Click me" />,
      style: { padding: '10px' },
    }
  },
  {
    id: 'input',
    label: 'Searchbar',
    category: 'My Custom',
    media: svgImage,
    activate: true,
    content: {
      type: 'input',
      content: `<input type="text" class="search-bar" placeholder="Search...">`,
      style: { padding: '10px' },
    }

  }, {
    id: 'image',
    label: 'Container',
    category: 'Basic',
    media: svgImage,
    activate: true,
    content: { type: 'image' }
  }
];
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
  blockManager: {
    custom: true,
    blocks,
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
        <Grid container style={{ backgroundColor: '#2B2B2B', color: "#fff" }}>
          <Grid sm={12}>
            <Topbar className="min-h-[48px]" />
          </Grid>
          <Grid sm={12}>
            <Grid container>
              <Grid sm={2}>
                <LeftBlock />
              </Grid>
              <Grid sm={8}>
                {/* <Canvas className="flex-grow gjs-custom-editor-canvas" /> */}
                <CenterArea />
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
