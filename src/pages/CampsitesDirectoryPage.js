import { Container } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import SubHeader from '../components/SubHeader';
import React from 'react';

const CampsitesDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='Directory' detail={true} />
            <CampsitesList />
        </Container>
    );
};

export default CampsitesDirectoryPage;