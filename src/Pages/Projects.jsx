import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Card from "../Organisms/Card/index";

import { getProjects } from '../Redux/Actions/ProjectActions'

const Project = props => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProjects())
    }, [])

    const projects = useSelector(state => state.Project)
    
    return <Card projects={ projects } />
}


export default Project