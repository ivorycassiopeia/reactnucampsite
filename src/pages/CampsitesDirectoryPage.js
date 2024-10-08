import { Container } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import React from 'react';

const CampsitesDirectoryPage = () => {
    return (
        <Container>
            <CampsitesList />
        </Container>
    );
};

export default CampsitesDirectoryPage;