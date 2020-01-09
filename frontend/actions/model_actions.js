export const OPEN_MODAL = 'OPEN MODAL';
export const CLOSE_MODAL = 'CLOSE-MODAL';

export const openModal = modal => {
    return {
        type: OPEN_MODAL,
        modal
    };
};


export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}