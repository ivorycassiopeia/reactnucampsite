import { Col } from 'reactstrap';
import Partner from './Partner';
import { selectAllPartners } from './partnersSlice';
import { useSelector } from 'react-redux';
import React from 'react';

const PartnersList = ({ partner }) => {
    const partners = useSelector(selectAllPartners(partner));

    return (
        <Col className='mt-4'>
            {partners.map((partner) => {
                return (
                    <div className='d-flex mb-5' key={partner.id}>
                        <Partner partner={partner} />
                    </div>
                );
            })}
        </Col>
    );
};

export default PartnersList;