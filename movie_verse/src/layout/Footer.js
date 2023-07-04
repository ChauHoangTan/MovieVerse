import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import location from '../assets/images/icon/location.png'
import student from '../assets/images/icon/student.png'

import './LayoutStyle.scss'

function Footer() {
    return (
        <Container fluid className='footer'>
            <Row>
                <Col>
                    <Row className="title-footer"> GET IN TOUCH </Row>
                    <Row>
                        <div className="compo-footer" style={{ fontSize: "17px", fontWeight: "500" }}>
                            <img src={location} alt="location" style={{ width: "15px", marginRight: "5px" }} />
                            Đại học Khoa Học Tự Nhiên - ĐHQG TPHCM
                        </div>
                    </Row>
                    <Row>
                        <div className="compo-footer" >
                            <img src={student} alt="student" style={{ width: "14px", marginRight: "5px" }} />
                            20127403 - Phạm Trần Minh Ngọc
                        </div>
                    </Row>
                    <Row>
                        <div className="compo-footer">
                            <img src={student} alt="student" style={{ width: "14px", marginRight: "5px" }} />
                            20127661 - Châu Hoàng Tấn
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;