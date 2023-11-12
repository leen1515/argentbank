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

/**
 * Modal component.
 *
 * Component to display a modal. It can be toggled on and off with the `show` prop.
 * The `onClose` function prop allows for closing the modal, it is clicked.
 * Any children passed to this component will be rendered inside the modal content area.
 *
 * @name Modal
 * @memberof UI
 * @component
 * @param {boolean} show - Determines if the modal is visible.
 * @param {function} onClose - Function to call when the modal is requested to close.
 * @param {React.ReactNode} children - The content to be displayed inside the modal.
 * @example
 * return (
 *   <Modal show={true} onClose={handleClose}>
 *     <p>Modal Content</p>
 *   </Modal>
 * )
 */
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
