import { IconButton, Menu, MenuItem } from '@mui/material';
import { NotificationIcon, OptionIcon } from '../icons';
import { useState } from 'react';

function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <div className='flex justify-between px-8 pt-6 pb-9 items-center'>
                <h2 className='font-bold text-2xl'>on.time</h2>
                <div className='flex gap-6'>
                    <div>
                        <IconButton>
                            <NotificationIcon />
                        </IconButton>
                    </div>
                    <div>
                        <IconButton
                            id='basic-button'
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup='true'
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <OptionIcon />
                        </IconButton>
                        <Menu
                            id='basic-menu'
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                            sx={{
                                '& .css-1ka5eyc-MuiPaper-root-MuiMenu-paper-MuiPopover-paper': {
                                    background: '#7E64FF',
                                    color: '#fff',
                                },
                            }}
                        >
                            <MenuItem onClick={handleClose}>Edit</MenuItem>
                            <MenuItem onClick={handleClose}>Delete</MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
