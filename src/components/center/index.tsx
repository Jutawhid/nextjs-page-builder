import * as React from 'react';

import { Box, Grid, Stack, Typography } from '@mui/material';
import { DevicesProvider, Canvas as MobileCanvas } from '@grapesjs/react';
import { Canvas as DesktopCanvas } from '@grapesjs/react';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import HeroImage from '../theme/HeroImage';

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
    },
    centerWrapper: {
        backgroundColor: '#1E1E1E', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItem: 'center', 
        flexDirection: 'row',
        paddingTop: '60px',
        paddingButtom: '60px',

    },
    title: {
        width: '100%', 
        height: '35px', 
        padding: '10px 15px',
        backgroundColor: "#2B2B2B",
        fontSize: '12px',
        borderRadius: '10px',
        marginBottom: '15px'
    }
}
export default function CenterArea() {
    return (
        <>
            <Stack sx={style.centerWrapper} gap={2}>
                <Stack sx={{ width: '600px' }}>
                    {/* <HeroImage/> */}
                    <Stack sx={style.title}>Desktop</Stack>
                    <Stack>
                        <DesktopCanvas className="flex-grow gjs-custom-editor-canvas" id="desktop"/>
                        
                    </Stack>
                </Stack>
                {/* <Stack sx={{ width: '210px' }}>
                    <Stack sx={style.title}>Mobile</Stack>
                    <Stack>
                        <MobileCanvas className="flex-grow gjs-custom-editor-canvas" id="mobilePortrait"/>
                    </Stack>
                </Stack> */}
            </Stack>
        </>
    );
}
