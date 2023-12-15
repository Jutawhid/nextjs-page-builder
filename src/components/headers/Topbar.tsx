import * as React from 'react';
import { DevicesProvider, WithEditor  } from '@grapesjs/react';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { cx } from '../common';
import TopbarButtons from './TopbarButtons';
import { Button, Typography } from '@mui/material';

export default function Topbar({
    className,
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cx('gjs-top-sidebar flex items-center pl-2')} style={{ backgroundColor: '#2B2B2B', borderBottom: '1px solid #999'}}>
            <Typography sx={{ color: '#fff' }}>M4yours Editor</Typography>
            {/* <DevicesProvider>
                {({ selected, select, devices }) => (
                    <FormControl size="small">
                        <Select value={selected} onChange={(ev) => select(ev.target.value)}>
                            {devices.map((device) => (
                                <MenuItem value={device.id} key={device.id}>
                                    {device.getName()}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                )}
            </DevicesProvider> */}
            <WithEditor>
                <TopbarButtons className="ml-auto px-2" />
            </WithEditor>
            <Button sx={{ backgroundColor: '#F1614A !important;', height: "48px", borderRadius: 'unset', padding: "20px 40px" }}>Publish</Button>
        </div>
    );
}
