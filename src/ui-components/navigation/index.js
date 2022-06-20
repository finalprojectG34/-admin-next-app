import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'

import {
  Box,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  Stack,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Button,
} from '@mui/material'

import MuiAppBar from '@mui/material/AppBar'
import MuiDrawer from '@mui/material/Drawer'

import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import {
  Person,
  Group,
  VerifiedUser,
  LocalGroceryStore,
  AddShoppingCart,
  ScreenSearchDesktop,
  Category,
  LocationSearching,
  FilterList,
} from '@mui/icons-material'

import Link from 'next/link'
import { useRouter } from 'next/router'
import fbConfig from '../../firebase/fb-config'

const drawerWidth = 240

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))

export default function NavigationDrawer(props) {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleLogout = () => {
    // Logout()
    localStorage.clear()

    fbConfig
      .signOut(fbConfig.auth)
      .then(() => {
        console.log('sign out success')
      })
      .catch((e) => {
        console.log('sign out error', e)
      })
    router.push('/')
    console.log('logging out')
  }
  const userOptions = [
    {
      text: 'Create User',
      link: '/user/create-user',
    },
    {
      text: 'User List',
      link: '/user/user-list',
    },
    {
      text: 'User Search',
      link: '/user/search-user',
    },
  ]

  const shopOptions = [
    {
      text: 'Create Shop',
      link: '/shop/create',
    },
    {
      text: 'Shop List',
      link: '/shop/list',
    },
    {
      text: 'Shop Search',
      link: '/shop/search',
    },
  ]

  const categoryOptions = [
    {
      text: 'Create Category',
      link: '/category/create-category',
    },
    {
      text: 'Category List',
      link: '/category/category-list',
    },
    {
      text: 'Category Search',
      link: '/category/search-category',
    },
  ]

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        enableColorOnDark
        position='fixed'
        open={open}
        elevation={0}
        sx={{
          bgcolor: theme.palette.primary.main,
          transition: theme.transitions.create('width'),
        }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Stack
            direction={'row'}
            justifyContent='space-between'
            width={'100%'}
            alignItems='center'
          >
            <Typography
              color={theme.palette.secondary.light}
              gutterBottom
              variant='h3'
              noWrap
              component='div'
              margin='unset'
            >
              Admin Panel
            </Typography>
            <Button
              variant='text'
              size='large'
              sx={{ color: `${theme.palette.secondary.light}` }}
              onClick={() => handleLogout()}
            >
              Logout
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer variant='permanent' open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {userOptions.map((options, index) => (
            <Link href={options.link} key={options.link}>
              <ListItem
                key={options.text}
                disablePadding
                sx={{ display: 'block' }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    ":hover": {
                      backgroundColor: theme.palette.primary.light
                    }
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {index === 0 ? (
                      <Person />
                    ) : index % 2 === 0 ? (
                      <VerifiedUser />
                    ) : (
                      <Group />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={options.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {shopOptions.map((options, index) => (
            <Link href={options.link} key={options.link}>
              <ListItem
                key={options.link}
                disablePadding
                sx={{ display: 'block' }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    ":hover": {
                      backgroundColor: theme.palette.primary.light
                    }
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {index === 0 ? (
                      <AddShoppingCart />
                    ) : index % 2 === 0 ? (
                      <ScreenSearchDesktop />
                    ) : (
                      <LocalGroceryStore />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={options.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {categoryOptions.map((options, index) => (
            <Link href={options.link} key={options.link}>
              <ListItem
                key={options.link}
                disablePadding
                sx={{ display: 'block' }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    ":hover": {
                      backgroundColor: theme.palette.primary.light
                    }
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {index === 0 ? (
                      <Category />
                    ) : index % 2 === 0 ? (
                      <LocationSearching />
                    ) : (
                      <FilterList />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={options.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Box style={{ padding: '30px' }}>{props.children}</Box>
      </Box>
    </Box>
  )
}
