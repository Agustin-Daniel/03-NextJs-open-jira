import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'

import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const menuItems: string[] = ['inbox','Starred','Send Email','Drafts']

export const Sidebar = () => {
  return (
    <Drawer
        anchor='left'
        open={ true }
        onClose={ () => console.log('xd') }
    >
        <Box sx={{ width: 250  }}>

        <Box sx={{ padding:'5px 10px' }}>
            <Typography variant='h6'>Menu</Typography>
        </Box>

            <List>
                {
                    menuItems.map( (text, index) => (
                        <ListItemButton key={ text }>
                            <ListItemIcon>
                                { index % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon />}
                            </ListItemIcon>
                            <ListItemText primary={ text } />
                        </ListItemButton>
                    ))
                }
            </List>

            <Divider />

            <List>
                {
                    menuItems.map( (text, index) => (
                        <ListItemButton key={ text }>
                            <ListItemIcon>
                                { index % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon />}
                            </ListItemIcon>
                            <ListItemText primary={ text } />
                        </ListItemButton>
                    ))
                }
            </List>

        </Box>

    </Drawer>
  )
}

