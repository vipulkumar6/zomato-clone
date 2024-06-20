import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import './BreadCrumb.css'
const BreadCrumb = () => {
    return (
        <div className='maxwidth breadcrumb'>
            <Breadcrumbs aria-label="breadcrumb">
                <Link className='link' underline="hover" color="inherit" href="/">
                    Home
                </Link>
                <Link
                    className='link'
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    India
                </Link>
                <Typography className='link active' color="text.primary">Dehradun Restaurants</Typography>
            </Breadcrumbs>
        </div>
    )
}

export default BreadCrumb
