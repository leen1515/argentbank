import styled from 'styled-components';

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 2rem;
    text-align: center;
`;

function Modal({ show, onClose, children }) {
    if (!show) return null;

    return (
        <ModalWrapper onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                {children}
            </ModalContent>
        </ModalWrapper>
    );
}

export default Modal;
