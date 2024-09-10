import React, { useEffect } from 'react';
import UserDetails from './UserDetails';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import LeadWidget from './LeadWidget';
import QueryWidget from './QueryWidget';
import RegistrationWidget from './RegistrationWidget';
import ProcessingWidget from './ProcessingWidget';
import RecentActivities from './RecentActivities';

const DashBoard = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('DashBoard'));
    }, [dispatch]);

    return (
        <>
            <UserDetails />
            <LeadWidget />
            <QueryWidget />
            <RegistrationWidget />
            <ProcessingWidget />
            <RecentActivities />
        </>
    )
}

export default DashBoard;
