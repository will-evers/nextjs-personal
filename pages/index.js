import { Container, Row, Col, Image, Jumbotron, Alert, Nav} from 'react-bootstrap'
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import {Document, Page} from 'react-pdf'
import Head from 'next/head'
import Link from 'next/link'

const Index = props => {
    return (
      <Container>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </Head>
        <Row xs={6} md={6} lg={6} style={{justifyContent: 'center', width: '100%'}} fluid>
          <Col style={{padding: '1rem'}} xs={6} md={4}>
            <Image src='/jh.jpg' roundedCircle fluid />
          </Col>
          <Col>
            <Jumbotron style={{height: '90%', margin: {top: '2rem'}}}>
              <h2>Will Evers</h2>
              <b>Lead Engineer for RentCheck Holdings llc</b>
              <p>Software Developer, Technical Leader, Snowboarder, Mountain Biker</p>
              <p>Philadelphia, PA &amp; New Orleans, LA</p>
              <Link href="mailto:wpevers@gmail.com">
                <a>wpevers@gmail.com</a>
              </Link>
            </Jumbotron>
          </Col>
        </Row>
        <Row xs={6} md={6} lg={6} style={{justifyContent: 'center', background: '#e9ecef', width:'100%'}} fluid>
          <Nav
            style={{padding: '1rem', margin: {top: '2rem'}}}
            activeKey="/index"
          >
            <Nav.Item>
              <Nav.Link href="https://www.linkedin.com/in/william-evers-795a3632/">LinkedIn</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='https://www.instagram.com/wpevers/?hl=en'>Instagram</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://getrentcheck.com">RentCheck</Nav.Link>
            </Nav.Item>

          </Nav>
        </Row>
        <Row xs={6} md={6} lg={6} style={{justifyContent: 'center'}} fluid>
          <Document file='/site-resume.pdf' >
            <Page pageNumber={1} />
            <Page pageNumber={2} />
          </Document>
        </Row>
        <Row style={{justifyContent: 'center', width: '100%'}}>
          <Alert style={{justifyContent: 'center', width: '100%'}} variant='info'>
            Personal page made with React and Next.js, and hosted using Docker and Elastic Beanstalk
          </Alert>
        </Row>
      </Container>
    );
  }

  Index.getInitialProps = async ()=>{
    return {}
  }

  export default Index;