import ImagesList from './component/ImagesList/ImagesList';
import Nav from './component/Nav';
import Upload from './component/Upload/Upload';
import { Container } from '@mui/material';
import AuthContext from './context/AuthContext';
import Modal from './component/Modal';
import MainNotification from './component/MainNotification';
import Loading from './component/Loading';


function App() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', mt: '3rem' }}>
      <AuthContext>
        <Loading />
        <Modal />
        <MainNotification />
        <Nav />
        <Upload />
        <ImagesList />
      </AuthContext>
    </Container>
  );
}

export default App;