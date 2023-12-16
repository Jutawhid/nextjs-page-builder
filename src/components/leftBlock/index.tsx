import * as React from 'react';
import { BlocksResultProps, BlocksProvider } from '@grapesjs/react';
import { MAIN_BORDER_COLOR, cx } from '../common';
import { FunctionComponent } from "react";
import styles from "./leftblock.module.css";
import { Box, Grid, Stack, Typography } from '@mui/material';
import CustomBlockManager from './CustomBlockManager';
import MyBlockManager from './MyBlockManager';

const style = {
  button: {
    display: 'flex',

    padding: "10px 20px",
    width: "30%",
    height: "80px",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#2F3031",
    borderRadius: "10px",
    fontSize: '14px',
  }
}
export default function LeftBlock() {
  return (
    <>
      <Stack p={1}>
        <Stack display={'flex'} mt={1}>
          <BlocksProvider>
            {(props) => <CustomBlockManager {...props} />}
          </BlocksProvider>
        </Stack>
      </Stack>
    </>
  );
}
