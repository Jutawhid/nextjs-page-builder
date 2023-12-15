import * as React from 'react';
import { BlocksResultProps } from '@grapesjs/react';
import { MAIN_BORDER_COLOR, cx } from '../common';
import { Box, Typography } from '@mui/material';


const style = {
  button: {
    display: 'flex',
    padding: "10px 20px",
    width: "auto",
    height: "80px",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#2F3031",
    borderRadius: "10px",
    fontSize: '14px',
  }
}
export type MyBlockManagerProps = Pick<
  BlocksResultProps,
  'mapCategoryBlocks' | 'dragStart' | 'dragStop'
>;
export default function MyBlockManagerProps({
  mapCategoryBlocks,
  dragStart,
  dragStop,
}: MyBlockManagerProps) {
  console.log('Block', mapCategoryBlocks)
  return (
    <div className="gjs-custom-block-manager text-left">
      {Array.from(mapCategoryBlocks).map(([category, blocks]) => (
        <div key={category}>
          <div className={cx('py-1 px-1', MAIN_BORDER_COLOR)}>
            My Component
          </div>
          <div className="grid grid-cols-3 gap-2 p-1">
            {blocks.map((block) => (
              <Box
                key={block.getId()}
                draggable
                // className={cx(
                //   'flex flex-col items-center border rounded cursor-pointer py-2 px-5 transition-colors',
                //   MAIN_BORDER_COLOR
                // )}
                sx={style.button}
                onDragStart={(ev) => dragStart(block, ev.nativeEvent)}
                onDragEnd={() => dragStop(false)}
              >
                <div
                  style={{ width: '12px', height: '12px'}}
                  dangerouslySetInnerHTML={{ __html: block.getMedia()! }}
                />
                <Typography
                  sx={{ fontSize: '10px'}}
                  title={block.getLabel()}
                >
                  {block.getLabel()}
                </Typography>
              </Box>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
